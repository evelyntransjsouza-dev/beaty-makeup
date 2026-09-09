import React from 'react';
import { ArrowDown, Sparkles, Shield, Truck, CreditCard, Heart } from 'lucide-react';
import makeupHeroBg from '../assets/images/makeup_hero_bg_1788976063150.jpg';

interface HeroProps {
  onExploreClick: () => void;
  totalProducts: number;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, totalProducts }) => {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white min-h-[580px] sm:min-h-[620px] flex items-center border-b border-stone-800">
      {/* Makeup Background Image with Multi-layer Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={makeupHeroBg}
          alt="Maquiagem e Cosméticos Beaty Makeup"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] scale-105 transition-transform duration-1000"
        />
        {/* Soft elegant gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-900/60" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-stone-950/40 to-stone-950/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 backdrop-blur-md border border-rose-300/30 text-rose-200 text-xs font-semibold tracking-widest uppercase mb-6 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
            <span>BEATY MAKEUP • COLEÇÃO EXCLUSIVA</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-sm">
            Beaty Makeup: Realce sua essência e beleza única
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-stone-200 font-normal leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-xs">
            Descubra os produtos mais amados para <strong className="text-white font-semibold">Rosto</strong>, <strong className="text-white font-semibold">Olhos</strong> e <strong className="text-white font-semibold">Boca</strong>. Cosméticos selecionados, preços justos e pagamento seguro direto via Stripe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              id="hero-explore-btn"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-rose-50 text-stone-950 rounded-full font-bold text-sm tracking-wide uppercase transition-all shadow-xl hover:shadow-2xl hover:scale-102 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Explorar Produtos</span>
              <ArrowDown className="w-4 h-4 text-rose-600" />
            </button>
            <a
              href="#garantias"
              className="w-full sm:w-auto px-7 py-4 bg-stone-900/80 hover:bg-stone-900 text-stone-200 hover:text-white rounded-full font-medium text-sm border border-stone-700/80 backdrop-blur-md transition-all text-center"
            >
              Garantias & Envio Seguro
            </a>
          </div>

          {/* Quick trust metrics glass bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/15">
            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-left">
              <CreditCard className="w-4 h-4 text-rose-300 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Stripe Oficial</p>
                <p className="text-[11px] text-stone-300">Checkout Seguro</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-left">
              <Truck className="w-4 h-4 text-rose-300 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Envio Ágil</p>
                <p className="text-[11px] text-stone-300">Para Todo o Brasil</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-left">
              <Shield className="w-4 h-4 text-rose-300 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">100% Originais</p>
                <p className="text-[11px] text-stone-300">Itens Lacrados</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-left">
              <Sparkles className="w-4 h-4 text-rose-300 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">{totalProducts} Produtos</p>
                <p className="text-[11px] text-stone-300">Pronta Entrega</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
