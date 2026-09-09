import React from 'react';
import { Sparkles, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                BEATY MAKEUP
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
              Sua loja especializada em cosméticos e maquiagens de alta qualidade. Realce sua beleza todos os dias com facilidade e segurança.
            </p>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Pagamentos processados com tecnologia Stripe</span>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Categorias
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Maquiagem para o Rosto
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Maquiagem para os Olhos
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Produtos para a Boca
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Pincéis & Acessórios
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento & Compra Segura */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Transparência
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Ambiente com Certificado SSL</li>
              <li>Links de Pagamento Criptografados</li>
              <li>Garantia contra defeitos de fábrica</li>
              <li>Rastreamento de ponta a ponta</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Beaty Makeup. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito para você brilhar com estilo e sofisticação
          </p>
        </div>
      </div>
    </footer>
  );
};
