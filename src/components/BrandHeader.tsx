"use client";

import { useEffect, useState } from "react";
import { brand } from "@/data/brand";
import Emblem from "./Emblem";

const NAV = [
  { href: "#recommends", label: "Kitchen" },
  { href: "#combos", label: "Combos" },
  { href: "#menu", label: "Menu" },
];

export default function BrandHeader() {
  const [open, setOpen] = useState(false);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ivory-50/10 bg-espresso-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${brand.name} — back to top`}>
          <Emblem className="size-8 text-champagne-300 sm:size-9" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-[0.18em] text-ivory-50 sm:text-xl">
              {brand.wordmark}
            </span>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.34em] text-champagne-300/80">
              {brand.descriptor}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 sm:flex">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ivory-50/70 transition-colors hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Animated hamburger — three lines morph into an X */}
        <button
          type="button"
          className="pressable relative grid size-11 place-items-center rounded-full text-ivory-50 transition-colors duration-200 hover:bg-ivory-50/10 focus-visible:bg-ivory-50/10 sm:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-5 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
                open ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Cinematic reveal — grid-rows animates height, links stagger in.
          Always mounted so the close transition can complete. */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] sm:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            inert={!open}
            className="border-t border-ivory-50/10 bg-espresso-950 px-4 pb-5 pt-2"
          >
            <ul className="flex flex-col">
              {NAV.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    style={{ transitionDelay: open ? `${80 + i * 80}ms` : "0ms" }}
                    className={`group relative flex items-center py-3.5 text-base font-semibold text-ivory-50/85 transition-all duration-300 ${
                      open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    }`}
                  >
                    <span className="mr-3 inline-block size-1 rotate-45 bg-amber-500/70 transition-all duration-300 group-hover:bg-amber-400" aria-hidden="true" />
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-1.5 left-4 h-px w-0 bg-amber-500 transition-all duration-300 group-hover:w-16"
                    />
                  </a>
                </li>
              ))}
            </ul>
            <div aria-hidden="true" className="mx-auto mt-4 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-champagne-300/25" />
              <span className="size-1 rotate-45 bg-amber-500/60" />
              <span className="h-px w-8 bg-champagne-300/25" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
