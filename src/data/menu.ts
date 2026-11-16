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

type MenuItemDraft = Omit<MenuItem, "categoryId"> & { categoryId?: string };

const mainsItems: MenuItemDraft[] = [
  {
    id: "fried-rice",
    name: "Fried Rice",
    keywords: ["rice", "veg fried rice"],
    variants: [
      { label: "Veg", price: 90, description: "A fragrant vegetable fried rice, made for a simple, satisfying plate." },
      { label: "Chicken", price: 120, description: "Fried rice with chicken — a familiar favourite that comes together beautifully." },
    ],
  },
  {
    id: "chowmin",
    name: "Chowmin",
    keywords: ["noodles", "hakka"],
    variants: [
      { label: "Veg", price: 140, description: "Vegetable noodles tossed into a satisfying meal, perfect with a hot cup of tea." },
      { label: "Egg", price: 150, description: "Noodles lifted with egg — a heartier twist on a café classic." },
      { label: "Chicken", price: 160, description: "Chicken chowmin, a hearty favourite for a proper meal." },
    ],
  },
  {
    id: "hot-garlic-chowmin",
    name: "Hot Garlic Chowmin",
    keywords: ["noodles", "garlic", "spicy"],
    variants: [
      { label: "Veg", price: 150, description: "Noodles with a bold garlic character and a vegetable base." },
      { label: "Egg", price: 160, description: "Garlic-forward noodles with egg for extra satisfaction." },
      { label: "Chicken", price: 170, description: "Chicken noodles with a pronounced garlic kick." },
      { label: "Mixed", price: 210, description: "A generous mixed portion of hot garlic noodles — substantial and satisfying." },
    ],
  },
  {
    id: "egg-roll",
    categoryId: "rolls",
    name: "Egg Roll",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["roll", "wrap"],
    variants: [{ label: "", price: 80, description: "A classic egg roll — a convenient, filling bite." }],
  },
  {
    id: "paneer-roll",
    categoryId: "rolls",
    name: "Paneer Roll",
    serving: "Standard",
    diet: "vegetarian",
    keywords: ["roll", "wrap", "paneer"],
    variants: [{ label: "", price: 160, description: "A paneer-filled roll — a satisfying vegetarian option for a quick bite." }],
  },
  {
    id: "chicken-roll",
    categoryId: "rolls",
    name: "Chicken Roll",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["roll", "wrap"],
    variants: [{ label: "", price: 140, description: "A handheld roll stuffed with chicken — quick, easy and satisfying." }],
  },
  {
    id: "chilli-chicken",
    categoryId: "starters",
    name: "Chilli Chicken (Boneless)",
    serving: "6 PC",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter", "spicy"],
    variants: [{ label: "", price: 210, description: "Boneless chicken in the much-loved Indo-Chinese chilli style — bold, flavour-packed and perfect for sharing." }],
  },
  {
    id: "drums-of-heaven",
    categoryId: "starters",
    name: "Drums of Heaven",
    serving: "6 PC",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter"],
    variants: [{ label: "", price: 280, description: "Chicken drumettes with a name as memorable as the flavour — made for sharing." }],
  },
  {
    id: "chicken-lollipop-dry",
    categoryId: "starters",
    name: "Chicken Lollipop Dry",
    serving: "6 PC",
    diet: "non-vegetarian",
    keywords: ["chicken", "lollipop", "starter"],
    variants: [{ label: "", price: 220, description: "Chicken lollipops in a dry preparation — a classic choice for the starter table." }],
  },
  {
    id: "dragon-chicken",
    categoryId: "starters",
    name: "Dragon Chicken",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter", "spicy"],
    variants: [{ label: "", price: 250, description: "A distinctive Indo-Chinese chicken dish, bringing a little character to your café experience." }],
  },
  {
    id: "chicken-fried-rice-schezwan",
    name: "Chicken Fried Rice with Schezwan Sauce",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["rice", "chicken", "schezwan", "spicy"],
    variants: [{ label: "", price: 150, description: "Chicken fried rice with a Schezwan-style flavour — a distinctive choice for your next meal." }],
  },
  {
    id: "chicken-65",
    categoryId: "starters",
    name: "Chicken 65",
    serving: "8 PC",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter", "spicy"],
    variants: [{ label: "", price: 180, description: "Eight pieces of Chicken 65 — a well-known choice for an Indo-Chinese starter." }],
  },
  {
    id: "paneer-65",
    categoryId: "starters",
    name: "Paneer 65",
    serving: "8 PC",
    diet: "vegetarian",
    keywords: ["paneer", "starter", "spicy"],
    variants: [{ label: "", price: 200, description: "Eight pieces of paneer 65 — the vegetarian answer to a beloved starter." }],
  },
  {
    id: "chicken-dry-fry",
    categoryId: "starters",
    name: "Chicken Dry Fry (Boneless)",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter"],
    variants: [{ label: "", price: 180, description: "Boneless chicken in a dry-fry preparation — a straightforward, flavourful starter." }],
  },
  {
    id: "chicken-chips",
    categoryId: "starters",
    name: "Chicken Chips",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["chicken", "starter"],
    variants: [{ label: "", price: 190, description: "Chicken pieces prepared as a snack-sized starter — an easy choice to add to your order." }],
  },
];

