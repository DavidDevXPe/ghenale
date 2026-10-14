import React, { useState, useMemo } from 'react';
import { Product, CategoryType, PortionFilter } from '../../types';
import { CAKE_PRODUCTS } from '../../data/products';
import { createWhatsAppUrl } from '../../data/business';
import { useCart } from '../../context/CartContext';

interface CatalogViewProps {
  onSelectProduct: (product: Product) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ onSelectProduct }) => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedPortion, setSelectedPortion] = useState<PortionFilter>('all');
  const [addedItemMap, setAddedItemMap] = useState<{ [id: string]: boolean }>({});

  const filteredProducts = useMemo(() => {
    return CAKE_PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Portion filter
      if (selectedPortion !== 'all' && product.portionRange !== selectedPortion) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesIngredients = product.ingredients?.some((ing) => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesIngredients) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedPortion]);

  const handleAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-24 md:pb-12">
      {/* Brand Greeting Banner */}
      <div className="bg-surface-container-high rounded-2xl p-4 sm:p-5 mb-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm border border-border-hairline">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-2xl">favorite</span>
          </div>
          <div>
            <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
              Giovanna Pastelería · Sullana
            </span>
            <p className="text-sm font-semibold text-espresso">
              Tortas horneadas con amor de madre para endulzar tu fiesta
            </p>
          </div>
        </div>
        <div className="shrink-0 bg-primary text-ivory text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          Reservas con 48h de anticipación
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative w-full mb-4">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-espresso/50 text-xl pointer-events-none">
          search
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por torta, queque, sabor, insumo (ej: frambuesa, chantilly)..."
          className="w-full bg-ivory text-espresso placeholder:text-espresso/40 pl-12 pr-12 py-3.5 rounded-xl font-medium text-sm shadow-sm border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-espresso/40 hover:text-espresso"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        )}
      </div>

      {/* Category Chips Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-3 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
            selectedCategory === 'all'
              ? 'bg-primary text-ivory shadow-sm'
              : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
          }`}
        >
          Todas ({CAKE_PRODUCTS.length})
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('tematicas')}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
            selectedCategory === 'tematicas'
              ? 'bg-primary text-ivory shadow-sm'
              : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
          }`}
        >
          Tortas Temáticas
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('eventos')}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
            selectedCategory === 'eventos'
              ? 'bg-primary text-ivory shadow-sm'
              : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
          }`}
        >
          Matrimonio &amp; 15 Años
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('clasicas')}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
            selectedCategory === 'clasicas'
              ? 'bg-primary text-ivory shadow-sm'
              : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
          }`}
        >
          Clásicas Caseras
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('postres')}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all active:scale-95 ${
            selectedCategory === 'postres'
              ? 'bg-primary text-ivory shadow-sm'
              : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
          }`}
        >
          Postres &amp; Keke
        </button>
      </div>

      {/* Portion Filter Controls */}
      <div className="flex items-center justify-between gap-2 mb-6 bg-surface-container-low/70 px-4 py-2 rounded-xl border border-border-hairline">
        <div className="flex items-center gap-1.5 text-espresso/70 text-xs font-semibold">
          <span className="material-symbols-outlined text-base text-secondary">group</span>
          <span>Porciones:</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          {(['all', '15-20', '25-40', '50+'] as PortionFilter[]).map((p) => {
            const label = p === 'all' ? 'Todo' : p === '50+' ? '50+ pax' : `${p} pax`;
            const isSelected = selectedPortion === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => setSelectedPortion(p)}
                className={`px-3 py-1 rounded-full font-bold transition-all ${
                  isSelected
                    ? 'bg-secondary-fixed text-primary shadow-sm'
                    : 'text-espresso/60 hover:text-espresso'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Instagram / Custom Photo Banner */}
      <div className="w-full bg-ivory rounded-2xl p-4 sm:p-5 mb-6 shadow-sm border border-secondary-soft/30 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-2xl">cake</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="bg-gold-light text-primary font-sans text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Personalizado
              </span>
              <span className="text-[11px] font-bold text-secondary">Sullana, Bellavista y Piura</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-espresso font-bold">
              ¿Tienes un modelo o temática en mente?
            </p>
            <p className="text-xs text-espresso/70">
              Envíanos tu foto de Instagram o Pinterest y Doña Giovanna te lo cotiza en minutos.
            </p>
          </div>
        </div>
        <a
          href={createWhatsAppUrl("Hola Giovanna! Quiero enviar una foto de referencia de Instagram/Pinterest para cotizar una torta personalizada en Sullana")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto shrink-0 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-lg">add_photo_alternate</span>
          <span>Enviar Foto por WhatsApp</span>
        </a>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((cake) => {
            const isAdded = !!addedItemMap[cake.id];
            const waQuoteUrl = createWhatsAppUrl(
              `Hola Giovanna! Deseo cotizar la ${cake.name} (S/ ${cake.price}) para un evento en Sullana.`
            );

            return (
              <article
                key={cake.id}
                onClick={() => onSelectProduct(cake)}
                className="bg-ivory rounded-2xl overflow-hidden shadow-atelier hover:shadow-atelier-lift border border-border-hairline transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Image & tags */}
                  <div className="relative w-full h-56 bg-surface-container overflow-hidden">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-3 left-3 bg-espresso/90 backdrop-blur-sm text-ivory text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                      {cake.tag}
                    </span>
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full flex items-center gap-1 text-xs font-bold text-espresso shadow-sm">
                      <span className="material-symbols-outlined text-amber-500 text-xs">star</span>
                      <span>{cake.rating.toFixed(1)}</span>
                      <span className="text-[10px] text-espresso/60 font-normal">({cake.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                        {cake.portion}
                      </span>
                      {cake.diameter && (
                        <>
                          <span className="text-espresso/30">•</span>
                          <span className="text-[11px] text-espresso/60">{cake.diameter}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-espresso group-hover:text-secondary transition-colors mb-2 leading-snug">
                      {cake.name}
                    </h3>
                    <p className="text-xs text-espresso/70 leading-relaxed line-clamp-3 mb-3">
                      {cake.description}
                    </p>

                    {cake.ingredients && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {cake.ingredients.slice(0, 3).map((ing, i) => (
                          <span key={i} className="text-[10px] bg-linen px-2 py-0.5 rounded-md text-espresso/70 font-medium">
                            {ing}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Price and actions */}
                <div className="p-4 sm:p-5 pt-0 border-t border-border-hairline/60 mt-2 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-espresso/60 uppercase block font-semibold leading-none">Inversión</span>
                    <p className="font-sans text-xl font-bold text-espresso">
                      S/ {cake.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={waQuoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="h-10 px-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 flex items-center justify-center text-xs font-bold transition-all active:scale-95"
                      title="Cotizar por WhatsApp"
                    >
                      <span className="material-symbols-outlined text-base">chat</span>
                    </a>
                    <button
                      type="button"
                      onClick={(e) => handleAdd(cake, e)}
                      className={`h-10 px-4 rounded-lg font-sans font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-sm flex items-center gap-1.5 ${
                        isAdded
                          ? 'bg-secondary text-ivory'
                          : 'bg-primary hover:bg-espresso text-ivory'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">
                        {isAdded ? 'check' : 'add_shopping_cart'}
                      </span>
                      <span>{isAdded ? 'Añadido' : 'Pedir'}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty results state */
        <div className="flex flex-col items-center justify-center p-12 text-center bg-ivory rounded-2xl border border-border-hairline shadow-sm max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-primary mb-3">
            <span className="material-symbols-outlined text-3xl">soup_kitchen</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-espresso mb-1">
            ¿Buscabas un sabor o diseño especial?
          </h3>
          <p className="text-xs text-espresso/70 mb-5 leading-relaxed">
            Si no ves el postre o la combinación exacta en la lista, Giovanna te lo prepara especialmente para tu celebración en Sullana.
          </p>
          <a
            href={createWhatsAppUrl(`Hola Giovanna! Busco un postre o torta especial: "${searchQuery}" que no encontré en el catálogo.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Consultar disponibilidad por WhatsApp</span>
          </a>
        </div>
      )}
    </div>
  );
};
