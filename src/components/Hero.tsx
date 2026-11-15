"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { brand } from "@/data/brand";
import Emblem from "./Emblem";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const { eyebrow, title, supporting, cta, scrollHint } = brand.hero;

  return (
    <section id="top" className="relative overflow-hidden bg-espresso-950">
      {/* warm ember glow, pure CSS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 left-1/2 h-[28rem] w-[130%] -translate-x-1/2 rounded-full bg-amber-500/[0.12] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(245,238,227,0.045) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* fine champagne rules framing the wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne-300/50 to-transparent"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 pb-14 pt-12 text-center sm:px-6 sm:pb-16 sm:pt-16">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
          <Emblem className="size-14 text-champagne-300 sm:size-16" />
        </motion.div>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 text-[11px] font-bold uppercase tracking-[0.42em] text-amber-300"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 font-serif text-4xl font-semibold leading-[1.05] text-ivory-50 sm:text-6xl"
        >
          {title}
          <span className="mt-1 block font-serif text-lg font-medium italic tracking-normal text-champagne-300 sm:text-2xl">
            {brand.descriptor}
          </span>
        </motion.h1>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-2 font-serif text-base italic text-ivory-50/70 sm:text-lg"
        >
          “{brand.tagline}”
        </motion.p>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-md text-sm leading-relaxed text-ivory-50/60 sm:text-base"
        >
          {supporting}
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col items-center gap-4"
        >
          <a
            href="#menu"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-8 text-sm font-bold text-espresso-950 transition-colors duration-200 hover:bg-amber-400"
          >
            {cta}
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory-50/45">
            {scrollHint}
            <ArrowDown className="ember-float size-3.5" aria-hidden="true" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
