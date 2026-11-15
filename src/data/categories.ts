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
  { id: "mains", name: "Main Dishes", short: "Mains" },
  { id: "sandwiches", name: "Sandwiches & Toast", short: "Sandwiches" },
  { id: "momos", name: "Momos & Soup", short: "Momos" },
  { id: "bites", name: "Quick Bites", short: "Quick Bites" },
  { id: "drinks", name: "Drinks & Refreshments", short: "Drinks" },
];
