import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones, Lock, CheckCircle2 } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section id="garantias" className="py-16 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-rose-700 font-bold block mb-2">
            Segurança & Confiabilidade
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Compre com total tranquilidade
          </h2>
          <p className="text-sm text-stone-500 mt-2">
            Sua experiência é prioritária. Todos os pagamentos são protegidos pela infraestrutura de ponta da Stripe.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/70 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-stone-900 text-rose-300 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">
              Checkout Oficial Stripe
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Criptografia de ponta a ponta. Seus dados financeiros nunca são compartilhados ou armazenados.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/70 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-stone-900 text-rose-300 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">
              Envio Rápido & Seguro
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Despacho ágil com código de rastreamento para você acompanhar cada etapa do pacote até a sua porta.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/70 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-stone-900 text-rose-300 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">
              Produtos 100% Originais
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Itens lacrados, dentro da validade e com controle rigoroso de qualidade cosmética.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200/70 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-stone-900 text-rose-300 flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 mb-1">
              Atendimento Dedicado
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Suporte pronto para tirar dúvidas sobre produtos, tonalidades e pedidos confirmados.
            </p>
          </div>
        </div>

        {/* How to Buy Step-by-Step */}
        <div className="mt-14 p-8 rounded-3xl bg-stone-900 text-stone-100 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-semibold tracking-widest text-amber-300 uppercase block mb-2">
              Passo a Passo Simples
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Como funciona o seu pedido em 3 etapas
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-xs">
                    1
                  </span>
                  <h4 className="font-semibold text-sm text-white">Escolha o Produto</h4>
                </div>
                <p className="text-xs text-stone-400">
                  Navegue pelo catálogo e clique em "Comprar" no item desejado.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-xs">
                    2
                  </span>
                  <h4 className="font-semibold text-sm text-white">Pague na Stripe</h4>
                </div>
                <p className="text-xs text-stone-400">
                  A página oficial e segura da Stripe abre para você informar entrega e pagamento.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-xs">
                    3
                  </span>
                  <h4 className="font-semibold text-sm text-white">Receba em Casa</h4>
                </div>
                <p className="text-xs text-stone-400">
                  Receba a confirmação por e-mail com rastreio e aguarde a chegada com segurança!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
