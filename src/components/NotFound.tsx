import { brand } from "@/data/brand";
import Emblem from "./Emblem";

/** Branded 404 — rendered by the client router for unknown paths. */
export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-espresso-950 px-6 text-center text-ivory-50">
      <Emblem className="size-14 text-champagne-300" />
      <h1 className="mt-8 font-serif text-3xl font-semibold sm:text-4xl">
        Looks like you&rsquo;ve taken a little detour.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory-50/60">
        Let&rsquo;s get you back to something delicious.
      </p>
      <a
        href="/"
        className="pressable mt-9 inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-8 text-sm font-bold text-espresso-950 transition-colors hover:bg-amber-400"
      >
        Back to Menu
      </a>
      <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.3em] text-champagne-300/60">
        {brand.wordmark}
      </p>
    </div>
  );
}
