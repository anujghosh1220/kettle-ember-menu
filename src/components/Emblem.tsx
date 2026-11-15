interface Props {
  className?: string;
  /** Stroke/fill colour — inherits currentColor for the kettle outline. */
  emberClassName?: string;
}

/**
 * KETTLE & EMBER emblem — a minimal circular mark: kettle outline with a
 * small ember accent. Pure inline SVG, no assets.
 */
export default function Emblem({ className = "size-9", emberClassName = "fill-amber-500" }: Props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1.6" />
      {/* kettle body */}
      <path
        d="M15 22.5h18v8a5 5 0 0 1-5 5h-8a5 5 0 0 1-5-5v-8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* lid */}
      <path d="M20.5 22.5v-2a3.5 3.5 0 0 1 7 0v2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="19" r="1.1" className={emberClassName} />
      {/* spout */}
      <path
        d="M33 24.5l4.5-2.8v5.8l-4.5-1.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* handle */}
      <path
        d="M15 22.5c-2.6-.4-4-2.2-3.8-4.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* ember accent */}
      <circle cx="24" cy="30" r="1.9" className={emberClassName} />
    </svg>
  );
}
