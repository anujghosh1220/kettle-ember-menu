import { formatPrice, variantDiet, type Diet, type MenuItem, type MenuVariant } from "@/data/menu";

interface Props {
  item: MenuItem;
  index?: number;
}

/** Small accessible veg / non-veg marker — not reliant on colour alone. */
function DietMark({ diet }: { diet: Diet }) {
  if (diet === "unverified") return null;
  const veg = diet === "vegetarian";
  return (
    <span
      role="img"
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
      title={veg ? "Vegetarian" : "Non-vegetarian"}
      className={`inline-block size-3.5 shrink-0 rounded-full border-[1.5px] align-middle ${
        veg ? "border-sage-500" : "border-amber-600"
      }`}
    >
      <span
        aria-hidden="true"
        className={`mx-auto mt-[3px] block size-1.5 rounded-full ${veg ? "bg-sage-500" : "bg-amber-600"}`}
      />
    </span>
  );
}

export default function MenuItemCard({ item, index = 0 }: Props) {
  const variants = item.variants;
  const single = variants.length === 1;
  const singleVariant = single ? variants[0] : null;
  const showVariantRows = !single || (singleVariant?.label ?? "") !== "";
  const singleDiet = singleVariant ? variantDiet(item, singleVariant) : "unverified";

  return (
    <article
      id={`item-${item.id}`}
      className="card-enter scroll-mt-52 rounded-2xl border border-border-soft bg-card px-5 py-4 shadow-card"
      style={{ animationDelay: `${Math.min(index * 35, 350)}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="font-sans text-[15px] font-bold leading-snug text-espresso-950">
              {item.name}
            </h3>
            {!showVariantRows && singleDiet !== "unverified" ? <DietMark diet={singleDiet} /> : null}
            {item.badge ? (
              <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-amber-700">
                {item.badge}
              </span>
            ) : null}
          </div>
          {item.serving ? (
            <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-sage-500">
              {item.serving}
            </p>
          ) : null}
        </div>

        {/* Price block */}
        <div className="shrink-0 pt-0.5 text-right">
          {!showVariantRows ? (
            <span className="font-sans text-lg font-extrabold text-amber-700">
              {formatPrice(singleVariant?.price ?? 0)}
            </span>
          ) : null}
        </div>
      </div>

      {/* Variations + descriptions — only when the item actually has
          labelled variations or multiple prices. Single-price items show
          their price once, top-right, with the description below. */}
      {showVariantRows ? (
        <div className="mt-3 flex flex-col gap-2.5 border-t border-border-soft/70 pt-3">
          {variants.map((v: MenuVariant) => {
            const diet = variantDiet(item, v);
            return (
              <div key={v.label || "single"}>
                <div className="flex items-baseline gap-2">
                  {diet !== "unverified" ? (
                    <span className="flex shrink-0 translate-y-[-1px]">
                      <DietMark diet={diet} />
                    </span>
                  ) : null}
                  {v.label ? (
                    <span className="shrink-0 text-[13px] font-semibold text-espresso-950">{v.label}</span>
                  ) : null}
                  <span aria-hidden="true" className="min-w-4 flex-1 border-b border-dotted border-mocha-500/25" />
                  <span className="shrink-0 text-[13px] font-bold text-amber-700">
                    {formatPrice(v.price)}
                  </span>
                </div>
                {v.description ? (
                  <p className="mt-1 text-[12px] leading-relaxed text-mocha-600">{v.description}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : singleVariant?.description ? (
        <p className="mt-2 text-[12px] leading-relaxed text-mocha-600">
          {singleVariant.description}
        </p>
      ) : null}
    </article>
  );
}
