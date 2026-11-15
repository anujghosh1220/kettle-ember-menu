import { brand } from "@/data/brand";
import { categories } from "@/data/categories";
import Emblem from "./Emblem";

const { contact, developer } = brand;
const hasContact = Boolean(
  contact.address || contact.phone || contact.email || contact.instagram || contact.hours,
);

export default function Footer() {
  const year = 2026;

  return (
    <footer className="mt-4 bg-espresso-950">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-14">
        {/* Closing line — the visual highlight */}
        <h2 className="font-serif text-3xl font-semibold text-ivory-50 sm:text-4xl">
          {brand.closing.title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ivory-50/60">
          {brand.closing.text}
        </p>

        {/* Single brand identity + tagline */}
        <p className="mt-6 flex items-center justify-center gap-2.5">
          <Emblem className="size-7 text-champagne-300" />
          <span className="font-serif text-lg font-semibold tracking-[0.18em] text-champagne-300">
            {brand.wordmark}
          </span>
        </p>
        <p className="mt-1 font-serif text-sm italic text-ivory-50/50">
          “{brand.tagline}”
        </p>

        {/* Navigation */}
        <nav aria-label="Footer" className="mt-7">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ivory-50/70">
            <li><a href="#recommends" className="transition-colors hover:text-amber-300">Recommendations</a></li>
            <li><a href="#combos" className="transition-colors hover:text-amber-300">Combos</a></li>
            <li><a href="#menu" className="transition-colors hover:text-amber-300">Full Menu</a></li>
            {categories.map((cat) => (
              <li key={cat.id}>
                <a href={`#cat-${cat.id}`} className="transition-colors hover:text-amber-300">
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {hasContact ? (
          <address className="mt-6 flex flex-col items-center gap-1.5 text-sm not-italic text-ivory-50/60">
            {contact.address ? <span>{contact.address}</span> : null}
            {contact.phone ? <a href={`tel:${contact.phone}`} className="hover:text-amber-300">{contact.phone}</a> : null}
            {contact.email ? <a href={`mailto:${contact.email}`} className="hover:text-amber-300">{contact.email}</a> : null}
            {contact.instagram ? (
              <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
                Instagram
              </a>
            ) : null}
            {contact.hours ? <span>{contact.hours}</span> : null}
          </address>
        ) : null}

        {/* Hairline + credits */}
        <div aria-hidden="true" className="mx-auto mt-8 h-px w-24 bg-champagne-300/30" />

        <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-ivory-50/40">
          {developer.credit}{" "}
          {developer.url ? (
            <a
              href={developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ivory-50/60 transition-colors hover:text-amber-300"
            >
              {developer.name}
            </a>
          ) : (
            <span className="font-semibold text-ivory-50/60">{developer.name}</span>
          )}
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ivory-50/40">
          © {year} {brand.name}
        </p>
      </div>
    </footer>
  );
}
