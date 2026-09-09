import React, { useState } from 'react';
import { ExternalLink, Eye, ShieldCheck, Star, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Category badge colors
  const categoryStyles = {
    ROSTO: 'bg-rose-50 text-rose-800 border-rose-200/80',
    OLHO: 'bg-amber-50 text-amber-900 border-amber-200/80',
    BOCA: 'bg-fuchsia-50 text-fuchsia-900 border-fuchsia-200/80',
  };

  return (
    <article
      id={`product-card-${product.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-stone-300 transition-all duration-300"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-stone-100 flex items-center justify-center">
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-rose-50 to-stone-100 text-stone-400">
            <Sparkles className="w-10 h-10 text-rose-300 mb-2" />
            <span className="text-xs font-semibold text-stone-600 text-center uppercase tracking-wider">
              {product.name}
            </span>
            <span className="text-[11px] text-stone-400 mt-1">{product.category}</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span
            className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full border ${categoryStyles[product.category]} shadow-xs bg-white/95 backdrop-blur-xs`}
          >
            {product.category}
          </span>

          {product.badge && (
            <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-stone-900 text-amber-200 tracking-wide shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Quick View Button overlay on hover */}
        <div
          className={`absolute inset-x-3 bottom-3 flex items-center justify-center transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <button
            id={`btn-quickview-${product.id}`}
            onClick={() => onQuickView(product)}
            className="w-full py-2.5 px-4 bg-white/95 backdrop-blur-md text-stone-900 font-semibold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Espiar Produto</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1 p-5">
        {/* Rating & reviews */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
          <span className="text-xs font-bold text-stone-800">{product.rating ?? 4.8}</span>
          <span className="text-[11px] text-stone-400">• Em Estoque</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-bold text-stone-900 tracking-tight leading-snug mb-1.5 group-hover:text-rose-950 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Price & Checkout Action */}
        <div className="pt-3 border-t border-stone-100 flex items-end justify-between gap-3 mt-auto">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-stone-400 block">
              Valor
            </span>
            <span className="text-xl font-bold tracking-tight text-stone-900">
              {product.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id={`btn-modal-open-${product.id}`}
              onClick={() => onQuickView(product)}
              className="p-2.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors"
              title="Ver detalhes"
              aria-label="Ver detalhes"
            >
              <Eye className="w-4 h-4" />
            </button>

            <a
              id={`btn-stripe-buy-${product.id}`}
              href={product.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-xs hover:shadow-md active:scale-98"
            >
              <span>Comprar</span>
              <ExternalLink className="w-3 h-3 text-rose-300" />
            </a>
          </div>
        </div>

        {/* Safe Stripe Footer Hint */}
        <div className="mt-2.5 flex items-center justify-between text-[10px] text-stone-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Checkout Stripe
          </span>
          <span>Entrega Rápida</span>
        </div>
      </div>
    </article>
  );
};
