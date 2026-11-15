"use client";

import { brand } from "@/data/brand";
import { moods, type MoodId } from "@/data/moods";

interface Props {
  activeMood: MoodId | null;
  onSelect: (mood: MoodId | null) => void;
}

/**
 * "What are you in the mood for?" — horizontal discovery strip.
 * Options come from data/moods.ts; tapping the active option clears it.
 */
export default function MoodDiscovery({ activeMood, onSelect }: Props) {
  const { eyebrow, title, subtitle } = brand.moods;

  return (
    <section aria-labelledby="moods-title" className="mx-auto max-w-5xl px-4 sm:px-6">
      <div className="mb-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-600">
          {eyebrow}
        </p>
        <h2 id="moods-title" className="mt-2 font-serif text-3xl font-semibold text-espresso-950 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-2 font-serif text-base italic text-mocha-500">{subtitle}</p>
        <div aria-hidden="true" className="mx-auto mt-5 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-champagne-400/80" />
          <span className="size-1.5 rotate-45 bg-amber-500" />
          <span className="h-px w-10 bg-champagne-400/80" />
        </div>
      </div>

      <ul className="no-scrollbar flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
        {moods.map((mood) => {
          const active = activeMood === mood.id;
          return (
            <li key={mood.id} className="shrink-0">
              <button
                type="button"
                onClick={() => onSelect(active ? null : mood.id)}
                aria-pressed={active}
                className={`h-11 whitespace-nowrap rounded-full px-5 text-sm font-bold transition-all duration-200 ${
                  active
                    ? "bg-espresso-950 text-ivory-50 shadow-[0_8px_20px_-8px_rgba(43,29,22,0.6)]"
                    : "border border-border-soft bg-card text-mocha-600 hover:border-espresso-700/40 hover:text-espresso-950"
                }`}
              >
                {mood.label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
