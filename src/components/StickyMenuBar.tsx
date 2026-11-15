"use client";

import { useEffect, useState } from "react";
import type { Category } from "@/data/categories";
import CategoryNavigation, { type NavPill } from "./CategoryNavigation";
import MenuSearch from "./MenuSearch";

interface Props {
  categories: Category[];
  query: string;
  onQueryChange: (value: string) => void;
}

/**
 * Sticky command bar: live search and category navigation.
 * Stays pinned below the header while browsing.
 */
export default function StickyMenuBar({ categories, query, onQueryChange }: Props) {
  const [activeId, setActiveId] = useState("recommends");

  useEffect(() => {
    const ids = ["recommends", "combos", "menu", ...categories.map((c) => `cat-${c.id}`)];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(id.startsWith("cat-") ? id.slice(4) : id);
          }
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [categories]);

  function handleSelect(pill: NavPill) {
    setActiveId(pill.id);
    onQueryChange("");
    document.getElementById(pill.href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="sticky top-14 z-40 border-b border-espresso-950/10 bg-espresso-950/95 backdrop-blur-md sm:top-16">
      <div className="mx-auto max-w-5xl px-4 pt-3 sm:px-6">
        <MenuSearch value={query} onChange={onQueryChange} />
      </div>
      <CategoryNavigation categories={categories} activeId={activeId} onSelect={handleSelect} />
    </div>
  );
}
