import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { brand } from "@/data/brand";

/**
 * Generates the table-QR once as a resolution-independent SVG data URL.
 * Encodes brand.menuUrl with high error correction and a quiet zone —
 * no external service, no API, identical output for every design.
 */
export function useQrDataUrl(): string | null {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    QRCode.toString(brand.menuUrl, {
      errorCorrectionLevel: "H",
      margin: 2,
      color: { dark: "#2B1D16", light: "#F5EEE3" },
      type: "svg",
    }).then((svg) => {
      if (live) {
        setDataUrl(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
      }
    });
    return () => {
      live = false;
    };
  }, []);

  return dataUrl;
}
