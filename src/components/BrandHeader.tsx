"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "@/data/brand";
import Emblem from "./Emblem";

const NAV = [
  { href: "#recommends", label: "Kitchen" },
  { href: "#combos", label: "Combos" },
  { href: "#menu", label: "Menu" },
];

export default function BrandHeader() {
  const [open, setOpen] = useState(false);

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

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full text-ivory-50 sm:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="border-t border-ivory-50/10 bg-espresso-950 px-4 pb-4 sm:hidden">
          <ul className="flex flex-col">
            {NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-base font-semibold text-ivory-50/85 transition-colors hover:text-amber-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
