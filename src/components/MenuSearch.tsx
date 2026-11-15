"use client";

import { Search, X } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function MenuSearch({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-mocha-500/60"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Find something delicious..."
        aria-label="Search the menu"
        enterKeyHint="search"
        autoComplete="off"
        className="h-12 w-full rounded-full border border-border-soft bg-card pl-11 pr-11 text-sm font-medium text-mocha-700 shadow-sm transition-all duration-200 placeholder:text-mocha-500/50 focus:border-amber-500 focus:shadow-[0_0_0_3px_rgba(203,121,44,0.15)] focus:outline-none [&::-webkit-search-cancel-button]:hidden"
      />
      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="pressable absolute right-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-mocha-500 transition-colors hover:bg-ivory-200 hover:text-mocha-700"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}
