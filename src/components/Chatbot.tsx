"use client";

// ============================================
// AI Chatbot - React Component
// ============================================

import { useState, useRef, useEffect, useCallback, type FormEvent, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { marked } from "marked";
import { sendChatMessage, DEFAULT_GREETING, type ChatMessage } from "@/lib/chatbot-api";

// --- Configure marked ---
marked.setOptions({
  breaks: true,
  gfm: true,
});

// --- Types ---
interface DisplayMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// --- Helper: generate unique ID ---
const generateId = () => `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

// --- SVG Icons ---
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const RefreshIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const MinimizeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

// ============================================
// LEAD CAPTURE - Constants & Helpers
// ============================================

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';
const LEAD_DATA_PATTERN = /\|\|LEAD_DATA:\s*(\{.*?\})\s*\|\|/;

// Session ID duy nhất cho mỗi lần tải trang
const AI_CHAT_SESSION_ID = 'session_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

/**
 * Gửi dữ liệu Lead lên Google Apps Script → Google Sheets
 */
async function sendLeadToGoogleSheets(
  leadData: { name?: string | null; phone?: string | null; email?: string | null },
  chatHistoryText: string
) {
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('⚠️ GOOGLE_SCRIPT_URL chưa được cấu hình.');
    return;
  }
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: leadData.name || '',
        phone: leadData.phone || '',
        email: leadData.email || '',
        source: window.location.href,
        sessionId: AI_CHAT_SESSION_ID,
        chatHistory: chatHistoryText,
        timestamp: new Date().toLocaleString('vi-VN'),
      }),
    });
    console.log('📤 Đã đồng bộ dữ liệu vào Google Sheets!');
  } catch (err) {
    console.warn('⚠️ Không gửi được dữ liệu lead:', err);
  }
}

/**
 * Bóc tách tag ||LEAD_DATA:...|| từ response AI.
 * Gửi dữ liệu lead lên Google Sheets nếu tìm thấy.
 * Trả về response đã xóa tag (hiển thị sạch cho khách).
 */
function processAIResponse(aiResponse: string, chatHistoryArray: ChatMessage[] = []): string {
  // Xây dựng text lịch sử chat cho Google Sheets
  let formattedHistory = '';
  if (chatHistoryArray.length > 0) {
    formattedHistory = chatHistoryArray
      .map((msg) => {
        const role = msg.role === 'user' ? 'Khách' : 'AI';
        const content = msg.content.replace(LEAD_DATA_PATTERN, '').trim();
        return `${role}: ${content}`;
      })
      .join('\n\n');
  }

  if (aiResponse.includes('||LEAD_DATA:')) {
    const match = aiResponse.match(LEAD_DATA_PATTERN);
    if (match && match[1]) {
      try {
        const leadData = JSON.parse(match[1]);
        console.log('✅ Dữ liệu khách hàng bóc được:', leadData);

        if (leadData.name || leadData.phone || leadData.email) {
          sendLeadToGoogleSheets(leadData, formattedHistory);
        }
      } catch (error) {
        console.error('❌ Lỗi parse JSON từ AI:', error);
      }
    }
    aiResponse = aiResponse.replace(LEAD_DATA_PATTERN, '').trim();
  }
  return aiResponse;
}

// ============================================
// CHATBOT COMPONENT
// ============================================

export default function Chatbot() {
  // --- State ---
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([
    {
      id: generateId(),
      role: "assistant",
      content: DEFAULT_GREETING,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // --- Refs ---
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatHistoryRef = useRef<ChatMessage[]>([]);

  // --- Auto-scroll to bottom ---
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  // --- Focus input when chat opens ---
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // --- Send message ---
  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    // Add user message
    const userMsg: DisplayMessage = {
      id: generateId(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    // Update chat history for API
    chatHistoryRef.current.push({ role: "user", content: text });

    try {
      // Call OpenRouter API
      let response = await sendChatMessage([...chatHistoryRef.current]);

      // Bóc tách lead data + gửi Google Sheets (nếu có)
      response = processAIResponse(response, chatHistoryRef.current);

      // Add assistant message (đã xóa tag ẩn)
      const botMsg: DisplayMessage = {
        id: generateId(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);

      // Update chat history
      chatHistoryRef.current.push({ role: "assistant", content: response });
    } catch {
      // Error message
      const errorMsg: DisplayMessage = {
        id: generateId(),
        role: "assistant",
        content:
          "⚠️ Xin lỗi, đã có lỗi xảy ra khi kết nối. Vui lòng thử lại sau hoặc liên hệ **Email: lehonghai@example.com** | **Zalo: 0123456789**",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Handle form submit ---
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  // --- Handle Enter key ---
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // --- Refresh chat ---
  const handleRefresh = () => {
    if (isRefreshing) return;

    // 1. Start spin animation
    setIsRefreshing(true);

    // 2. Clear all messages
    setMessages([]);

    // 3. Show default greeting
    setTimeout(() => {
      setMessages([
        {
          id: generateId(),
          role: "assistant",
          content: DEFAULT_GREETING,
          timestamp: new Date(),
        },
      ]);
    }, 100);

    // 4. Clear chat history
    chatHistoryRef.current = [];

    // 5. Stop spin after 500ms
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  // --- Render markdown safely ---
  const renderMarkdown = (content: string) => {
    const html = marked.parse(content) as string;
    return { __html: html };
  };

  // --- Animation Variants ---
  const windowVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const toggleVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { type: "spring" as const, stiffness: 400, damping: 15 },
    },
  };

  // ============================================
  // RENDER
  // ============================================

  return (
    <>
      {/* --- Chat Window --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            variants={windowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-avatar">🤖</div>
              <div className="chatbot-header-info">
                <div className="chatbot-header-name">AI Assistant</div>
                <div className="chatbot-header-status">
                  <span className="chatbot-status-dot" />
                  <span className="chatbot-status-text">Online</span>
                </div>
              </div>
              <div className="chatbot-header-actions">
                <button
                  className={`chatbot-header-btn ${isRefreshing ? "chatbot-refresh-spin" : ""}`}
                  onClick={handleRefresh}
                  title="Làm mới hội thoại"
                  aria-label="Refresh chat"
                >
                  <RefreshIcon />
                </button>
                <button
                  className="chatbot-header-btn"
                  onClick={() => setIsOpen(false)}
                  title="Thu nhỏ"
                  aria-label="Minimize chat"
                >
                  <MinimizeIcon />
                </button>
                <button
                  className="chatbot-header-btn"
                  onClick={() => setIsOpen(false)}
                  title="Đóng"
                  aria-label="Close chat"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`chatbot-message chatbot-message--${msg.role === "user" ? "user" : "bot"}`}
                >
                  <div className="chatbot-message-avatar">
                    {msg.role === "assistant" ? "🤖" : "👤"}
                  </div>
                  <div className="chatbot-message-content">
                    {msg.role === "assistant" ? (
                      <div
                        className="chat-markdown"
                        dangerouslySetInnerHTML={renderMarkdown(msg.content)}
                      />
                    ) : (
                      <span>{msg.content}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="chatbot-typing">
                  <div className="chatbot-message-avatar" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", width: 32, height: 32, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
                    🤖
                  </div>
                  <div className="chatbot-typing-dots">
                    <span className="chatbot-typing-dot" />
                    <span className="chatbot-typing-dot" />
                    <span className="chatbot-typing-dot" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form className="chatbot-input-area" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                className="chatbot-input"
                type="text"
                placeholder="Nhập tin nhắn..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                autoComplete="off"
              />
              <button
                type="submit"
                className="chatbot-send-btn"
                disabled={isLoading || !inputValue.trim()}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Toggle Button --- */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        variants={toggleVariants}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </motion.button>
    </>
  );
}
