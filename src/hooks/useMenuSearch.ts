import { useMemo } from "react";
import type { Category } from "@/data/categories";
import type { MenuItem } from "@/data/menu";

/**
 * Instant local menu search. Matches product name, category name,
 * serving, keywords, variant labels and variant descriptions.
 * Returns the filtered item list — no network calls, ever.
 */
export function useMenuSearch(
  items: MenuItem[],
  categories: Category[],
  query: string,
): MenuItem[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;

    const categoryNameById = new Map(categories.map((c) => [c.id, c.name]));

    return items.filter((item) => {
      const haystack = [
        item.name,
        categoryNameById.get(item.categoryId) ?? "",
        item.serving ?? "",
        ...(item.keywords ?? []),
        ...item.variants.flatMap((v) => [v.label, v.description ?? ""]),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [items, categories, query]);
}
