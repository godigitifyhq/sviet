import { cn } from "@/lib/utils";

type CategoryTabsProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="mt-8" aria-label="Infrastructure categories">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-semibold transition",
                isActive
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:text-gray-900",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}