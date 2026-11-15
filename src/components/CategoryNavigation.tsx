"use client";

import { useEffect, useRef } from "react";
import { brand } from "@/data/brand";
import type { Category } from "@/data/categories";

export interface NavPill {
  id: string;
  label: string;
  href: string;
}

interface Props {
  categories: Category[];
  activeId: string;
  onSelect: (pill: NavPill) => void;
}

function buildNavPills(categories: Category[]): NavPill[] {
  return [
    { id: "recommends", label: "Recommendations", href: `#${brand.sections.recommends.id}` },
    { id: "combos", label: "Combos", href: `#${brand.sections.combos.id}` },
    ...categories.map((cat) => ({
      id: cat.id,
      label: cat.short,
      href: `#cat-${cat.id}`,
    })),
  ];
}

export default function CategoryNavigation({ categories, activeId, onSelect }: Props) {
  const pills = buildNavPills(categories);
  const navRef = useRef<HTMLElement>(null);

  // Keep the active pill visible inside the horizontal scroller.
  useEffect(() => {
    const active = navRef.current?.querySelector<HTMLElement>('[aria-current="true"]');
    active?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [activeId]);

  return (
    <nav ref={navRef} aria-label="Menu categories" className="relative">
      <ul className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3 sm:justify-center sm:px-6">
        {pills.map((pill) => (
          <li key={pill.id} className="shrink-0">
            <button
              type="button"
              onClick={() => onSelect(pill)}
              aria-current={activeId === pill.id ? "true" : undefined}
              className={`pressable h-10 whitespace-nowrap rounded-full px-4 text-[13px] font-bold transition-all duration-200 sm:px-5 ${
                activeId === pill.id
                  ? "bg-amber-500 text-espresso-950 shadow-[0_6px_18px_-6px_rgba(203,121,44,0.9)]"
                  : "border border-ivory-50/20 bg-espresso-900/70 text-ivory-50/70 hover:border-ivory-50/40 hover:text-ivory-50"
              }`}
            >
              {pill.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
