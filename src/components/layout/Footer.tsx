import React from 'react';
import { BUSINESS_INFO } from '../../data/business';
import { ActiveTab } from '../../types';

interface FooterProps {
  onSelectTab: (tab: ActiveTab) => void;
  onOpenPaymentModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenPaymentModal }) => {
  return (
    <footer className="bg-primary text-linen pt-12 pb-24 md:pb-12 border-t border-border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Atelier Philosophy */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-xl">cake</span>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-ivory tracking-wide leading-none">
                  GHENALE
                </h3>
                <span className="text-[10px] tracking-widest uppercase font-bold text-gold">
                  Giovanna Pastelería
                </span>
              </div>
            </div>
            <p className="font-script text-2xl text-gold italic">
              «{BUSINESS_INFO.slogan}»
            </p>
            <p className="text-xs text-linen/75 leading-relaxed">
              Artesanía pastelera de alta costura y horneado tradicional para tus momentos más especiales en Sullana, Piura y alrededores.
            </p>
          </div>

          {/* Column 2: Workshop Location in Sullana */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-ivory flex items-center gap-2">
              <span className="material-symbols-outlined text-gold text-lg">location_on</span>
              Taller Artesanal Sullana
            </h4>
            <p className="text-xs text-linen/80 leading-relaxed">
              <strong className="text-ivory block font-medium">Dirección:</strong>
              {BUSINESS_INFO.address}
            </p>
            <p className="text-xs text-gold/90 font-medium">
              Ref: {BUSINESS_INFO.reference}
            </p>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-secondary-soft hover:text-ivory transition-colors underline underline-offset-4"
            >
              <span className="material-symbols-outlined text-sm">directions</span>
              Abrir en Google Maps / Waze
            </a>
          </div>

          {/* Column 3: Contact & Schedules */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-ivory flex items-center gap-2">
              <span className="material-symbols-outlined text-gold text-lg">schedule</span>
              Horarios & Pedidos
            </h4>
            <div className="text-xs text-linen/80 space-y-1">
              <p>{BUSINESS_INFO.schedule.weekdays}</p>
              <p>{BUSINESS_INFO.schedule.weekends}</p>
              <p className="text-gold/90 font-semibold pt-1">
                {BUSINESS_INFO.schedule.leadTime}
              </p>
            </div>
            <div className="pt-2 flex flex-col gap-1.5 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 text-ivory hover:text-gold transition-colors font-mono font-bold"
              >
                <span className="material-symbols-outlined text-sm text-gold">call</span>
                Llamar: {BUSINESS_INFO.phoneFormatted}
              </a>
              <a
                href={`https://wa.me/51997404726?text=Hola%20Giovanna,%20deseo%20hacer%20un%20pedido`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                WhatsApp Directo
              </a>
            </div>
          </div>

          {/* Column 4: Local Payment Methods */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-ivory flex items-center gap-2">
              <span className="material-symbols-outlined text-gold text-lg">payments</span>
              Medios de Pago Locales
            </h4>
            <p className="text-xs text-linen/75">
              Paga seguro sin comisiones para agendar tu pedido en horno:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={onOpenPaymentModal}
                className="flex items-center gap-1.5 p-2 rounded bg-white/10 hover:bg-white/20 transition-all text-left"
              >
                <span className="w-5 h-5 rounded-full bg-[#742384] text-white flex items-center justify-center font-bold text-[10px]">Y</span>
                <span className="font-bold text-ivory">Yape</span>
              </button>
              <button
                onClick={onOpenPaymentModal}
                className="flex items-center gap-1.5 p-2 rounded bg-white/10 hover:bg-white/20 transition-all text-left"
              >
                <span className="w-5 h-5 rounded-full bg-[#00D4B2] text-black flex items-center justify-center font-bold text-[10px]">P</span>
                <span className="font-bold text-ivory">Plin</span>
              </button>
              <button
                onClick={onOpenPaymentModal}
                className="flex items-center gap-1.5 p-2 rounded bg-white/10 hover:bg-white/20 transition-all text-left"
              >
                <span className="material-symbols-outlined text-sm text-blue-300">account_balance</span>
                <span className="font-bold text-ivory">BCP / BBVA</span>
              </button>
              <button
                onClick={onOpenPaymentModal}
                className="flex items-center gap-1.5 p-2 rounded bg-white/10 hover:bg-white/20 transition-all text-left"
              >
                <span className="material-symbols-outlined text-sm text-amber-300">payments</span>
                <span className="font-bold text-ivory">Efectivo</span>
              </button>
            </div>
            <button
              onClick={onOpenPaymentModal}
              className="text-xs text-gold underline hover:text-ivory transition-colors block pt-1"
            >
              Ver números de cuenta y CCI
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-linen/60 gap-3">
          <p>© {new Date().getFullYear()} Ghenale Cakes • Giovanna Pastelería. Sullana, Piura — Hecho con amor artesanal.</p>
          <div className="flex items-center gap-4 text-linen/80">
            <button onClick={() => onSelectTab('catalog')} className="hover:underline">Tortas</button>
            <span>•</span>
            <button onClick={() => onSelectTab('customizer')} className="hover:underline">Cotizador</button>
            <span>•</span>
            <button onClick={() => onSelectTab('contact')} className="hover:underline">Taller</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