const sandwichItems: MenuItemDraft[] = [
  {
    id: "sandwich",
    name: "Sandwich",
    keywords: ["toast", "grill"],
    variants: [
      { label: "Veg", price: 80, description: "A vegetable sandwich — a simple café option for a lighter bite." },
      { label: "Chicken", price: 120, description: "A chicken-filled sandwich — a convenient choice for a quick meal." },
    ],
  },
  {
    id: "butter-toast-boiled-egg",
    categoryId: "toast",
    name: "Butter Toast with Boiled Egg",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["toast", "breakfast", "egg"],
    variants: [{ label: "Boiled Egg", price: 50, description: "Buttered toast served with a boiled egg — a simple breakfast combination." }],
  },
  {
    id: "butter-toast-poached-egg",
    categoryId: "toast",
    name: "Butter Toast with Poached Egg",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["toast", "breakfast", "egg", "poached"],
    variants: [{ label: "Poached Egg", price: 40, description: "Buttered toast served with a poached egg — a simple breakfast choice." }],
  },
  {
    id: "butter-toast-omelette",
    categoryId: "toast",
    name: "Butter Toast with Masala Omlet",
    serving: "Standard",
    diet: "non-vegetarian",
    keywords: ["toast", "breakfast", "omelette", "egg"],
    variants: [{ label: "Masala Omlet", price: 80, description: "Buttered toast served with masala omlet — a satisfying start to the day." }],
  },
];

const momoItems: MenuItemDraft[] = [
  {
    id: "fried-momo",
    name: "Fry Momo",
    keywords: ["momo", "dumpling", "fried"],
    variants: [
      { label: "Veg", price: 100, description: "Vegetable momos with a fried finish — a satisfying snack." },
      { label: "Chicken", price: 130, description: "Chicken momos in a fried preparation — a popular choice for momo lovers." },
    ],
  },
  {
    id: "steam-veg-momo",
    name: "Steam Veg Momo",
    serving: "7 PC",
    diet: "vegetarian",
    keywords: ["momo", "dumpling", "steamed", "veg"],
    variants: [{ label: "", price: 80, description: "Seven steamed vegetable momos — a classic vegetarian momo option." }],
  },
  {
    id: "steam-chicken-momo",
    name: "Steam Chicken Momo",
    serving: "7 PC",
    diet: "non-vegetarian",
    keywords: ["momo", "dumpling", "steamed", "chicken"],
    variants: [{ label: "", price: 110, description: "Seven steamed chicken momos — simple, satisfying and a momo-lover's favourite." }],
  },
  {
    id: "jhol-momo",
    name: "Jhol Momo",
    keywords: ["momo", "dumpling", "soup", "spicy"],
    variants: [
      { label: "Veg", price: 90, description: "Vegetable momos in a light jhol broth — comfort in a bowl." },
      { label: "Chicken", price: 130, description: "Chicken momos served with jhol broth — a comforting choice for momo lovers." },
    ],
  },
  {
    id: "soup",
    name: "Soup",
    keywords: ["soup", "warm"],
    variants: [
      { label: "Veg", price: 100, description: "A light vegetable soup — warm, simple and comforting." },
      { label: "Chicken", price: 120, description: "Chicken soup — a warm option for a comforting meal." },
    ],
  },
  {
    id: "corn-pepper-salt",
    name: "Corn with Pepper & Salt",
    serving: "Standard",
    diet: "vegetarian",
    keywords: ["corn", "snack"],
    variants: [{ label: "", price: 120, description: "Sweet corn tossed with pepper and salt — a simple, moreish snack." }],
  },
];

