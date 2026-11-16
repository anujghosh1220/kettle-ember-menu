"use client";

import { ArrowRight } from "lucide-react";
import { brand } from "@/data/brand";
import { formatPrice, menuItems } from "@/data/menu";

interface Props {
  /** Called before scrolling — lets the app clear active filters so the
      target card is guaranteed to exist in the DOM. */
  onBeforeNavigate?: () => void;
}

/**
 * "Your next favourite?" — a compact editorial feature. The dish, its
 * description and price all resolve from the central menu data via
 * brand.featured.itemId; nothing is hardcoded or duplicated.
 */
export default function FeaturedDiscovery({ onBeforeNavigate }: Props) {
  const { eyebrow, title, itemId } = brand.featured;
  const item = menuItems.find((i) => i.id === itemId);
  if (!item) return null;

  const variant = item.variants[0];
  const priceLabel =
    item.variants.length === 1
      ? formatPrice(variant.price)
      : item.variants.map((v) => formatPrice(v.price)).join("  ·  ");
  const description = item.variants
    .map((v) => v.description)
    .filter(Boolean)
    .join(" ");

  const targetId = `item-${item.id}`;

  function handleNavigate() {
    onBeforeNavigate?.();
    // Allow React to re-render (filters cleared) before scrolling.
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 60);
  }

  return (
    <section aria-labelledby="featured-title" className="mx-auto max-w-2xl px-4 sm:px-6">
      <article className="card-enter rounded-2xl border border-border-soft bg-card px-6 py-6 shadow-card sm:px-8 sm:py-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-amber-600">
          {eyebrow}
        </p>
        <h2
          id="featured-title"
          className="mt-1.5 font-serif text-2xl font-semibold leading-tight text-espresso-950 sm:text-3xl"
        >
          {title}
        </h2>

        {/* Featured dish — the whole block is the click target */}
        <button
          type="button"
          onClick={handleNavigate}
          className="pressable group mt-5 block w-full rounded-xl text-left transition-colors hover:bg-ivory-100/50"
        >
          <span className="flex items-start justify-between gap-4 border-t border-border-soft pt-5">
            <span className="min-w-0">
              <span className="block font-serif text-2xl font-semibold text-espresso-950">
                {item.name}
              </span>
              <span className="mt-1 block text-[13px] leading-relaxed text-mocha-600">
                {description}
              </span>
              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.24em] text-sage-500">
                {brand.featured.supporting}
              </span>
            </span>
            <span className="shrink-0 pt-0.5 font-sans text-lg font-extrabold text-amber-700">
              {priceLabel}
            </span>
          </span>

          <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700 transition-colors group-hover:text-amber-600">
            Explore in menu
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </button>
      </article>
    </section>
  );
}
