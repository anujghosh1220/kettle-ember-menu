"use client";

import { useMemo } from "react";
import { SearchX } from "lucide-react";
import { brand } from "@/data/brand";
import type { Category } from "@/data/categories";
import type { MenuItem } from "@/data/menu";
import type { MoodId } from "@/data/moods";
import { moods } from "@/data/moods";
import { useMenuSearch } from "@/hooks/useMenuSearch";
import MenuCategory from "./MenuCategory";
import MenuNudge from "./MenuNudge";

interface Props {
  categories: Category[];
  items: MenuItem[];
  query: string;
  mood: MoodId | null;
  onResetFilters: () => void;
}

/**
 * The complete menu. The displayed list is derived from ALL active
 * filters combined — search text, mood tag and dietary filter — so no
 * filter ever overwrites another.
 */
export default function MenuSections({
  categories,
  items,
  query,
  mood,
  onResetFilters,
}: Props) {
  const searched = useMenuSearch(items, categories, query);

  const filtered = useMemo(
    () => searched.filter((item) => !mood || (item.moods ?? []).includes(mood)),
    [searched, mood],
  );

  const sections = useMemo(() => {
    const filteredIds = new Set(filtered.map((i) => i.id));
    return categories
      .map((category) => ({
        category,
        items: items.filter((item) => item.categoryId === category.id && filteredIds.has(item.id)),
      }))
      .filter((s) => s.items.length > 0);
  }, [categories, items, filtered]);

  const hasActiveFilters = query.trim().length > 0 || mood !== null;
  const moodLabel = moods.find((m) => m.id === mood)?.label;

  return (
    <div id={brand.sections.menu.id} className="scroll-mt-48">
      <main className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6">
        <header className="mb-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-600">
            {brand.sections.menu.eyebrow}
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-espresso-950 sm:text-4xl">
            {brand.sections.menu.title}
          </h2>
          <div aria-hidden="true" className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-champagne-400/80" />
            <span className="size-1.5 rotate-45 bg-amber-500" />
            <span className="h-px w-10 bg-champagne-400/80" />
          </div>
        </header>

        {hasActiveFilters ? (
          <div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-border-soft bg-card px-4 py-3 text-xs text-mocha-600">
            <span className="font-bold uppercase tracking-[0.16em] text-mocha-500">Showing</span>
            {moodLabel ? <FilterChip label={moodLabel} /> : null}
            {query.trim() ? <FilterChip label={`“${query.trim()}”`} /> : null}
            <button
              type="button"
              onClick={onResetFilters}
              className="font-bold text-amber-700 underline-offset-2 transition-colors hover:text-amber-600 hover:underline"
            >
              Clear all
            </button>
          </div>
        ) : null}

        {hasActiveFilters && filtered.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border-soft bg-card/60 px-6 py-16 text-center">
            <span className="grid size-14 place-items-center rounded-full bg-ivory-200 text-mocha-500">
              <SearchX className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-serif text-xl font-semibold text-espresso-950">
                Nothing on the menu matches that search.
              </h3>
              <p className="mt-1 text-sm text-mocha-600">
                Try another dish or explore a different category.
              </p>
            </div>
            <button
              type="button"
              onClick={onResetFilters}
              className="pressable h-11 rounded-full bg-amber-500 px-6 text-sm font-bold text-espresso-950 transition-colors hover:bg-amber-400"
            >
              Show the full menu
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-12 sm:gap-16">
            {sections.map(({ category, items: sectionItems }) => (
              <div key={category.id} className="flex flex-col gap-8">
                <MenuCategory category={category} items={sectionItems} />
                {brand.nudges
                  .filter((n) => n.afterCategoryId === category.id)
                  .map((nudge) => (
                    <MenuNudge
                      key={nudge.id}
                      nudge={nudge}
                      onBeforeNavigate={onResetFilters}
                    />
                  ))}
              </div>
            ))}
          </div>
        )}

        <p className="mt-12 text-center text-xs text-mocha-500/70">
          Prices include all taxes. Please inform us of any allergies — we are
          happy to help you choose.
        </p>
      </main>
    </div>
  );
}

function FilterChip({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-ivory-200 px-3 py-1 font-semibold text-mocha-700">
      {label}
    </span>
  );
}