const biteItems: MenuItemDraft[] = [
  {
    id: "french-fries",
    name: "French Fries",
    diet: "vegetarian",
    keywords: ["fries", "snack"],
    variants: [
      { label: "Salted", price: 100, description: "Classic salted fries — a familiar snack for any time of day." },
      { label: "Peri Peri", price: 120, description: "Fries with peri peri-style seasoning — a flavourful twist on a familiar snack." },
    ],
  },
  {
    id: "pakora",
    name: "Pakora (Boneless)",
    serving: "8 PC",
    keywords: ["pakora", "fritters", "snack"],
    variants: [
      { label: "Veg", price: 110, description: "Eight pieces of vegetable pakora — a classic tea-time choice." },
      { label: "Egg", price: 150, description: "Eight pieces of egg pakora — a satisfying tea-time snack." },
      { label: "Chicken", price: 180, description: "Eight pieces of chicken pakora — a hearty option for sharing." },
    ],
  },
  {
    id: "wai-wai",
    name: "Wai Wai",
    keywords: ["noodles", "instant"],
    variants: [
      { label: "Veg", price: 50, description: "Instant noodles in a quick vegetable preparation — nostalgia in a bowl." },
      { label: "Egg", price: 60, description: "Wai Wai noodles with egg — a quick, satisfying bowl." },
      { label: "Chicken", price: 70, description: "Wai Wai noodles with chicken — a familiar quick-meal combination." },
    ],
  },
  {
    id: "maggi",
    name: "Maggi",
    keywords: ["noodles", "instant"],
    variants: [
      { label: "Veg", price: 50, description: "A familiar instant noodle favourite in a vegetable variation." },
      { label: "Egg", price: 60, description: "Classic Maggi with egg — quick, familiar and satisfying." },
      { label: "Chicken", price: 70, description: "Maggi with chicken — a familiar noodle favourite." },
    ],
  },
  {
    id: "honey-chilly-potato",
    name: "Honey Chilly Potato",
    serving: "Standard",
    diet: "vegetarian",
    keywords: ["potato", "snack", "indo-chinese"],
    variants: [{ label: "", price: 170, description: "Potatoes prepared in a honey-chilli style — a familiar Indo-Chinese snack." }],
  },
];

