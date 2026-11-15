/**
 * Mood-based discovery tags — "What are you in the mood for?"
 *
 * Central, configurable classification for the discovery strip. These are
 * browsing aids, not dietary or ingredient claims. Menu items reference
 * these ids via `moods` in data/menu.ts.
 */

export type MoodId = "filling" | "quick-snack" | "refreshing" | "tea-time" | "sweet";

export interface Mood {
  id: MoodId;
  label: string;
  /** Lucide icon name resolved in the UI layer. */
  icon: "drumstick" | "cookie" | "cup-soda" | "coffee" | "ice-cream";
}

export const moods: Mood[] = [
  { id: "filling", label: "Something filling", icon: "drumstick" },
  { id: "quick-snack", label: "A quick snack", icon: "cookie" },
  { id: "refreshing", label: "Something refreshing", icon: "cup-soda" },
  { id: "tea-time", label: "A tea-time bite", icon: "coffee" },
  { id: "sweet", label: "Something sweet", icon: "ice-cream" },
];
