import { brand } from "@/data/brand";
import QrImage from "./QrImage";

/**
 * Printable QR sheet designs. All sizing uses container-query units (cqw)
 * so the same markup scales perfectly from screen preview to exact print
 * dimensions. The QR always sits on a Warm Ivory panel for scannability.
 */

interface SheetProps {
  /** CSS custom props for print sizing: --pw/--ph (mm) and --ar (ratio). */
  style?: React.CSSProperties;
}

function Credit() {
  const { developer } = brand;
  return (
    <p className="qr-credit">
      {developer.credit} {developer.name}
    </p>
  );
}

function QrPanel() {
  return (
    <div className="qr-panel">
      <QrImage className="qr-img" />
    </div>
  );
}

/* ── DESIGN A · EMBER CLASSIC ─────────────────────────────────── */

export function EmberClassic({ style }: SheetProps) {
  return (
    <div className="qr-sheet qr-ember" style={style}>
      <div className="qr-inner">
        <p className="qr-eyebrow">{brand.wordmark}</p>
        <p className="qr-sub">{brand.descriptor}</p>
        <div className="qr-rule" aria-hidden="true" />
        <QrPanel />
        <p className="qr-cta">Scan to explore</p>
        <p className="qr-hint">Discover something delicious.</p>
        <p className="qr-tagline">“{brand.tagline}”</p>
        <Credit />
      </div>
    </div>
  );
}

/* ── DESIGN B · IVORY EDITION ─────────────────────────────────── */

export function IvoryEdition({ style }: SheetProps) {
  return (
    <div className="qr-sheet qr-ivory" style={style}>
      <div className="qr-inner">
        <p className="qr-eyebrow-dark">{brand.wordmark}</p>
        <p className="qr-sub-dark">{brand.descriptor}</p>
        <div className="qr-rule-dark" aria-hidden="true" />
        <p className="qr-lead">A little something delicious awaits.</p>
        <QrPanel />
        <p className="qr-cta-dark">Scan to view our menu</p>
        <p className="qr-hint-dark">Your table. Your menu. Your moment.</p>
        <Credit />
      </div>
    </div>
  );
}

/* ── DESIGN C · MODERN COUNTER ────────────────────────────────── */

export function ModernCounter({ style }: SheetProps) {
  return (
    <div className="qr-sheet qr-counter">
      <div className="qr-inner" style={style}>
        <p className="qr-welcome">Welcome to</p>
        <p className="qr-brand-big">{brand.wordmark}</p>
        <p className="qr-sub">{brand.descriptor}</p>
        <div className="qr-rule" aria-hidden="true" />
        <QrPanel />
        <p className="qr-scan">Scan here</p>
        <p className="qr-tagline">“{brand.tagline}”</p>
        <Credit />
      </div>
    </div>
  );
}

/* ── TABLE TENT · FRONT / BACK panels ─────────────────────────── */

export function TentFront({ style }: SheetProps) {
  return (
    <div className="qr-sheet qr-ember qr-tent-panel" style={style}>
      <div className="qr-inner">
        <p className="qr-eyebrow">{brand.wordmark}</p>
        <p className="qr-sub">{brand.descriptor}</p>
        <div className="qr-rule" aria-hidden="true" />
        <QrPanel />
        <p className="qr-cta">Scan to explore</p>
        <p className="qr-hint">Discover something delicious.</p>
        <Credit />
      </div>
      <span className="qr-screen-only qr-fold-tag">FRONT · QR SIDE</span>
    </div>
  );
}

export function TentBack({ style }: SheetProps) {
  return (
    <div className="qr-sheet qr-ivory qr-tent-panel" style={style}>
      <div className="qr-inner">
        <p className="qr-brand-back">{brand.wordmark}</p>
        <div className="qr-rule-dark" aria-hidden="true" />
        <p className="qr-closing">Stay a little longer.</p>
        <p className="qr-hint-dark">Good food. Warm moments. That&rsquo;s the Kettle &amp; Ember way.</p>
        <p className="qr-tagline-dark">“{brand.tagline}”</p>
        <Credit />
      </div>
      <span className="qr-screen-only qr-fold-tag">BACK · MESSAGE SIDE</span>
    </div>
  );
}