const drinkItems: MenuItemDraft[] = [
  { id: "water",
    categoryId: "cold-drinks", name: "Water", keywords: ["water", "mineral"], variants: [{ label: "500 ML", price: 10, description: "A 500 ml bottle of pure drinking water — simple and essential." }] },
  { id: "black-coffee",
    categoryId: "hot-drinks", name: "Black Coffee", keywords: ["coffee", "espresso"], variants: [{ label: "", price: 40, description: "A clean black coffee — no milk, just the good stuff." }] },
  { id: "milk-coffee",
    categoryId: "hot-drinks", name: "Milk Coffee", keywords: ["coffee", "latte"], variants: [{ label: "", price: 50, description: "Coffee with milk — a familiar café classic." }] },
  { id: "cold-coffee",
    categoryId: "cold-drinks", name: "Cold Coffee", keywords: ["coffee", "iced"], variants: [{ label: "", price: 90, description: "Cold coffee — a café favourite for a refreshing break." }] },
  { id: "milk-tea",
    categoryId: "hot-drinks", name: "Milk Tea", keywords: ["tea", "chai"], variants: [{ label: "", price: 40, description: "Tea prepared with milk — a comforting everyday favourite." }] },
  { id: "lemon-tea",
    categoryId: "hot-drinks", name: "Lemon Tea", keywords: ["tea", "lemon"], variants: [{ label: "", price: 30, description: "Tea with lemon — a refreshing choice for a lighter cup." }] },
  { id: "ginger-tea",
    categoryId: "hot-drinks", name: "Ginger Tea", keywords: ["tea", "ginger"], variants: [{ label: "", price: 35, description: "Tea with ginger — a familiar choice for tea lovers." }] },
  { id: "black-tea",
    categoryId: "hot-drinks", name: "Black Tea", keywords: ["tea"], variants: [{ label: "", price: 25, description: "Plain black tea — simple, brisk and unhurried." }] },
  {
    id: "coke",
    categoryId: "cold-drinks",
    name: "Coke",
    keywords: ["cola", "coca"],
    variants: [
      { label: "Regular", price: 60, description: "A chilled cola — the classic refresher." },
      { label: "Masala Coke", price: 80, description: "Cola with a masala twist — a different take on a familiar drink." },
    ],
  },
  { id: "oreo-shake",
    categoryId: "cold-drinks", name: "Oreo Shake", keywords: ["shake", "dessert", "oreo"], variants: [{ label: "", price: 120, description: "A café favourite featuring Oreo in a delicious shake." }] },
  { id: "fresh-lime-soda",
    categoryId: "cold-drinks", name: "Fresh Lime Soda", keywords: ["lime", "soda", "fresh"], variants: [{ label: "", price: 40, description: "Fresh lime soda — a refreshing choice for any time of day." }] },
  { id: "virgin-mojito",
    categoryId: "cold-drinks", name: "Virgin Mojito", keywords: ["mocktail", "mint", "fresh"], variants: [{ label: "", price: 90, description: "A mojito-style mocktail — a refreshing non-alcoholic café drink." }] },
  { id: "blue-lagoon",
    categoryId: "cold-drinks", name: "Blue Lagoon", keywords: ["mocktail", "blue", "fresh"], variants: [{ label: "", price: 90, description: "A blue mocktail — a colourful addition to your café experience." }] },
  { id: "chocolate-shake",
    categoryId: "cold-drinks", name: "Chocolate Shake", keywords: ["shake", "dessert", "chocolate"], variants: [{ label: "", price: 120, description: "A chocolate shake — a familiar sweet treat in a glass." }] },
];

// ─────────────────────── MOOD DISCOVERY TAGS ───────────────────────
// Central classification for "What are you in the mood for?" — browsing
// aids only, assigned conservatively from what each dish actually is.


// ── NEW SAMPLE ITEMS (illustrative — see brand.sampleMenu notice) ──

const riceNewItems: MenuItemDraft[] = [
  { id: "egg-fried-rice", name: "Egg Fried Rice", diet: "non-vegetarian", keywords: ["rice","egg","fried rice"], variants: [{ label: "", price: 110, description: "Fried rice with egg — a familiar café favourite." }] },
  { id: "schezwan-veg-fried-rice", name: "Schezwan Veg Fried Rice", diet: "vegetarian", keywords: ["rice","veg","schezwan","spicy"], variants: [{ label: "", price: 130, description: "Vegetable fried rice with a Schezwan-style flavour — a distinctive vegetarian choice." }] },
  { id: "schezwan-chicken-fried-rice", name: "Schezwan Chicken Fried Rice", diet: "non-vegetarian", keywords: ["rice","chicken","schezwan","spicy"], variants: [{ label: "", price: 170, description: "Chicken fried rice with a Schezwan-style flavour — a satisfying meal choice." }] },
  { id: "veg-hakka-noodles", name: "Veg Hakka Noodles", diet: "vegetarian", keywords: ["noodles","hakka","veg"], variants: [{ label: "", price: 120, description: "Hakka-style noodles with vegetables — a familiar noodle favourite." }] },
  { id: "chicken-hakka-noodles", name: "Chicken Hakka Noodles", diet: "non-vegetarian", keywords: ["noodles","hakka","chicken"], variants: [{ label: "", price: 170, description: "Hakka-style noodles with chicken — a satisfying option for noodle lovers." }] },
];

const starterNewItems: MenuItemDraft[] = [
  { id: "chicken-popcorn", name: "Chicken Popcorn", diet: "non-vegetarian", keywords: ["chicken","starter","snack"], variants: [{ label: "", price: 160, description: "Snack-sized chicken pieces — a convenient option for sharing." }] },
  { id: "crispy-chilli-baby-corn", name: "Crispy Chilli Baby Corn", diet: "vegetarian", keywords: ["corn","starter","chilli","veg"], variants: [{ label: "", price: 150, description: "Chilli-style baby corn — a vegetarian starter with plenty of character." }] },
  { id: "paneer-chilli", name: "Paneer Chilli", diet: "vegetarian", keywords: ["paneer","starter","chilli","veg"], variants: [{ label: "", price: 190, description: "Paneer prepared in a chilli-style dish — a vegetarian Indo-Chinese favourite." }] },
  { id: "crispy-chicken", name: "Crispy Chicken", diet: "non-vegetarian", keywords: ["chicken","starter","crispy"], variants: [{ label: "", price: 190, description: "Crispy chicken — a familiar choice for an Indo-Chinese starter." }] },
];

