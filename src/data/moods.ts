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
}

export const moods: Mood[] = [
  { id: "filling", label: "Something filling" },
  { id: "quick-snack", label: "A quick snack" },
  { id: "refreshing", label: "Something refreshing" },
  { id: "tea-time", label: "A tea-time bite" },
  { id: "sweet", label: "Something sweet" },
];
