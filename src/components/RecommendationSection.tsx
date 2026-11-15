import { Flame, Coffee, IceCreamCone, Sparkles, Soup, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { brand } from "@/data/brand";
import { categories } from "@/data/categories";
import { formatPrice, menuItems } from "@/data/menu";
import { recommends, type RecommendEntry } from "@/data/recommendations";

const categoryNameById = new Map(categories.map((c) => [c.id, c.name]));
const itemById = new Map(menuItems.map((item) => [item.id, item]));

const ICONS: Record<string, LucideIcon> = {
  "dragon-chicken": Flame,
  "jhol-momo": Soup,
  "french-fries": UtensilsCrossed,
  "cold-coffee": Coffee,
  "chicken-fried-rice-schezwan": Sparkles,
  "oreo-shake": IceCreamCone,
};

const DEFAULT_ICON = Sparkles;

interface Resolved {
  entry: RecommendEntry;
  name: string;
  priceLabel: string;
  description: string;
  categoryName: string;
}

function resolve(entry: RecommendEntry): Resolved | null {
  const item = itemById.get(entry.itemId);
  if (!item) return null;
  const variants = entry.variantLabel
    ? item.variants.filter((v) => v.label === entry.variantLabel)
    : item.variants;
  if (variants.length === 0) return null;
  return {
    entry,
    name: entry.variantLabel ? `${entry.variantLabel} ${item.name}` : item.name,
    priceLabel: variants.map((v) => formatPrice(v.price)).join("  ·  "),
    description: variants.map((v) => v.description).filter(Boolean).join(" "),
    categoryName: categoryNameById.get(item.categoryId) ?? item.categoryId,
  };
}

export default function RecommendationSection() {
  const picks = recommends.map(resolve).filter((r): r is Resolved => r !== null);
  if (picks.length === 0) return null;

  const { eyebrow, title, subtitle, id } = brand.sections.recommends;

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-5xl scroll-mt-48 px-4 sm:px-6">
      <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map(({ entry, name, priceLabel, description, categoryName }) => {
          const Icon = ICONS[entry.itemId] ?? DEFAULT_ICON;
          return (
            <article
              key={`${entry.itemId}-${entry.variantLabel ?? "all"}`}
              className="card-enter group flex flex-col rounded-2xl border border-border-soft border-t-2 border-t-amber-500/70 bg-card p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-full bg-amber-500/10 text-amber-600 ring-1 ring-amber-500/30">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <span className="font-serif text-lg font-semibold text-amber-700">
                  {priceLabel}
                </span>
              </div>
              <h3 className="mt-4 font-sans text-[15px] font-bold leading-snug text-espresso-950">
                {name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-mocha-600">
                {description}
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-sage-500">
                {categoryName}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8 text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-600">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-2 font-serif text-3xl font-semibold text-espresso-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-2 font-serif text-base italic text-mocha-500">{subtitle}</p>
      <div aria-hidden="true" className="mx-auto mt-5 flex items-center justify-center gap-2">
        <span className="h-px w-10 bg-champagne-400/80" />
        <span className="size-1.5 rotate-45 bg-amber-500" />
        <span className="h-px w-10 bg-champagne-400/80" />
      </div>
    </div>
  );
}
