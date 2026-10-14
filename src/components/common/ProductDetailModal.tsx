import React, { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { createWhatsAppUrl } from '../../data/business';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [customText, setCustomText] = useState('');
  const [candleSelected, setCandleSelected] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, quantity, customText.trim() ? customText.trim() : undefined, candleSelected);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  const waQuoteUrl = createWhatsAppUrl(
    `Hola Giovanna! Deseo consultar detalles y disponibilidad de la ${product.name} (S/ ${product.price}).`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Scrim */}
      <div
        className="fixed inset-0 bg-primary/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-ivory rounded-3xl shadow-modal overflow-hidden border border-border-hairline flex flex-col max-h-[92vh]">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/60 flex items-center justify-center backdrop-blur-sm active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto">
          {/* Main Product Hero Image */}
          <div className="relative w-full h-64 sm:h-80 bg-surface-container overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex items-end p-5">
              <span className="bg-secondary text-ivory text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                {product.tag}
              </span>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                  {product.subtitle || 'Pastelería Artesanal en Sullana'}
                </span>
                <div className="flex items-center gap-1 bg-white px-2.5 py-0.5 rounded-full text-xs font-bold text-espresso shadow-sm">
                  <span className="material-symbols-outlined text-amber-500 text-xs">star</span>
                  <span>{product.rating.toFixed(1)}</span>
                  <span className="text-espresso/60 text-[10px]">({product.reviewsCount} reseñas)</span>
                </div>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso leading-snug">
                {product.name}
              </h2>

              <p className="font-sans text-2xl font-bold text-primary mt-2">
                S/ {product.price.toFixed(2)}
              </p>
            </div>

            {/* Portions & Dimensions Specs */}
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-surface-container-low border border-border-hairline text-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">group</span>
                <div>
                  <span className="text-[10px] text-espresso/60 uppercase block">Rendimiento</span>
                  <span className="font-bold text-espresso">{product.portion}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-xl">straighten</span>
                <div>
                  <span className="text-[10px] text-espresso/60 uppercase block">Dimensiones</span>
                  <span className="font-bold text-espresso">{product.diameter || 'Molde estándar'}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-espresso mb-1">
                Descripción Sensorial
              </h4>
              <p className="text-xs sm:text-sm text-espresso/75 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-espresso mb-2">
                  Insumos Selectos
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-linen text-espresso/80 text-xs font-medium border border-border-hairline"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Custom Plaque Text */}
            <div className="space-y-1.5 pt-2 border-t border-border-hairline">
              <label className="block text-xs font-bold text-espresso uppercase tracking-wider">
                Dedicatoria en Placa de Chocolate (Opcional):
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Ej: ¡Feliz Cumpleaños Papá! / Te queremos mucho"
                className="w-full py-2.5 px-3.5 rounded-xl bg-surface-container-low text-espresso text-xs sm:text-sm border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Golden candle toggle */}
            <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low cursor-pointer">
              <input
                type="checkbox"
                checked={candleSelected}
                onChange={(e) => setCandleSelected(e.target.checked)}
                className="accent-primary w-4 h-4 rounded"
              />
              <div className="flex items-center gap-2 text-xs text-espresso">
                <span className="material-symbols-outlined text-gold text-lg">celebration</span>
                <span className="font-semibold">Incluir vela espiral dorada de cortesía</span>
              </div>
            </label>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 bg-surface-container-low border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs font-bold text-espresso/70">Cantidad:</span>
            <div className="flex items-center gap-2 bg-ivory px-3 py-1 rounded-full border border-border-hairline">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-6 h-6 flex items-center justify-center text-espresso active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">remove</span>
              </button>
              <span className="font-bold text-xs px-2 text-espresso">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-6 h-6 flex items-center justify-center text-espresso active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">add</span>
              </button>
            </div>
            <span className="font-sans text-lg font-bold text-espresso sm:ml-2">
              S/ {(product.price * quantity).toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={waQuoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 flex items-center justify-center active:scale-95 transition-all"
              title="Preguntar por WhatsApp"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
            </a>

            <button
              type="button"
              onClick={handleAdd}
              disabled={isAdded}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all ${
                isAdded ? 'bg-secondary text-ivory' : 'bg-primary hover:bg-espresso text-ivory'
              }`}
            >
              <span className="material-symbols-outlined text-base">
                {isAdded ? 'check' : 'add_shopping_cart'}
              </span>
              <span>{isAdded ? 'Añadido a la Bolsa' : 'Añadir a la Bolsa'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
