"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full glass-header shadow-sm dark:shadow-none"
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-slate-800 dark:text-slate-100">
          ELITE
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { name: "About", href: "#about" },
            { name: "Services", href: "#services" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors duration-300 font-headline tracking-tight text-sm font-bold ${
                item.name === "Contact"
                  ? "text-slate-900 dark:text-white border-b-2 border-slate-500 pb-1"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm ease-out duration-300 hover:bg-primary-dim shadow-lg shadow-primary/10"
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.header>
  );
}
