import type { MoodId } from "./moods";

/**
 * KETTLE & EMBER CAFÉ — menu data.
 *
 * Single source of truth. Prices are INR. Descriptions live on each
 * variation so every option is explained. Recommendations (data/
 * recommendations.ts) and combos (data/combos.ts) reference these ids —
 * never duplicate prices or descriptions elsewhere.
 *
 * Dietary classification (`diet`) uses three explicit values:
 *   "vegetarian" | "non-vegetarian" | "unverified" (or omitted = unverified).
 * Only set it when the classification is confirmed — never guess.
 * Variant labels ("Veg", "Chicken", "Egg", "Mixed") resolve first;
 * `diet` on the item is the fallback for single-variant or unlabeled items.
 *
 * `moods` holds discovery tags (data/moods.ts) used by the mood filter.
 */

export type Diet = "vegetarian" | "non-vegetarian" | "unverified";

export interface MenuVariant {
  label: string;
  price: number;
  description?: string;
}

export interface MenuItem {
  id: string;
  categoryId: string;
  name: string;
  variants: MenuVariant[];
  serving?: string;
  badge?: string;
  keywords?: string[];
  /** Verified dietary classification — omit when unconfirmed. */
  diet?: Diet;
  /** Mood discovery tags (see data/moods.ts). */
  moods?: MoodId[];
}

type MenuItemDraft = Omit<MenuItem, "categoryId">;

const mainsItems: MenuItemDraft[] = [
  {
    id: "fried-rice",
    name: "Fried Rice",
    keywords: ["rice", "veg fried rice"],
    variants: [
      { label: "Veg", price: 90, description: "A comforting rice preparation with a vegetable-based flavour, perfect for a satisfying meal." },
      { label: "Chicken", price: 120, description: "A hearty rice dish paired with chicken, bringing together familiar Indo-Chinese flavours." },
    ],
  },
  {
    id: "chowmin",
    name: "Chowmin",
    keywords: ["noodles", "hakka"],
    variants: [
      { label: "Veg", price: 140, description: "A satisfying noodle dish with a vegetable-based preparation, ideal for a quick and flavourful meal." },
      { label: "Egg", price: 150, description: "Classic noodles paired with egg for a more filling and satisfying option." },
      { label: "Chicken", price: 160, description: "A popular noodle favourite prepared with chicken for a hearty meal." },
    ],
  },
  {
    id: "hot-garlic-chowmin",
    name: "Hot Garlic Chowmin",
    keywords: ["noodles", "garlic", "spicy"],
    variants: [
      { label: "Veg", price: 150, description: "Noodles with a bold garlic-inspired flavour and a vegetable-based preparation." },
      { label: "Egg", price: 160, description: "A flavourful garlic-style noodle preparation with egg." },
      { label: "Chicken", price: 170, description: "A hearty noodle dish with chicken and a bold garlic-inspired flavour." },
      { label: "Mixed", price: 210, description: "A mixed variation of hot garlic noodles for those looking for a more substantial meal." },
    ],
  },
  {
    id: "egg-roll",
    name: "Egg Roll",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["roll", "wrap"],
    variants: [{ label: "", price: 80, description: "A convenient roll featuring egg, perfect for a quick and satisfying bite." }],
  },
  {
    id: "paneer-roll",
    name: "Paneer Roll",
    serving: "Standard",
    diet: "vegetarian",
    keywords: ["roll", "wrap", "paneer"],
    variants: [{ label: "", price: 160, description: "A flavourful roll featuring paneer, ideal for a filling snack." }],
  },
  {
    id: "chicken-roll",
    name: "Chicken Roll",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["roll", "wrap"],
    variants: [{ label: "", price: 140, description: "A satisfying handheld roll featuring chicken, perfect when you want something quick." }],
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken (Boneless)",
    serving: "6 PC",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter", "spicy"],
    variants: [{ label: "", price: 210, description: "Boneless chicken pieces prepared in the popular Indo-Chinese chilli chicken style." }],
  },
  {
    id: "drums-of-heaven",
    name: "Drums of Heaven",
    serving: "6 PC",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter"],
    variants: [{ label: "", price: 280, description: "A popular chicken starter featuring drumette-style pieces, made for sharing or enjoying as a snack." }],
  },
  {
    id: "chicken-lollipop-dry",
    name: "Chicken Lollipop Dry",
    serving: "6 PC",
    diet: "non-vegetarian",
    keywords: ["chicken", "lollipop", "starter"],
    variants: [{ label: "", price: 220, description: "Chicken lollipops served in a dry preparation, a familiar favourite for Indo-Chinese starter lovers." }],
  },
  {
    id: "dragon-chicken",
    name: "Dragon Chicken",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter", "spicy"],
    variants: [{ label: "", price: 250, description: "A bold Indo-Chinese chicken dish with a distinctive name and an appetising, flavour-focused appeal." }],
  },
  {
    id: "chicken-fried-rice-schezwan",
    name: "Chicken Fried Rice with Schezwan Sauce",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["rice", "chicken", "schezwan", "spicy"],
    variants: [{ label: "", price: 150, description: "A chicken fried rice preparation paired with Schezwan-style flavour for a more distinctive rice option." }],
  },
  {
    id: "chicken-65",
    name: "Chicken 65",
    serving: "8 PC",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter", "spicy"],
    variants: [{ label: "", price: 180, description: "A popular chicken starter served in eight pieces, perfect for enjoying as a snack or alongside a meal." }],
  },
  {
    id: "paneer-65",
    name: "Paneer 65",
    serving: "8 PC",
    diet: "vegetarian",
    keywords: ["paneer", "starter", "spicy"],
    variants: [{ label: "", price: 200, description: "A paneer-based starter served in eight pieces, offering a vegetarian alternative to a classic starter favourite." }],
  },
  {
    id: "chicken-dry-fry",
    name: "Chicken Dry Fry (Boneless)",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter"],
    variants: [{ label: "", price: 180, description: "Boneless chicken served in a dry preparation, suitable for anyone looking for a chicken starter." }],
  },
  {
    id: "chicken-chips",
    name: "Chicken Chips",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter"],
    variants: [{ label: "", price: 190, description: "A chicken-based snack option with a name that promises something different from the usual starters." }],
  },
];

