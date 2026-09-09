import React from 'react';
import { Sparkles, Eye, Smile, User, SlidersHorizontal } from 'lucide-react';
import { ProductCategory } from '../types';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  categoryCounts: Record<ProductCategory, number>;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  sortBy,
  onSortChange,
}) => {
  const categories: { id: ProductCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'TODOS', label: 'Todos os Produtos', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'ROSTO', label: 'Rosto', icon: <User className="w-4 h-4" /> },
    { id: 'OLHO', label: 'Olhos', icon: <Eye className="w-4 h-4" /> },
    { id: 'BOCA', label: 'Boca', icon: <Smile className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-category-${cat.id.toLowerCase()}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-600 hover:bg-stone-100 hover:text-stone-900 border border-stone-200/80'
              }`}
            >
              <span className={isActive ? 'text-rose-300' : 'text-stone-400'}>
                {cat.icon}
              </span>
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-500'
                }`}
              >
                {categoryCounts[cat.id] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sorting dropdown */}
      <div className="flex items-center gap-2 self-end md:self-auto">
        <label
          htmlFor="product-sort-select"
          className="flex items-center gap-1.5 text-xs text-stone-500 font-medium whitespace-nowrap"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Ordenar por:</span>
        </label>
        <select
          id="product-sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-white border border-stone-200 text-stone-800 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-stone-200"
        >
          <option value="featured">Destaques</option>
          <option value="price-asc">Menor Preço</option>
          <option value="price-desc">Maior Preço</option>
          <option value="name-asc">Nome (A - Z)</option>
        </select>
      </div>
    </div>
  );
};
