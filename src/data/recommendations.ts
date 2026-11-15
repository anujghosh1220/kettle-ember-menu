/**
 * KETTLE & EMBER CAFÉ — "From Our Kitchen" recommendations.
 *
 * Curated picks reference central menu ids (and optionally a variant
 * label). Names, prices and descriptions always resolve from menu.ts —
 * never duplicate them here. Edit this list to change the selection.
 */

export interface RecommendEntry {
  itemId: string;
  variantLabel?: string;
}

export const recommends: RecommendEntry[] = [
  { itemId: "dragon-chicken" },
  { itemId: "jhol-momo", variantLabel: "Veg" },
  { itemId: "jhol-momo", variantLabel: "Chicken" },
  { itemId: "french-fries", variantLabel: "Peri Peri" },
  { itemId: "cold-coffee" },
  { itemId: "chicken-fried-rice-schezwan" },
  { itemId: "oreo-shake" },
];
