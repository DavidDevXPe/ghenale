import React from 'react';
import { BUSINESS_INFO } from '../../data/business';
import { ActiveTab } from '../../types';

interface DeliveryGuaranteeProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const DeliveryGuarantee: React.FC<DeliveryGuaranteeProps> = ({ onNavigate }) => {
  return (
    <section className="px-4 sm:px-6 pt-4 pb-12 max-w-7xl mx-auto">
      <div className="bg-primary text-ivory rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-secondary/30">
        {/* Subtle decorative glow */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start gap-4 max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-gold/40">
            <span className="material-symbols-outlined text-[18px] text-gold">ac_unit</span>
            <span className="text-[11px] font-bold text-gold uppercase tracking-[0.16em]">
              Garantía Termocontrolada Sullana
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-ivory font-bold leading-tight">
            Llegada Impecable a la Mesa de tu Fiesta
          </h3>

          <p className="text-xs sm:text-sm text-linen/85 leading-relaxed">
            Nuestras tortas no viajan en vehículos convencionales de mensajería rápida. Cada encargo es transportado en unidades aclimatadas con anclaje antivibración a <strong className="text-gold font-bold">4°C — 6°C constantes</strong>, garantizando que el diseño arquitectónico y las flores de azúcar lleguen impecables a tu evento en Sullana o Piura.
          </p>

          {/* Temperature & Coverage Indicator Widget */}
          <div className="w-full bg-black/30 rounded-xl p-4 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-secondary-soft">
                <span className="material-symbols-outlined text-[24px]">thermostat</span>
              </div>
              <div>
                <p className="text-[10px] text-linen/70 uppercase font-semibold">Temperatura en Tránsito</p>
                <p className="font-sans text-base font-bold text-gold">4°C — 6°C Rango Óptimo</p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] text-gold uppercase font-bold tracking-wider">Cobertura Programada</p>
              <p className="text-xs text-linen/80">Sullana, Bellavista, Marcavelica &amp; Piura</p>
            </div>
          </div>

          {/* Workshop highlight & CTA */}
          <div className="w-full pt-2">
            <div className="bg-black/20 rounded-xl p-4 mb-3 border border-border-hairline space-y-2">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-gold text-lg shrink-0 mt-0.5">location_on</span>
                <p className="text-xs text-linen/85">
                  <strong className="text-ivory font-medium">Atelier:</strong> {BUSINESS_INFO.address} ({BUSINESS_INFO.reference})
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-400 text-lg shrink-0">call</span>
                <p className="text-xs text-linen/85">
                  <strong className="text-ivory font-medium">WhatsApp / Teléfono:</strong> {BUSINESS_INFO.phoneFormatted}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 text-xs font-bold text-secondary-soft hover:text-gold uppercase tracking-wider transition-colors"
            >
              <span>Conoce nuestro taller y opciones de entrega</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
