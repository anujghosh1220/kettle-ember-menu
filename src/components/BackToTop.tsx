"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="pressable fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full bg-espresso-800 text-champagne-300 shadow-card transition-colors hover:bg-espresso-950"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
