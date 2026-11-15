"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { brand } from "@/data/brand";

interface Props {
  /** Pixel size of the generated PNG (printed size is controlled by CSS). */
  size?: number;
  className?: string;
}

/**
 * Real, locally generated QR code — no external service, no API.
 * Encodes brand.menuUrl with high error correction and a quiet zone.
 * Rendered on a Warm Ivory panel in every design for reliable scanning.
 */
export default function QrImage({ size = 480, className }: Props) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    QRCode.toDataURL(brand.menuUrl, {
      errorCorrectionLevel: "H",
      margin: 2,
      width: size,
      color: { dark: "#2B1D16", light: "#F5EEE3" },
    }).then((url) => {
      if (live) setDataUrl(url);
    });
    return () => {
      live = false;
    };
  }, [size]);

  if (!dataUrl) {
    return <div className={className} style={{ aspectRatio: "1 / 1" }} aria-hidden="true" />;
  }

  return (
    <img
      src={dataUrl}
      alt={`QR code linking to ${brand.menuUrl}`}
      className={className}
      style={{ aspectRatio: "1 / 1" }}
      draggable={false}
    />
  );
}
