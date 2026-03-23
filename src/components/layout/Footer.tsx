"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/20 dark:border-slate-800/20 bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          <div className="font-headline font-bold text-slate-800 dark:text-slate-200 text-2xl mb-2">
            ELITE
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-body text-sm tracking-wide">
            © {new Date().getFullYear()} Elite Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {["Privacy Policy", "Terms of Service", "LinkedIn", "Dribbble"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-500 dark:text-slate-400 font-body text-sm tracking-wide transition-all duration-300 ease-in-out hover:text-slate-800 dark:hover:text-slate-200 underline-offset-4 hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
