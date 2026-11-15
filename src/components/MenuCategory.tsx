import type { Category } from "@/data/categories";
import type { MenuItem } from "@/data/menu";
import MenuItemCard from "./MenuItem";

interface Props {
  category: Category;
  items: MenuItem[];
}

export default function MenuCategory({ category, items }: Props) {
  if (items.length === 0) return null;

  return (
    <section
      id={`cat-${category.id}`}
      aria-labelledby={`cat-${category.id}-title`}
      className="scroll-mt-52"
    >
      <div className="mb-5 flex items-center gap-4">
        <div aria-hidden="true" className="h-px flex-1 bg-border-soft" />
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
          <h2
            id={`cat-${category.id}-title`}
            className="mt-1 font-serif text-2xl font-semibold text-espresso-950 sm:text-3xl"
          >
            {category.name}
          </h2>
        </div>
        <div aria-hidden="true" className="h-px flex-1 bg-border-soft" />
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <MenuItemCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