const sandwichItems: MenuItemDraft[] = [
  {
    id: "sandwich",
    name: "Sandwich",
    keywords: ["toast", "grill"],
    variants: [
      { label: "Veg", price: 80, description: "A simple vegetable sandwich, perfect for a light and convenient café bite." },
      { label: "Chicken", price: 120, description: "A chicken sandwich that makes for a satisfying snack or quick meal." },
    ],
  },
  {
    id: "butter-toast-boiled-egg",
    name: "Butter Toast with Boiled Egg",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["toast", "breakfast", "egg"],
    variants: [{ label: "Boiled Egg", price: 50, description: "Buttered toast served with boiled egg, a familiar and simple breakfast-style choice." }],
  },
  {
    id: "butter-toast-poached-egg",
    name: "Butter Toast with Poached Egg",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["toast", "breakfast", "egg", "poached"],
    variants: [{ label: "Poached Egg", price: 40, description: "Buttered toast served with a perfectly poached egg." }],
  },
  {
    id: "butter-toast-omelette",
    name: "Butter Toast with Masala Omlet",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["toast", "breakfast", "omelette", "egg"],
    variants: [{ label: "Masala Omlet", price: 80, description: "Buttered toast paired with masala omelette for a more filling and flavourful bite." }],
  },
];

const momoItems: MenuItemDraft[] = [
  {
    id: "fried-momo",
    name: "Fry Momo",
    keywords: ["momo", "dumpling", "fried"],
    variants: [
      { label: "Veg", price: 100, description: "Vegetable-filled momos served in a fried preparation, perfect for a satisfying snack." },
      { label: "Chicken", price: 130, description: "Chicken-filled momos served in a fried preparation for a flavourful snack." },
    ],
  },
  {
    id: "steam-veg-momo",
    name: "Steam Veg Momo",
    serving: "7 PC",
    diet: "vegetarian",
    keywords: ["momo", "dumpling", "steamed", "veg"],
    variants: [{ label: "", price: 80, description: "Seven steamed vegetable momos, a comforting choice for momo lovers." }],
  },
  {
    id: "steam-chicken-momo",
    name: "Steam Chicken Momo",
    serving: "7 PC",
    diet: "non-vegetarian",
    keywords: ["momo", "dumpling", "steamed", "chicken"],
    variants: [{ label: "", price: 110, description: "Seven steamed chicken momos, perfect for enjoying a classic momo favourite." }],
  },
  {
    id: "jhol-momo",
    name: "Jhol Momo",
    keywords: ["momo", "dumpling", "soup", "spicy"],
    variants: [
      { label: "Veg", price: 90, description: "Vegetable momos served with a soupy accompaniment, inspired by the popular jhol momo style." },
      { label: "Chicken", price: 130, description: "Chicken momos served with a soupy accompaniment for a comforting momo experience." },
    ],
  },
  {
    id: "soup",
    name: "Soup",
    keywords: ["soup", "warm"],
    variants: [
      { label: "Veg", price: 100, description: "A warm vegetable soup, ideal for a light and comforting start." },
      { label: "Chicken", price: 120, description: "A chicken-based soup for a warm and satisfying bowl." },
    ],
  },
  {
    id: "corn-pepper-salt",
    name: "Corn with Pepper & Salt",
    serving: "Standard",
    diet: "vegetarian",
    keywords: ["corn", "snack"],
    variants: [{ label: "", price: 120, description: "Corn seasoned with pepper and salt, a simple snack with a familiar flavour." }],
  },
];