const burgerItems: MenuItemDraft[] = [
  { id: "veg-burger", name: "Veg Burger", diet: "vegetarian", keywords: ["burger","veg","sandwich"], variants: [{ label: "", price: 100, description: "A proper vegetarian burger — filling, familiar and satisfying." }] },
  { id: "chicken-burger", name: "Chicken Burger", diet: "non-vegetarian", keywords: ["burger","chicken","sandwich"], variants: [{ label: "", price: 150, description: "A chicken burger — a familiar café favourite for a filling meal." }] },
  { id: "cheese-sandwich", name: "Cheese Sandwich", diet: "vegetarian", keywords: ["sandwich","cheese","toast"], variants: [{ label: "", price: 110, description: "A sandwich with cheese — a simple and comforting café choice." }] },
  { id: "grilled-chicken-sandwich", name: "Grilled Chicken Sandwich", diet: "non-vegetarian", keywords: ["sandwich","chicken","grilled"], variants: [{ label: "", price: 150, description: "A grilled chicken sandwich — a satisfying option for a café meal." }] },
];

const dessertItems: MenuItemDraft[] = [
  { id: "chocolate-brownie", name: "Chocolate Brownie", keywords: ["dessert","chocolate","brownie","sweet"], variants: [{ label: "", price: 100, description: "A chocolate brownie — a classic dessert choice to enjoy with your café order." }] },
  { id: "brownie-with-ice-cream", name: "Brownie with Ice Cream", keywords: ["dessert","chocolate","ice cream","sweet"], variants: [{ label: "", price: 150, description: "Chocolate brownie served with ice cream — a classic dessert pairing." }] },
  { id: "chocolate-pastry", name: "Chocolate Pastry", keywords: ["dessert","chocolate","pastry","sweet"], variants: [{ label: "", price: 80, description: "A chocolate pastry — a small, sweet pause." }] },
  { id: "ice-cream", name: "Ice Cream", keywords: ["dessert","ice cream","sweet"], variants: [{ label: "", price: 70, description: "Ice cream — a simple, refreshing way to finish your meal." }] },
];

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
  "egg-fried-rice": ["filling"],
  "schezwan-veg-fried-rice": ["filling"],
  "schezwan-chicken-fried-rice": ["filling"],
  "veg-hakka-noodles": ["filling"],
  "chicken-hakka-noodles": ["filling"],
  "chicken-popcorn": ["quick-snack"],
  "crispy-chilli-baby-corn": ["quick-snack", "tea-time"],
  "paneer-chilli": ["quick-snack", "tea-time"],
  "crispy-chicken": ["quick-snack"],
  "veg-burger": ["filling", "quick-snack"],
  "chicken-burger": ["filling", "quick-snack"],
  "cheese-sandwich": ["filling", "quick-snack"],
  "grilled-chicken-sandwich": ["filling", "quick-snack"],
  "chocolate-brownie": ["sweet"],
  "brownie-with-ice-cream": ["sweet"],
  "chocolate-pastry": ["sweet"],
  "ice-cream": ["sweet"],
};

const assign = (items: MenuItemDraft[], fallback: string): MenuItem[] =>
  items.map((item) => ({ ...item, categoryId: item.categoryId ?? fallback }));

export const menuItems: MenuItem[] = [
  ...assign(mainsItems, "rice-noodles"),
  ...assign(sandwichItems, "rolls"),
  ...assign(momoItems, "momos"),
  ...assign(biteItems, "bites"),
  ...assign(drinkItems, "cold-drinks"),
  ...assign(riceNewItems, "rice-noodles"),
  ...assign(starterNewItems, "starters"),
  ...assign(burgerItems, "burgers"),
  ...assign(dessertItems, "desserts"),
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


