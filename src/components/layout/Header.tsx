import React from 'react';
import { ActiveTab } from '../../types';
import { useCart } from '../../context/CartContext';
import { BUSINESS_INFO } from '../../data/business';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDrawer: () => void;
  onOpenSearch?: () => void;
  onOpenPaymentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenDrawer,
  onOpenSearch,
  onOpenPaymentModal,
}) => {
  const { itemsCount, total, setIsCartOpen } = useCart();

  return (
    <header className="fixed top-0 w-full z-40 bg-surface/95 backdrop-blur-md border-b border-border-hairline shadow-sm">
      {/* Top micro-announcement banner */}
      <div className="bg-primary px-4 py-1.5 text-center overflow-hidden flex items-center justify-between text-[11px] font-medium tracking-wider text-secondary-soft">
        <div className="flex items-center gap-1.5 mx-auto truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          <span className="uppercase font-semibold">Taller Sullana & Piura • Pedidos con 48h de anticipación</span>
          <span className="hidden sm:inline-block">•</span>
          <a
            href={`https://wa.me/51997404726?text=Hola%20Giovanna,%20deseo%20consultar%20por%20una%20torta`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-gold hover:underline font-bold"
          >
            WhatsApp: {BUSINESS_INFO.phone}
          </a>
        </div>
        <button
          onClick={onOpenPaymentModal}
          className="hidden md:inline-flex items-center gap-1 text-xs text-white/90 hover:text-gold transition-colors font-semibold px-2 py-0.5 rounded bg-white/10"
        >
          <span className="material-symbols-outlined text-[14px]">account_balance_wallet</span>
          <span>Yape / Plin</span>
        </button>
      </div>

      {/* Main navigation shell */}
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger & Brand */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Abrir Menú"
            onClick={onOpenDrawer}
            className="w-10 h-10 -ml-1.5 flex items-center justify-center text-espresso rounded-full hover:bg-surface-container active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>

          {/* Logo + Brand name */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 text-left group"
          >
            {/* Elegant Cake Icon Emblem */}
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-gold shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-xl">cake</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold tracking-tight text-espresso leading-none">
                  Ghenale
                </span>
                <span className="font-script text-xl text-secondary leading-none hidden xs:inline">
                  Cakes
                </span>
              </div>
              <span className="text-[10px] tracking-[0.16em] uppercase font-bold text-secondary-rose leading-tight">
                Giovanna Pastelería · Sullana
              </span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-sm text-espresso/80">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'home'
                ? 'bg-primary text-ivory font-semibold shadow-sm'
                : 'hover:text-primary hover:bg-surface-container'
            }`}
          >
            Atelier Inicio
          </button>
          <button
            onClick={() => setActiveTab('catalog')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'catalog'
                ? 'bg-primary text-ivory font-semibold shadow-sm'
                : 'hover:text-primary hover:bg-surface-container'
            }`}
          >
            Catálogo de Tortas
          </button>
          <button
            onClick={() => setActiveTab('customizer')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'customizer'
                ? 'bg-primary text-ivory font-semibold shadow-sm'
                : 'hover:text-primary hover:bg-surface-container'
            }`}
          >
            A Medida (Cotizador)
          </button>
          <button
            onClick={() => setActiveTab('bocaditos')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'bocaditos'
                ? 'bg-primary text-ivory font-semibold shadow-sm'
                : 'hover:text-primary hover:bg-surface-container'
            }`}
          >
            Bocaditos & Packs
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3.5 py-1.5 rounded-full transition-all ${
              activeTab === 'contact'
                ? 'bg-primary text-ivory font-semibold shadow-sm'
                : 'hover:text-primary hover:bg-surface-container'
            }`}
          >
            Taller & Contacto
          </button>
        </nav>

        {/* Right Action Icons: Search, WhatsApp call, Cart */}
        <div className="flex items-center gap-1.5">
          {onOpenSearch && (
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Buscar postres"
              className="w-10 h-10 flex items-center justify-center text-espresso rounded-full hover:bg-surface-container active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
          )}

          {/* Quick WhatsApp call button */}
          <a
            href={`https://wa.me/51997404726?text=Hola%20Giovanna!%20Deseo%20hacer%20un%20pedido%20artesanal%20en%20Sullana`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 text-xs font-bold transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px] text-emerald-600">chat</span>
            <span>WhatsApp</span>
          </a>

          {/* Shopping Bag Button with Badge */}
          <button
            type="button"
            aria-label="Ver bolsa de compras"
            onClick={() => {
              setActiveTab('cart');
              setIsCartOpen(true);
            }}
            className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-surface-container-low hover:bg-surface-container border border-border-hairline active:scale-95 transition-all text-espresso"
          >
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              {itemsCount > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-secondary text-ivory text-[10px] font-bold flex items-center justify-center leading-none shadow-sm">
                  {itemsCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline font-semibold text-xs font-sans">
              S/ {total.toFixed(2)}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
