import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, Star, Sparkles, Truck, Lock, CreditCard } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [imageError, setImageError] = useState(false);

  if (!product) return null;

  return (
    <div
      id="product-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        id="product-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          id="btn-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors shadow-xs"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-stone-100 flex items-center justify-center p-4">
            {!imageError ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full max-h-[380px] object-contain rounded-2xl"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-stone-400">
                <Sparkles className="w-12 h-12 text-rose-300 mb-2" />
                <span className="text-sm font-semibold text-stone-700 text-center uppercase tracking-wide">
                  {product.name}
                </span>
                <span className="text-xs text-stone-400 mt-1">{product.category}</span>
              </div>
            )}

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-white/95 text-stone-900 border border-stone-200 shadow-xs">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 sm:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-sm font-bold text-stone-900">{product.rating ?? 4.9}</span>
              <span className="text-xs text-stone-400">(Avaliação máxima)</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-snug mb-3">
              {product.name}
            </h2>

            <div className="mb-4">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-0.5">
                Preço Promocional
              </span>
              <div className="text-3xl font-extrabold text-stone-900 tracking-tight">
                {product.price}
              </div>
              <span className="text-xs text-stone-500">
                Ou parcele no cartão via checkout oficial
              </span>
            </div>

            <div className="space-y-2.5 py-4 border-y border-stone-100 my-2 text-sm text-stone-600">
              <p className="leading-relaxed">{product.description}</p>
              <div className="pt-2 flex flex-col gap-1.5 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Produto lacrado e 100% original</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Envio com código de rastreio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Processado via Stripe com criptografia SSL</span>
                </div>
              </div>
            </div>

            {/* Direct Checkout Button */}
            <div className="mt-auto pt-4 space-y-3">
              <a
                id="btn-modal-checkout-stripe"
                href={product.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-stone-900 hover:bg-stone-800 text-white rounded-2xl font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-98"
              >
                <span>Finalizar Compra via Stripe</span>
                <ExternalLink className="w-4 h-4 text-rose-300" />
              </a>

              <div className="flex items-center justify-center gap-4 text-xs text-stone-400">
                <span className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" /> Cartão / Pix
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Compra Protegida
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