const biteItems: MenuItemDraft[] = [
  {
    id: "french-fries",
    name: "French Fries",
    diet: "vegetarian",
    keywords: ["fries", "snack"],
    variants: [
      { label: "Salted", price: 100, description: "Classic salted fries, a familiar snack that goes well with almost anything." },
      { label: "Peri Peri", price: 120, description: "French fries with a peri peri-style flavour for those who enjoy a little extra seasoning." },
    ],
  },
  {
    id: "pakora",
    name: "Pakora (Boneless)",
    serving: "8 PC",
    keywords: ["pakora", "fritters", "snack"],
    variants: [
      { label: "Veg", price: 110, description: "Eight pieces of vegetable pakora, a familiar tea-time snack." },
      { label: "Egg", price: 150, description: "Eight pieces of egg-based pakora for a more filling snack." },
      { label: "Chicken", price: 180, description: "Eight pieces of chicken pakora, a satisfying choice for chicken snack lovers." },
    ],
  },
  {
    id: "wai-wai",
    name: "Wai Wai",
    keywords: ["noodles", "instant"],
    variants: [
      { label: "Veg", price: 50, description: "A quick noodle-based snack in a vegetable variation." },
      { label: "Egg", price: 60, description: "A noodle-based snack paired with egg for a more filling option." },
      { label: "Chicken", price: 70, description: "A quick noodle snack with a chicken variation." },
    ],
  },
  {
    id: "maggi",
    name: "Maggi",
    keywords: ["noodles", "instant"],
    variants: [
      { label: "Veg", price: 50, description: "A familiar instant noodle favourite in a vegetable variation." },
      { label: "Egg", price: 60, description: "Classic Maggi paired with egg for an extra filling snack." },
      { label: "Chicken", price: 70, description: "A chicken variation of a familiar noodle favourite." },
    ],
  },
  {
    id: "honey-chilly-potato",
    name: "Honey Chilly Potato",
    serving: "Standard",
    diet: "vegetarian",
    keywords: ["potato", "snack", "indo-chinese"],
    variants: [{ label: "", price: 170, description: "A popular Indo-Chinese potato dish combining honey and chilli-inspired flavours." }],
  },
];

const drinkItems: MenuItemDraft[] = [
  { id: "water", name: "Water", keywords: ["water", "mineral"], variants: [{ label: "500 ML", price: 10, description: "A 500 ml bottle of drinking water." }] },
  { id: "black-coffee", name: "Black Coffee", keywords: ["coffee", "espresso"], variants: [{ label: "", price: 40, description: "A straightforward black coffee for those who enjoy their coffee without milk." }] },
  { id: "milk-coffee", name: "Milk Coffee", keywords: ["coffee", "latte"], variants: [{ label: "", price: 50, description: "A familiar cup of coffee prepared with milk." }] },
  { id: "cold-coffee", name: "Cold Coffee", keywords: ["coffee", "iced"], variants: [{ label: "", price: 90, description: "A chilled coffee drink, perfect for a refreshing café break." }] },
  { id: "milk-tea", name: "Milk Tea", keywords: ["tea", "chai"], variants: [{ label: "", price: 40, description: "A familiar cup of tea prepared with milk." }] },
  { id: "lemon-tea", name: "Lemon Tea", keywords: ["tea", "lemon"], variants: [{ label: "", price: 30, description: "A light tea option with a refreshing lemon flavour." }] },
  { id: "ginger-tea", name: "Ginger Tea", keywords: ["tea", "ginger"], variants: [{ label: "", price: 35, description: "A comforting tea with the distinctive flavour of ginger." }] },
  { id: "black-tea", name: "Black Tea", keywords: ["tea"], variants: [{ label: "", price: 25, description: "A simple tea preparation without milk." }] },
  {
    id: "coke",
    name: "Coke",
    keywords: ["cola", "coca"],
    variants: [
      { label: "Regular", price: 60, description: "A classic chilled cola drink." },
      { label: "Masala Coke", price: 80, description: "A cola-based drink with a masala-inspired twist." },
    ],
  },
  { id: "oreo-shake", name: "Oreo Shake", keywords: ["shake", "dessert", "oreo"], variants: [{ label: "", price: 120, description: "A creamy-style shake featuring the familiar Oreo flavour." }] },
  { id: "fresh-lime-soda", name: "Fresh Lime Soda", keywords: ["lime", "soda", "fresh"], variants: [{ label: "", price: 40, description: "A refreshing lime-based soda, ideal when you want something light and fizzy." }] },
  { id: "virgin-mojito", name: "Virgin Mojito", keywords: ["mocktail", "mint", "fresh"], variants: [{ label: "", price: 90, description: "A refreshing non-alcoholic mojito-style drink with a citrus-inspired character." }] },
  { id: "blue-lagoon", name: "Blue Lagoon", keywords: ["mocktail", "blue", "fresh"], variants: [{ label: "", price: 90, description: "A vibrant blue refreshment that adds a colourful touch to your café experience." }] },
  { id: "chocolate-shake", name: "Chocolate Shake", keywords: ["shake", "dessert", "chocolate"], variants: [{ label: "", price: 120, description: "A chocolate-flavoured shake for anyone craving a sweet and refreshing drink." }] },
];

