"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="py-32 px-8 bg-background relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-extrabold mb-8 tracking-tighter">Let's work together.</h2>
          <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
            Have a project in mind or just want to say hello? I'm always open to discussing new
            opportunities and creative collaborations.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                  Email
                </p>
                <p className="text-xl font-bold">hello@elitestudio.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
                  Location
                </p>
                <p className="text-xl font-bold">London, UK / Remote</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-container-lowest p-10 md:p-12 rounded-3xl editorial-shadow"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant ml-1">Subject</label>
              <select className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none appearance-none">
                <option>New Project Inquiry</option>
                <option>Collaboration</option>
                <option>General Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant ml-1">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 group shadow-xl shadow-primary/20"
            >
              Send Message
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                send
              </span>
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
