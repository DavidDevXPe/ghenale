import React from 'react';
import { ActiveTab } from '../../types';
import { useCart } from '../../context/CartContext';

interface BottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const { itemsCount, total, setIsCartOpen } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-surface/95 backdrop-blur-xl border-t border-border-hairline shadow-[0_-4px_24px_rgba(43,26,21,0.06)] md:hidden">
      <div className="flex items-center justify-between px-2 h-16 max-w-md mx-auto">
        {/* 1. Atelier / Home */}
        <button
          type="button"
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center justify-center flex-1 h-14 transition-colors ${
            activeTab === 'home' ? 'text-secondary font-bold' : 'text-espresso/60 hover:text-espresso'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Atelier</span>
        </button>

        {/* 2. Catálogo */}
        <button
          type="button"
          onClick={() => setActiveTab('catalog')}
          className={`flex flex-col items-center justify-center flex-1 h-14 transition-colors ${
            activeTab === 'catalog' ? 'text-secondary font-bold' : 'text-espresso/60 hover:text-espresso'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">grid_view</span>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Catálogo</span>
        </button>

        {/* 3. A Medida */}
        <button
          type="button"
          onClick={() => setActiveTab('customizer')}
          className={`flex flex-col items-center justify-center flex-1 h-14 transition-colors ${
            activeTab === 'customizer' ? 'text-secondary font-bold' : 'text-espresso/60 hover:text-espresso'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">A Medida</span>
        </button>

        {/* 4. Asesoría WhatsApp */}
        <a
          href={`https://wa.me/51997404726?text=Hola%20Giovanna!%20Deseo%20hacer%20una%20consulta%20directa%20desde%20la%20web`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center flex-1 h-14 text-espresso/60 hover:text-emerald-600 transition-colors"
        >
          <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
          <span className="text-[10px] tracking-tight mt-0.5 font-medium">Asesoría</span>
        </a>

        {/* 5. Bolsa con total y badge */}
        <button
          type="button"
          onClick={() => {
            setActiveTab('cart');
            setIsCartOpen(true);
          }}
          className={`flex flex-col items-center justify-center flex-1 h-14 transition-colors relative ${
            activeTab === 'cart' ? 'text-secondary font-bold' : 'text-espresso/60 hover:text-espresso'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {itemsCount > 0 && (
              <span className="absolute -top-1 -right-2.5 w-3.5 h-3.5 rounded-full bg-secondary text-ivory text-[9px] font-bold flex items-center justify-center leading-none">
                {itemsCount}
              </span>
            )}
          </div>
          <span className="text-[10px] text-espresso font-semibold mt-0.5 tracking-tight">
            S/ {total.toFixed(0)}
          </span>
        </button>
      </div>
    </nav>
  );
};
