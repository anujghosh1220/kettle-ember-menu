/**
 * Café engine configuration — the single place that makes this reusable
 * menu engine "KETTLE & EMBER CAFÉ". To deploy the same engine for
 * another café, change this file plus data/menu.ts, data/categories.ts,
 * data/recommendations.ts, data/combos.ts and data/moods.ts — the
 * components contain no café-specific copy.
 */

export interface BrandContact {
  address: string | null;
  phone: string | null;
  email: string | null;
  instagram: string | null;
  hours: string | null;
}

export const brand = {
  /** Display name used in titles, footer and copyright. */
  name: "Kettle & Ember Café",
  /** Compact wordmark for header/footer. */
  wordmark: "KETTLE & EMBER",
  descriptor: "Café",
  tagline: "Good food. Warm moments. Stay a little longer.",

  /** Logo: the SVG emblem is rendered by components/Emblem.tsx. */
  logo: { emblem: true },

  /** Palette lives in src/index.css @theme tokens — documented here for reference. */
  palette: {
    midnightEspresso: "#2B1D16",
    warmIvory: "#F5EEE3",
    richMocha: "#5B4632",
    burntAmber: "#CB792C",
    champagneGold: "#F4D9A0",
    mutedSage: "#78836B",
  },

  /** Font stacks — loaded via Google Fonts in index.html, fallbacks in index.css. */
  typography: {
    display: "Playfair Display",
    body: "Manrope",
  },

  hero: {
    eyebrow: "An everyday escape",
    title: "KETTLE & EMBER",
    supporting:
      "Discover comforting favourites, satisfying bites and refreshing moments, thoughtfully brought together.",
    cta: "Explore Our Menu",
    scrollHint: "Scroll to discover",
  },

  /** "Your next favourite?" editorial feature — resolves the dish from menu data. */
  featured: {
    eyebrow: "A little something to discover",
    title: "Your next favourite?",
    supporting: "From our selection",
    itemId: "dragon-chicken",
    cta: "Discover the dish",
  },

  /** "What are you in the mood for?" — options come from data/moods.ts. */
  moods: {
    eyebrow: "Discover",
    title: "What are you in the mood for?",
    subtitle: "Find something that feels just right.",
  },

  sections: {
    recommends: {
      id: "recommends",
      eyebrow: "The café selection",
      title: "From Our Kitchen",
      subtitle: "A few favourites worth discovering.",
    },
    combos: {
      id: "combos",
      eyebrow: "Perfect pairings",
      title: "Made to Go Together",
      subtitle: "Some things are simply better together.",
      note: "Suggested pairings. Items are priced individually.",
    },
    menu: {
      id: "menu",
      eyebrow: "The full menu",
      title: "Our Menu",
    },
  },

  /** Premium closing block at the top of the footer. */
  closing: {
    title: "Stay a little longer.",
    text: "Good food. Warm moments. That's the Kettle & Ember way.",
  },

  footer: {
    closingLine: "Good food. Warm moments. Stay a little longer.",
  },

  /** Developer attribution — set url only to a real, verified URL. */
  developer: {
    name: "AG LaunchLab",
    url: null as string | null,
    credit: "Designed & Developed by",
  },

  contact: {
    address: null,
    phone: null,
    email: null,
    instagram: null,
    hours: null,
  } as BrandContact,
} as const;
