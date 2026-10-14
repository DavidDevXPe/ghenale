import React, { useState } from 'react';
import { Product, ActiveTab } from '../../types';
import { CAKE_PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface FeaturedCakesProps {
  onNavigate: (tab: ActiveTab) => void;
  onSelectProduct: (product: Product) => void;
}

export const FeaturedCakes: React.FC<FeaturedCakesProps> = ({ onNavigate, onSelectProduct }) => {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  // Take 4 iconic signature creations
  const featured = CAKE_PRODUCTS.slice(0, 4);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1800);
  };

  return (
    <section className="px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-6">
        <div>
          <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.16em] block">
            Selección de la Casa
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-bold">
            Creaciones Favoritas
          </h2>
        </div>
        <button
          onClick={() => onNavigate('catalog')}
          className="text-xs font-bold text-secondary hover:text-primary flex items-center gap-1 transition-colors uppercase tracking-wider"
        >
          <span>Ver Todas ({CAKE_PRODUCTS.length})</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </button>
      </div>

      {/* Grid: 2 columns on tablet/desktop, 1 or 2 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((cake) => {
          const isAdded = addedId === cake.id;

          return (
            <article
              key={cake.id}
              onClick={() => onSelectProduct(cake)}
              className="bg-ivory rounded-2xl overflow-hidden shadow-atelier hover:shadow-atelier-lift transition-all duration-300 flex flex-col justify-between border border-border-hairline cursor-pointer group"
            >
              <div>
                {/* Image container with tag badge */}
                <div className="relative w-full h-52 bg-surface-container overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-3 left-3 bg-espresso/90 backdrop-blur-sm text-ivory text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {cake.tag}
                  </span>
                  <div className="absolute bottom-2.5 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-bold text-espresso shadow-sm">
                    <span className="material-symbols-outlined text-amber-500 text-xs">star</span>
                    <span>{cake.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <p className="text-[10px] font-bold tracking-wider text-espresso/60 uppercase mb-1">
                    {cake.portion}
                  </p>
                  <h3 className="font-serif text-base font-bold text-espresso group-hover:text-secondary transition-colors line-clamp-1 mb-1.5">
                    {cake.name}
                  </h3>
                  <p className="text-xs text-espresso/70 line-clamp-2 leading-relaxed">
                    {cake.description}
                  </p>
                </div>
              </div>

              {/* Price & Action button */}
              <div className="p-4 pt-0 flex items-center justify-between border-t border-border-hairline/60 mt-2">
                <div>
                  <span className="text-[10px] text-espresso/60 uppercase block font-semibold leading-none">Precio</span>
                  <span className="font-sans text-lg font-bold text-espresso">
                    S/ {cake.price.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleQuickAdd(cake, e)}
                  className={`h-9 px-4 rounded-lg font-sans font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-sm flex items-center gap-1.5 ${
                    isAdded
                      ? 'bg-secondary text-ivory'
                      : 'bg-primary hover:bg-espresso text-ivory'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isAdded ? 'check' : 'add_shopping_cart'}
                  </span>
                  <span>{isAdded ? 'Añadido' : 'Pedir'}</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
