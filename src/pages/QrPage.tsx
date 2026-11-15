"use client";

import { useEffect, useMemo, useState } from "react";
import { Printer } from "lucide-react";
import { brand } from "@/data/brand";
import { EmberClassic, IvoryEdition, ModernCounter, TentBack, TentFront } from "@/components/qr/QrSheets";
import Emblem from "@/components/Emblem";

type DesignId = "ember" | "ivory" | "counter";
type LayoutId = "card" | "tent";

interface PrintSize {
  id: string;
  label: string;
  /** CSS @page size */
  page: string;
  w: number; // mm
  h: number; // mm
}

const PRINT_SIZES: PrintSize[] = [
  { id: "a6", label: "A6 portrait · 105×148", page: "105mm 148mm", w: 105, h: 148 },
  { id: "a5", label: "A5 portrait · 148×210", page: "148mm 210mm", w: 148, h: 210 },
  { id: "card", label: "Table card · 100×150", page: "100mm 150mm", w: 100, h: 150 },
  { id: "square", label: "Square · 120×120", page: "120mm 120mm", w: 120, h: 120 },
];

const TENT_SIZE: PrintSize = { id: "tent", label: "Table tent panels", page: "100mm 150mm", w: 100, h: 150 };

const DESIGNS: { id: DesignId; name: string; blurb: string }[] = [
  { id: "ember", name: "Ember Classic", blurb: "Signature table display" },
  { id: "ivory", name: "Ivory Edition", blurb: "Minimal stationery" },
  { id: "counter", name: "Modern Counter", blurb: "Bold & architectural" },
];

function sheetStyle(size: PrintSize): React.CSSProperties {
  return {
    ["--pw" as string]: `${size.w}mm`,
    ["--ph" as string]: `${size.h}mm`,
    aspectRatio: `${size.w} / ${size.h}`,
  };
}

export default function QrPage() {
  const [design, setDesign] = useState<DesignId>("ember");
  const [layout, setLayout] = useState<LayoutId>("card");
  const [sizeId, setSizeId] = useState("a6");

  const size = useMemo(
    () => PRINT_SIZES.find((s) => s.id === sizeId) ?? PRINT_SIZES[0],
    [sizeId],
  );

  // Accurate @page dimensions for the selected print size.
  useEffect(() => {
    const active = layout === "tent" ? TENT_SIZE : size;
    let tag = document.getElementById("qr-page-size") as HTMLStyleElement | null;
    if (!tag) {
      tag = document.createElement("style");
      tag.id = "qr-page-size";
      document.head.appendChild(tag);
    }
    tag.textContent = `@page { size: ${active.page}; margin: 0; }`;
    return () => {
      tag?.remove();
    };
  }, [size, layout]);

  useEffect(() => {
    document.title = "QR Displays | KETTLE & EMBER CAFÉ";
  }, []);

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-dvh bg-ivory-50 text-mocha-700">
      {/* Page chrome — hidden automatically in print */}
      <header className="border-b border-border-soft bg-espresso-950">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <div className="flex items-center gap-2.5">
            <Emblem className="size-8 text-champagne-300" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-base font-semibold tracking-[0.16em] text-ivory-50">
                {brand.wordmark}
              </span>
              <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.32em] text-champagne-300/80">
                QR Display Studio
              </span>
            </span>
          </div>
          <a
            href="/"
            className="pressable rounded-full border border-ivory-50/25 px-4 py-2 text-xs font-bold text-ivory-50/80 transition-colors hover:border-amber-400 hover:text-amber-300"
          >
            Back to menu
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-600">
            Print-ready QR displays
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-espresso-950 sm:text-4xl">
            A beautiful first impression starts here.
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-mocha-600">
            Choose a QR display designed to bring your guests straight to something delicious.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          {/* ── Controls ── */}
          <div className="flex flex-col gap-6">
            <fieldset>
              <legend className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-mocha-500">
                Design
              </legend>
              <div className="flex flex-col gap-2">
                {DESIGNS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDesign(d.id)}
                    aria-pressed={design === d.id}
                    className={`pressable rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                      design === d.id
                        ? "border-amber-500 bg-card shadow-card"
                        : "border-border-soft bg-card/60 hover:border-mocha-500/40"
                    }`}
                  >
                    <span className="block text-sm font-bold text-espresso-950">{d.name}</span>
                    <span className="block text-xs text-mocha-500">{d.blurb}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-mocha-500">
                Layout
              </legend>
              <div className="flex gap-2">
                {(["card", "tent"] as LayoutId[]).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLayout(l)}
                    aria-pressed={layout === l}
                    className={`pressable flex-1 rounded-xl border px-3 py-2.5 text-sm font-bold transition-all duration-200 ${
                      layout === l
                        ? "border-amber-500 bg-espresso-950 text-ivory-50"
                        : "border-border-soft bg-card/60 text-mocha-600 hover:border-mocha-500/40"
                    }`}
                  >
                    {l === "card" ? "Single card" : "Table tent"}
                  </button>
                ))}
              </div>
            </fieldset>

            {layout === "card" ? (
              <fieldset>
                <legend className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-mocha-500">
                  Print size
                </legend>
                <div className="flex flex-col gap-2">
                  {PRINT_SIZES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSizeId(s.id)}
                      aria-pressed={size.id === s.id}
                      className={`pressable rounded-xl border px-4 py-2.5 text-left text-sm font-semibold transition-all duration-200 ${
                        size.id === s.id
                          ? "border-amber-500 bg-card text-espresso-950 shadow-card"
                          : "border-border-soft bg-card/60 text-mocha-600 hover:border-mocha-500/40"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            ) : (
              <p className="rounded-xl border border-border-soft bg-card/60 px-4 py-3 text-xs leading-relaxed text-mocha-600">
                Table tent prints as two A-card panels — <strong>front</strong> carries the QR,
                <strong> back</strong> carries the closing message. Print double-sided or flip
                the sheet between passes.
              </p>
            )}

            <button
              type="button"
              onClick={handlePrint}
              className="pressable mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber-500 text-sm font-bold text-espresso-950 transition-colors hover:bg-amber-400"
            >
              <Printer className="size-4" aria-hidden="true" />
              Print QR display
            </button>

            <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-mocha-500">
              <li>· Enable <strong>background graphics</strong> in the print dialog for best results.</li>
              <li>· The QR links to {brand.menuUrl}</li>
              <li>· For tents: print the front panel, flip the sheet, print the back.</li>
            </ul>
          </div>

          {/* ── Live preview (this subtree is also the print output) ── */}
          <div className="qr-print-root flex min-h-[60dvh] items-start justify-center lg:items-center">
            {layout === "card" ? (
              <div className="w-full max-w-[380px]">
                {design === "ember" && <EmberClassic style={sheetStyle(size)} />}
                {design === "ivory" && <IvoryEdition style={sheetStyle(size)} />}
                {design === "counter" && <ModernCounter style={sheetStyle(size)} />}
              </div>
            ) : (
              <div className="flex w-full max-w-[380px] flex-col gap-6">
                <TentFront style={sheetStyle(TENT_SIZE)} />
                <TentBack style={sheetStyle(TENT_SIZE)} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
