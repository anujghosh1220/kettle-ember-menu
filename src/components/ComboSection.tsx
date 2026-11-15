"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Coffee, Flame, IceCreamCone, Soup, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { brand } from "@/data/brand";
import { formatPrice } from "@/data/menu";
import { resolvedCombos, type ComboIcon, type ResolvedCombo } from "@/data/combos";
import { SectionHeading } from "./RecommendationSection";

const ICONS: Record<ComboIcon, LucideIcon> = {
  noodles: Soup,
  flame: Flame,
  coffee: Coffee,
  sandwich: UtensilsCrossed,
  shake: IceCreamCone,
};

function ComboCard({ combo }: { combo: ResolvedCombo }) {
  const [open, setOpen] = useState(false);
  const Icon = ICONS[combo.icon];

  return (
    <article className="card-enter flex flex-col rounded-2xl border border-border-soft bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-espresso-950 text-champagne-300">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="rounded-full border border-amber-500/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-700">
          Combo
        </span>
      </div>

      <h3 className="mt-4 font-serif text-xl font-semibold text-espresso-950">{combo.name}</h3>
      <p className="mt-0.5 text-sm italic text-mocha-500">{combo.description}</p>

      <ul className="mt-4 flex flex-col gap-1.5 text-sm">
        {combo.lines.map((line) => (
          <li key={line.item.id} className="flex items-baseline gap-2">
            <span className="min-w-0 flex-1 truncate text-mocha-700/90">{line.label}</span>
            <span className="shrink-0 font-semibold text-mocha-500">
              {formatPrice(line.price)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-baseline justify-between border-t border-border-soft pt-3">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-mocha-500">
          Total
        </span>
        <span className="font-serif text-2xl font-semibold text-amber-700">
          {formatPrice(combo.total)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-amber-500 text-sm font-bold text-espresso-950 transition-colors hover:bg-amber-400"
      >
        {open ? "Hide items" : "View items"}
        <ChevronDown
          className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 flex flex-col gap-2 rounded-xl bg-ivory-100 p-3 text-sm">
              {combo.lines.map((line) => (
                <li key={line.item.id} className="flex items-baseline justify-between gap-3">
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-espresso-950">{line.label}</span>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-sage-500">
                      {line.categoryName}
                    </span>
                  </span>
                  <span className="shrink-0 font-bold text-amber-700">
                    {formatPrice(line.price)}
                  </span>
                </li>
              ))}
            </div>
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

export default function ComboSection() {
  const { eyebrow, title, subtitle, note, id } = brand.sections.combos;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-5xl scroll-mt-48 px-4 sm:px-6">
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resolvedCombos.map((combo) => (
          <ComboCard key={combo.id} combo={combo} />
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-mocha-500/80">{note}</p>
    </section>
  );
}
