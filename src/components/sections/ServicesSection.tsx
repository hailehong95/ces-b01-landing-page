"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    icon: "architecture",
    desc: "User-centric interfaces that marry high-end typography with intuitive interactions. We design for clarity.",
    delay: 0,
  },
  {
    title: "Development",
    icon: "terminal",
    desc: "Performance-driven frontends built with modern stacks. Clean code for seamless scalability and speed.",
    delay: 0.2,
    extraClass: "lg:translate-y-12",
  },
  {
    title: "Digital Strategy",
    icon: "psychology",
    desc: "Positioning your brand as a market leader through curated visual narratives and market-aware insights.",
    delay: 0.4,
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 px-8 bg-background" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl font-bold mb-6">Expertise.</h2>
          <p className="text-on-surface-variant text-xl max-w-2xl">
            Tailored services designed for founders and agencies who value aesthetic precision and
            technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: svc.delay, duration: 0.6 }}
              className={`group p-8 rounded-xl bg-surface-container-lowest editorial-shadow hover:scale-[1.02] transition-all duration-300 ${
                svc.extraClass || ""
              }`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container mb-8 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">{svc.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8">{svc.desc}</p>
              <a
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:underline underline-offset-8"
                href="#"
              >
                Learn More
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
