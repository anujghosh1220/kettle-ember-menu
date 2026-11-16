/**
 * KETTLE & EMBER CAFÉ — Suggested Combos ("Made to Go Together").
 *
 * Suggested pairings, NOT promotional offers — no discounts. Totals are
 * computed at render time from data/menu.ts, so a price change anywhere
 * updates every combo automatically. Never hardcode prices here.
 */

import { categories } from "./categories";
import { menuItems, type MenuItem } from "./menu";

export type ComboIcon = "noodles" | "flame" | "coffee" | "sandwich" | "shake";

export interface ComboComponent {
  itemId: string;
  variantLabel?: string;
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  icon: ComboIcon;
  components: ComboComponent[];
}

export const combos: Combo[] = [
  {
    id: "noodle-break",
    name: "The Noodle Break",
    description: "Chicken chowmin and fresh lime soda — a simple pairing for a little break.",
    icon: "noodles",
    components: [
      { itemId: "chowmin", variantLabel: "Chicken" },
      { itemId: "fresh-lime-soda" },
    ],
  },
  {
    id: "indo-chinese-feast",
    name: "The Indo-Chinese Feast",
    description: "Schezwan chicken fried rice paired with chilli chicken — an Indo-Chinese combination for a satisfying meal.",
    icon: "flame",
    components: [
      { itemId: "chicken-fried-rice-schezwan" },
      { itemId: "chilli-chicken" },
    ],
  },
  {
    id: "cafe-comfort",
    name: "The Café Comfort",
    description: "Steamed chicken momos and cold coffee — a comforting café pairing.",
    icon: "coffee",
    components: [
      { itemId: "steam-chicken-momo" },
      { itemId: "cold-coffee" },
    ],
  },
  {
    id: "quick-bite",
    name: "The Quick Bite",
    description: "Chicken sandwich and salted fries — a familiar combination for a quick café break.",
    icon: "sandwich",
    components: [
      { itemId: "sandwich", variantLabel: "Chicken" },
      { itemId: "french-fries", variantLabel: "Salted" },
    ],
  },
  {
    id: "evening-treat",
    name: "The Evening Treat",
    description: "Paneer roll and Oreo shake — a savoury bite followed by something sweet.",
    icon: "shake",
    components: [
      { itemId: "paneer-roll" },
      { itemId: "oreo-shake" },
    ],
  },
];

export interface ComboLine {
  item: MenuItem;
  label: string;
  variantLabel?: string;
  price: number;
  categoryName: string;
}

export interface ResolvedCombo extends Combo {
  lines: ComboLine[];
  total: number;
}

const itemById = new Map(menuItems.map((item) => [item.id, item]));
const categoryNameById = new Map(categories.map((c) => [c.id, c.name]));

export function resolveCombo(combo: Combo): ResolvedCombo {
  const lines: ComboLine[] = combo.components.map(({ itemId, variantLabel }) => {
    const item = itemById.get(itemId);
    if (!item) throw new Error(`Combo "${combo.id}" references unknown item "${itemId}"`);
    const variant = variantLabel
      ? item.variants.find((v) => v.label === variantLabel)
      : item.variants[0];
    if (!variant) {
      throw new Error(`Combo "${combo.id}" references unknown variant "${variantLabel}" on "${itemId}"`);
    }
    return {
      item,
      label: variantLabel ? `${variantLabel} ${item.name}` : item.name,
      variantLabel,
      price: variant.price,
      categoryName: categoryNameById.get(item.categoryId) ?? item.categoryId,
    };
  });

  return { ...combo, lines, total: lines.reduce((sum, line) => sum + line.price, 0) };
}

export const resolvedCombos: ResolvedCombo[] = combos.map(resolveCombo);
