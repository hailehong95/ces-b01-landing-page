"use client";

import { motion } from "framer-motion";

export function PortfolioSection() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div>
            <h2 className="text-5xl font-bold mb-6">Selected Works.</h2>
            <p className="text-on-surface-variant text-xl">
              A collection of projects defined by detail and depth.
            </p>
          </div>
          <button className="bg-surface-container-highest text-on-background px-8 py-4 rounded-full font-bold hover:bg-surface-variant transition-colors">
            Browse Archive
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Feature Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-surface-container-highest aspect-[16/9] mb-6">
              <img
                alt="Digital design project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2uUC2rTH87xtDu9kvNjSLoIbSRU0s3OxIKz_kxmfTv3-hUs_v4-C6DBwtU--cTdcZBChR9d4aJVBY8TS3XRx_GGUyI3AaD7gfQ8Efqm42hbxF0cUh3sPU8ojUKeyi-QIt-SD_gD36xJC5Sw_ccD8LiZmfVwq9sczM2Ej-pbJVbKPg76_ylJj5gnMZPQ55-WHGlgaZDbCLwBEdty9niCwV-zllZtaKvBW9ZOa5tfin6pWKEcB6yGCN4MxQ1eGT14vd_GCyNO54y_0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold mb-2">Nexus Crypto Wallet</h4>
                <p className="text-on-surface-variant mb-4">Branding, UI Design, Development</p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full">
                    Motion
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined p-3 bg-surface-container-highest rounded-full">
                north_east
              </span>
            </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-surface-container-highest aspect-square mb-6">
              <img
                alt="Tech product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6mPTQjmti6GS_4TeTnxOR7wnBYTCahn9vSY6txLKUfscjO5d0NjTRPZdXaA-qW9jN00fHCr9glxYOcpbqJSwDf5txpTIDzg8pPNvI2beqMgu6FKTxmAax7nKvW2HRsjhwH3chPy3L9WNhFOdwNAxbBgXrRzoAO7kyYefdA8qOdqqaO7BkjpACkkppXViHNRq8RkEAOrDb6ISWCReppYLf7siridpcDXX7m33KB0W_cw8FnI_vqbB6mRzwzJSetEeG0_8hO4epKNY"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Vantive E-Commerce</h4>
            <p className="text-on-surface-variant mb-4">Design System</p>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full">
                Figma
              </span>
            </div>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-surface-container-highest aspect-square mb-6">
              <img
                alt="Dashboard project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQVRXH26XaFFgGZ2Qm_i_9O6OW1vuWxIz96S6XKPYXjsw9yY8iGySBpYDxjoD_FMUsMpyiRSn3-GeC1dXeX2GaXl08YrSnUBBJDm--pSguD-9P-iA0o7J4rXxp3KG2jLqx4jeoFjB6tGGt99q3uv5qDSdX4js0NX_-EyZuHZQMcpoGnnPnC3zxGb3Vz1z89kT7GXNtsZ3FJz7PX_4rHJ3Bd7l_YTVbOwdkOl2OQfayPJ9YV5-QQ05I7ElHlxU4Un5p7_d0F-aekAk"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">Helios Analytics</h4>
            <p className="text-on-surface-variant mb-4">Product Design</p>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full">
                Dashboard
              </span>
            </div>
          </motion.div>

          {/* Wide Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-8 group"
          >
            <div className="relative overflow-hidden rounded-2xl bg-surface-container-highest aspect-[16/7] mb-6">
              <img
                alt="Creative agency project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsmkcH4rTg_NYG9xIYo_WLW7DuMcmS7Ua05jZ_3CXBvUzQiiTWO9t2mFhEHGmeB_M-DH_F4hj7UV_0BTce0YQ6B7TtOr82Xr8Pl86mElyJCjjoJW3hQZNv5_o5znNruwE0IgCK_-_j6qsZXITYr8lGJZ9qoDvrvlMmYsWSn4y8dYHCTM3VUrDEKpQmZ3SXpn097ZM3wIhaOyWdTxjZ8kyZLl9XJMF-S8y072O4XF2pXyV-Q5_NFwlh9NWhwVpeP4Cl3oZESy20hs"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-2xl font-bold mb-2">Aura Agency Site</h4>
                <p className="text-on-surface-variant mb-4">Development, Content Strategy</p>
                <div className="flex gap-3">
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-semibold rounded-full">
                    Tailwind
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined p-3 bg-surface-container-highest rounded-full">
                north_east
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
