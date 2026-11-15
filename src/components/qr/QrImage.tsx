import { brand } from "@/data/brand";

interface QrImageProps {
  src: string | null;
  className?: string;
}

/** Pure presentational QR image — sized by CSS, crisp at any print size. */
export default function QrImage({ src, className }: QrImageProps) {
  if (!src) {
    return <div className={className} style={{ aspectRatio: "1 / 1" }} aria-hidden="true" />;
  }
  return (
    <img
      src={src}
      alt={`QR code linking to ${brand.menuUrl}`}
      className={className}
      style={{ aspectRatio: "1 / 1" }}
      draggable={false}
    />
  );
}