// ─────────────────────── MOOD DISCOVERY TAGS ───────────────────────
// Central classification for "What are you in the mood for?" — browsing
// aids only, assigned conservatively from what each dish actually is.

const itemMoods: Record<string, MoodId[]> = {
  // Main Dishes — substantial meals
  "fried-rice": ["filling"],
  chowmin: ["filling"],
  "hot-garlic-chowmin": ["filling"],
  "egg-roll": ["filling", "quick-snack"],
  "paneer-roll": ["filling", "quick-snack"],
  "chicken-roll": ["filling", "quick-snack"],
  "chilli-chicken": ["filling"],
  "drums-of-heaven": ["filling"],
  "chicken-lollipop-dry": ["filling"],
  "dragon-chicken": ["filling"],
  "chicken-fried-rice-schezwan": ["filling"],
  "chicken-65": ["filling"],
  "paneer-65": ["filling"],
  "chicken-dry-fry": ["filling"],
  "chicken-chips": ["filling"],
  // Sandwiches & Toast
  sandwich: ["filling", "quick-snack"],
  "butter-toast-boiled-egg": ["quick-snack", "tea-time"],
  "butter-toast-poached-egg": ["quick-snack", "tea-time"],
  "butter-toast-omelette": ["quick-snack", "tea-time"],
  // Momos & Soup
  "fried-momo": ["quick-snack"],
  "steam-veg-momo": ["quick-snack"],
  "steam-chicken-momo": ["quick-snack"],
  "jhol-momo": ["quick-snack", "filling"],
  soup: ["quick-snack"],
  "corn-pepper-salt": ["quick-snack", "tea-time"],
  // Quick Bites
  "french-fries": ["quick-snack", "tea-time"],
  pakora: ["quick-snack", "tea-time"],
  "wai-wai": ["quick-snack"],
  maggi: ["quick-snack"],
  "honey-chilly-potato": ["quick-snack"],
  // Drinks & Refreshments
  water: ["refreshing"],
  "black-coffee": ["refreshing"],
  "milk-coffee": ["refreshing"],
  "cold-coffee": ["refreshing"],
  "milk-tea": ["refreshing", "tea-time"],
  "lemon-tea": ["refreshing", "tea-time"],
  "ginger-tea": ["refreshing", "tea-time"],
  "black-tea": ["refreshing", "tea-time"],
  coke: ["refreshing"],
  "fresh-lime-soda": ["refreshing"],
  "virgin-mojito": ["refreshing"],
  "blue-lagoon": ["refreshing"],
  "oreo-shake": ["sweet"],
  "chocolate-shake": ["sweet"],
};

export const menuItems: MenuItem[] = [
  ...mainsItems.map((item) => ({ ...item, categoryId: "mains" })),
  ...sandwichItems.map((item) => ({ ...item, categoryId: "sandwiches" })),
  ...momoItems.map((item) => ({ ...item, categoryId: "momos" })),
  ...biteItems.map((item) => ({ ...item, categoryId: "bites" })),
  ...drinkItems.map((item) => ({ ...item, categoryId: "drinks" })),
].map((item) => ({ ...item, moods: itemMoods[item.id] ?? [] }));

export const visibleItems = menuItems;

// ─────────────────────── DIETARY RESOLUTION ───────────────────────

const NON_VEG_LABELS = new Set([
  "chicken",
  "egg",
  "mixed",
  "masala omlet",
  "boiled egg",
  "poached egg",
]);

/**
 * Resolve a variant's dietary classification conservatively:
 * explicit "Veg" labels are vegetarian; known egg/chicken labels are
 * non-vegetarian; anything else falls back to the item-level `diet`
 * (omitted = "unverified").
 */
export function variantDiet(item: MenuItem, variant: MenuVariant): Diet {
  const label = variant.label.trim().toLowerCase();
  if (label === "veg") return "vegetarian";
  if (NON_VEG_LABELS.has(label)) return "non-vegetarian";
  return item.diet ?? "unverified";
}

/** True when at least one variation is verified vegetarian. */
export function itemHasVegetarianOption(item: MenuItem): boolean {
  return item.variants.some((v) => variantDiet(item, v) === "vegetarian");
}

export function formatPrice(price: number): string {
  return `₹${price}`;
}
