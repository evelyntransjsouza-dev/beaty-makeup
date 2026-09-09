import React, { useState, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { TrustBar } from './components/TrustBar';
import { Footer } from './components/Footer';
import { Sparkles, SearchX, ShoppingBag } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('TODOS');
  const [sortBy, setSortBy] = useState('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Compute counts per category
  const categoryCounts = useMemo(() => {
    return {
      TODOS: PRODUCTS.length,
      ROSTO: PRODUCTS.filter((p) => p.category === 'ROSTO').length,
      OLHO: PRODUCTS.filter((p) => p.category === 'OLHO').length,
      BOCA: PRODUCTS.filter((p) => p.category === 'BOCA').length,
    };
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'TODOS' || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalogo');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 selection:bg-rose-200 selection:text-rose-950">
      {/* Top Notification Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-rose-300" />
        <span>Frete especial para todo o Brasil • Pagamento Seguro em até 12x via Stripe</span>
      </div>

      {/* Sticky Header */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        productCount={PRODUCTS.length}
      />

      {/* Hero Showcase */}
      <Hero onExploreClick={scrollToCatalog} totalProducts={PRODUCTS.length} />

      {/* Main Catalog Section */}
      <main id="catalogo" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-widest mb-1.5">
            <ShoppingBag className="w-4 h-4" />
            <span>Nossa Coleção</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
                Catálogo Oficial Beaty Makeup
              </h2>
              <p className="text-sm text-stone-500 mt-1">
                Selecione os produtos desejados e finalize sua compra com rapidez e segurança via Stripe.
              </p>
            </div>

            <div className="text-xs text-stone-500 shrink-0">
              Mostrando <span className="font-bold text-stone-900">{filteredProducts.length}</span> de{' '}
              <span className="font-bold text-stone-900">{PRODUCTS.length}</span> itens
            </div>
          </div>
        </div>

        {/* Filter and Sorting Bar */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Search feedback if searching */}
        {searchQuery && (
          <div className="pt-4 flex items-center justify-between text-xs text-stone-600">
            <p>
              Resultados para a busca por <strong className="text-stone-900">"{searchQuery}"</strong>:
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-rose-700 hover:text-rose-900 font-medium underline underline-offset-2"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            id="products-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-20 text-center flex flex-col items-center justify-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-400">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-xs text-stone-500 mb-6 leading-relaxed">
              Não encontramos nenhum item correspondente aos filtros selecionados. Tente ajustar os termos de busca ou escolher outra categoria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('TODOS');
              }}
              className="px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors"
            >
              Restaurar Catálogo
            </button>
          </div>
        )}
      </main>

      {/* Trust & Safe Checkout Pillars */}
      <TrustBar />

      {/* Footer */}
      <Footer />

      {/* Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
