"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { site } from "@/lib/site"

export function AwardsSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section
      ref={containerRef}
      id="awards"
      className="relative py-24 md:py-32 bg-dark-brown overflow-hidden"
    >
      {/* Background pattern — subtle PCB-trace lines */}
      <motion.svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        style={{ y: backgroundY }}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M0,200 H300 V400 H600 V200 H900 V500 H1200" stroke="#B0723C" strokeWidth="1" fill="none" />
        <path d="M0,600 H200 V450 H500 V650 H800 V450 H1200" stroke="#5B7965" strokeWidth="1" fill="none" />
        <circle cx="300" cy="200" r="4" fill="#B0723C" />
        <circle cx="600" cy="400" r="4" fill="#B0723C" />
        <circle cx="900" cy="200" r="4" fill="#B0723C" />
        <circle cx="200" cy="600" r="4" fill="#5B7965" />
        <circle cx="500" cy="450" r="4" fill="#5B7965" />
        <circle cx="800" cy="650" r="4" fill="#5B7965" />
      </motion.svg>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <p className="text-bronze text-sm tracking-[0.3em] uppercase mb-4">
            {site.awards.label}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream mb-6">
            {site.awards.heading}
          </h2>
          <p className="text-warm-beige/60 max-w-xl leading-relaxed">
            {site.awards.description}
          </p>
        </motion.div>

        {/* Awards list */}
        <ul className="space-y-0 border-t border-stone/30">
          {site.awards.items.map((award, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative border-b border-stone/30 py-7 md:py-9 grid grid-cols-1 md:grid-cols-[110px_1fr_auto] gap-2 md:gap-10 items-baseline"
            >
              {/* Year */}
              <span className="text-bronze text-sm md:text-base tracking-[0.2em] uppercase">
                {award.year}
              </span>

              {/* Title + description */}
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2 group-hover:text-bronze transition-colors duration-500">
                  {award.title}
                </h3>
                <p className="text-warm-beige/60 leading-relaxed max-w-2xl">
                  {award.description}
                </p>
              </div>

              {/* Decorative arrow — purely ornamental */}
              <span
                aria-hidden
                className="hidden md:inline-block text-bronze/40 group-hover:text-bronze group-hover:translate-x-2 transition-all duration-500"
              >
                <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                  <path d="M0 6 H28 M22 1 L28 6 L22 11" stroke="currentColor" strokeWidth="1" />
                </svg>
              </span>

              {/* Hover underline accent */}
              <motion.span
                className="absolute -bottom-px left-0 h-px bg-bronze"
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
