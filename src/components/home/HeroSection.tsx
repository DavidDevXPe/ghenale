import React from 'react';
import { ActiveTab } from '../../types';

interface HeroSectionProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative px-4 sm:px-6 pt-2 pb-6 max-w-7xl mx-auto">
      <div className="relative w-full rounded-2xl overflow-hidden bg-primary-container text-ivory shadow-xl border border-border-hairline">
        {/* Editorial Background Image with Luminosity blend */}
        <div
          className="bg-cover bg-center w-full h-[480px] sm:h-[540px] opacity-75 mix-blend-luminosity scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJQRvB8MdcUxrq9vicsCrYEBz7uNTLPsgX1FU6RkQLIrXGu6vOxRQOA7M2p-4Bod0jKWBrYPhBC03mdwV83HyKLO2FhbdG1aM6v6psq_qpS0vIhFrKnJTUYzbu1-MdD-3RIaQhq07OBomzNS9vczAPET2Qz_JZigIv2TywSpRomGs_jCfm24DmgOlexr7Xa1OtCWky_7JTaGmFMOumPlHK6HUCQxJXXc8-ttlNpA1VD11t-Tzi7A')`,
          }}
        />

        {/* Gradient Scrim & Content Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent flex flex-col justify-end p-6 sm:p-10">
          <div className="max-w-2xl">
            {/* Golden atelier pill */}
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-gold/40">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span className="font-sans text-[11px] font-bold text-gold tracking-[0.18em] uppercase">
                Ghenale Cakes • Giovanna Pastelería
              </span>
            </div>

            {/* Main title */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ivory font-normal leading-tight mb-2 tracking-tight">
              Arquitectura Dulce &amp; Sensorialidad
            </h1>

            {/* Brand Slogan */}
            <p className="font-script text-2xl sm:text-3xl text-gold mb-3 tracking-wide drop-shadow-sm">
              «El dulce sabor de tus momentos»
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-surface-highest/90 max-w-xl mb-6 leading-relaxed">
              Esculturas comestibles y tortas de diseño artesanal elaboradas con pasión de madre para bodas, cumpleaños y momentos inolvidables en Sullana y Piura.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('catalog')}
                className="h-12 px-7 bg-ivory text-primary hover:bg-gold-light flex items-center justify-center font-sans font-bold text-xs uppercase tracking-[0.1em] rounded-lg shadow-md active:scale-95 transition-all"
              >
                Descubrir Creaciones
              </button>
              <button
                type="button"
                onClick={() => onNavigate('customizer')}
                className="h-12 px-7 bg-secondary text-ivory hover:bg-secondary-rose flex items-center justify-center font-sans font-bold text-xs uppercase tracking-[0.1em] rounded-lg shadow-md active:scale-95 transition-all border border-secondary-soft/50"
              >
                Cotizar Torta a Medida
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
