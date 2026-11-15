/**
 * Menu categories — single source for section ids, display names and the
 * short labels used in the sticky category navigation.
 */

export interface Category {
  id: string;
  name: string;
  short: string;
}

export const categories: Category[] = [
  { id: "rice-noodles", name: "Rice & Noodles", short: "Rice & Noodles" },
  { id: "starters", name: "Indo-Chinese Starters", short: "Starters" },
  { id: "rolls", name: "Rolls & Sandwiches", short: "Rolls" },
  { id: "burgers", name: "Burgers & Sandwiches", short: "Burgers" },
  { id: "momos", name: "Momos & Soup", short: "Momos" },
  { id: "bites", name: "Quick Bites", short: "Quick Bites" },
  { id: "toast", name: "Toast & Breakfast", short: "Toast" },
  { id: "hot-drinks", name: "Hot Beverages", short: "Hot Drinks" },
  { id: "cold-drinks", name: "Cold Beverages", short: "Cold Drinks" },
  { id: "desserts", name: "Desserts", short: "Desserts" },
];
