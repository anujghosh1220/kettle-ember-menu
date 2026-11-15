"use client";

import { ArrowRight } from "lucide-react";
import { formatPrice, menuItems } from "@/data/menu";

export interface MenuNudgeConfig {
  id: string;
  afterCategoryId: string;
  eyebrow: string;
  text: string;
  itemId: string;
}

interface Props {
  nudge: MenuNudgeConfig;
  /** Called before scrolling — clears active filters so the target
      card is guaranteed to exist in the DOM. */
  onBeforeNavigate?: () => void;
}

/**
 * "Still exploring?" — a small, optional editorial nudge suggesting one
 * existing menu item. Name and price resolve from central menu data;
 * configurable per café via brand.nudges.
 */
export default function MenuNudge({ nudge, onBeforeNavigate }: Props) {
  const item = menuItems.find((i) => i.id === nudge.itemId);
  if (!item) return null;

  const priceLabel =
    item.variants.length === 1
      ? formatPrice(item.variants[0].price)
      : item.variants.map((v) => formatPrice(v.price)).join("  ·  ");

  const targetId = `item-${item.id}`;

  function handleNavigate() {
    onBeforeNavigate?.();
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 60);
  }

  return (
    <aside className="rounded-2xl border border-border-soft bg-card px-5 py-4 text-center shadow-card">
      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-600">
        {nudge.eyebrow}
      </p>
      <p className="mt-1.5 font-serif text-[15px] italic text-mocha-600">{nudge.text}</p>
      <button
        type="button"
        onClick={handleNavigate}
        className="pressable mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-espresso-950/20 px-4 text-sm font-bold text-espresso-950 transition-colors hover:border-amber-600 hover:text-amber-700"
      >
        {item.name}
        <span className="font-extrabold text-amber-700">{priceLabel}</span>
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </button>
    </aside>
  );
}
