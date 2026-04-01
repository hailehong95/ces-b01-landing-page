"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center px-8 py-24 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 z-10"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
            Available for Projects
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05] text-on-background mb-8">
            Crafting <span className="text-primary italic">Digital</span> Legacies.
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed mb-12 font-light">
            Specializing in high-fidelity digital experiences that blend editorial aesthetics with
            functional precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group"
            >
              Start a Project
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-surface-container-highest text-on-secondary-container px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-variant transition-colors"
            >
              View Work
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden editorial-shadow bg-surface-container-high relative">
            <img
              alt="Professional portrait of the creator"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx3eFWS0-BDdVBSflGiHYH5TCIpuR0T5svAkS6eFA69OY_XOm6pNMuqaM0jFrjUYa6pygojpZn27vuzly3DbtQiohXzr37wSu_5bkmMYFCuiww2hZoVF-pAFxQuKgri4iQFzkOVJdoYIQ7dFXeeOJ-8bL6DoGpFoLvMjpp2yVe-2sdwqndo2hA4XatwJW7Fc1J96PQNrZW2FAjXMzuU7O4t6GRDbD3Xho2XW5-gl3nHxZYqW-P4Hyw75YW0FCWpGjPDPVLyP0eC9o"
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 p-6 glass-header rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <p className="font-bold text-on-background">Alex Sterling</p>
                  <p className="text-sm text-on-surface-variant">Principal Designer & Lead Dev</p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Decorative Element */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
