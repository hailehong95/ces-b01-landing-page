"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="bg-surface-container-low py-32 px-8" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Driven by a vision of <br />
              <span className="text-primary">Quiet Authority.</span>
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-body max-w-xl">
              <p>
                My work is a dialogue between minimalism and complexity. With over a decade of
                experience, I've learned that the most effective solutions are often those that say
                the most by doing the least.
              </p>
              <p>
                I don't just build websites; I construct digital architectures that grow with your
                brand. My philosophy is rooted in the "Digital Gallery" approach—curating every
                pixel to ensure a premium, focused journey for the user.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-outline-variant/20">
              {[
                { number: "12+", label: "Years Exp." },
                { number: "150", label: "Projects" },
                { number: "24", label: "Awards" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <p className="text-4xl font-black text-primary mb-1">{stat.number}</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Signature Editorial Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative mt-12 lg:mt-0"
          >
            <div className="bg-surface-container-highest rounded-xl w-full aspect-square overflow-hidden relative">
              <img
                alt="Workspace environment"
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDYLsd1y5YcD2eveeliFAv3YSKyeveuIVz58KWsXfL7PEjyuZk6CNq7Qz2tny2jygBj6S8zYJY8ioUOsrX2t2_EkGeBfr4ROHJJMBHDuaPaUkphxIGlP8J5qKCLF39cTP0keJx5ZureaYbXsky6XgyhwT7STW1sZiwQWvmlMdDY-PLZ69fLQHGf0TErzOzz6FsGskpRMqrGafvu1CqF20ImHk21gHrdImbScUp59pDoBvC4AHVyG3ZEIjVtglYzZodRdeY_BkLKk8"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-12 -left-8 md:-left-16 bg-surface-container-lowest p-10 editorial-shadow rounded-xl max-w-sm"
            >
              <h3 className="text-2xl font-bold mb-4">The Methodology</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Everything starts with intent. I break the standard grid to create a rhythmic pace
                that guides the eye naturally.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
