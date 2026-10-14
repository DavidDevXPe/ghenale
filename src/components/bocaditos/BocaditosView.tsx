import React, { useState } from 'react';
import { BOCADITO_PACKS, BOCADITOS_SINGLES } from '../../data/bocaditos';
import { useCart } from '../../context/CartContext';
import { createWhatsAppUrl } from '../../data/business';

export const BocaditosView: React.FC = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState<'packs' | 'dulces' | 'salados'>('packs');
  const [packQtyMap, setPackQtyMap] = useState<{ [id: string]: number }>({
    'pack-fiesta-infantil': 1,
    'pack-reunion-familiar': 1,
    'pack-gran-fiesta': 1,
  });
  const [addedMap, setAddedMap] = useState<{ [id: string]: boolean }>({});

  const handlePackQty = (id: string, delta: number) => {
    setPackQtyMap((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleAddPack = (pack: (typeof BOCADITO_PACKS)[0]) => {
    const qty = packQtyMap[pack.id] || 1;
    addToCart(
      {
        id: pack.id,
        name: pack.title,
        price: pack.price,
        portion: `${pack.units} unidades • ${pack.serves}`,
        image: pack.image,
        tag: pack.tag,
      },
      qty
    );
    setAddedMap((prev) => ({ ...prev, [pack.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [pack.id]: false }));
    }, 1800);
  };

  const handleAddSingle = (single: (typeof BOCADITOS_SINGLES)[0], isFullCiento: boolean) => {
    const price = isFullCiento ? single.priceCiento : single.priceMedioCiento;
    const unitsLabel = isFullCiento ? '1 Ciento (100 unid)' : 'Medio Ciento (50 unid)';
    const itemId = `${single.id}-${isFullCiento ? '100' : '50'}`;

    addToCart(
      {
        id: itemId,
        name: `${single.name} (${unitsLabel})`,
        price: price,
        portion: unitsLabel,
        image: single.image,
        tag: isFullCiento ? '100 unid' : '50 unid',
      },
      1
    );
    setAddedMap((prev) => ({ ...prev, [itemId]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [itemId]: false }));
    }, 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-24 md:pb-12 space-y-6">
      {/* Intro Header Card */}
      <div className="relative overflow-hidden bg-surface-container-high rounded-2xl p-5 sm:p-7 shadow-sm border border-border-hairline">
        <div className="relative z-10 flex flex-col gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-primary w-fit">
            <span className="material-symbols-outlined text-sm">bakery_dining</span>
            <span className="text-[11px] font-bold uppercase tracking-wider">
              El complemento perfecto para tu torta
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-primary font-bold tracking-tight">
            Bocaditos para tus Fiestas &amp; Reuniones
          </h2>
          <p className="text-xs sm:text-sm text-espresso/75 max-w-2xl leading-relaxed">
            Ideales para recepciones, cumpleaños infantiles, quinceañeros y matrimonios. Horneados el mismo día de tu evento en Sullana con ingredientes frescos de primera calidad.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-2">
            <div className="flex items-center gap-2.5 bg-ivory/80 rounded-xl p-3 shadow-sm border border-border-hairline">
              <span className="material-symbols-outlined text-secondary text-xl">oven_gen</span>
              <span className="text-xs font-semibold text-espresso">Horneado fresco el mismo día</span>
            </div>
            <div className="flex items-center gap-2.5 bg-ivory/80 rounded-xl p-3 shadow-sm border border-border-hairline">
              <span className="material-symbols-outlined text-secondary text-xl">verified</span>
              <span className="text-xs font-semibold text-espresso">Recetas tradicionales de Doña Giovanna</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
        <button
          type="button"
          onClick={() => setActiveTab('packs')}
          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm active:scale-95 ${
            activeTab === 'packs'
              ? 'bg-primary text-ivory'
              : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
          }`}
        >
          Bandejas Mixtas &amp; Packs
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('dulces')}
          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm active:scale-95 ${
            activeTab === 'dulces'
              ? 'bg-primary text-ivory'
              : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
          }`}
        >
          Bocaditos Dulces
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('salados')}
          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm active:scale-95 ${
            activeTab === 'salados'
              ? 'bg-primary text-ivory'
              : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
          }`}
        >
          Bocaditos Salados
        </button>
      </div>

      {/* SECTION: PACKS */}
      {activeTab === 'packs' && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-xl">stars</span>
              <h3 className="font-serif text-xl sm:text-2xl text-espresso font-bold">
                Packs Listos para Celebrar
              </h3>
            </div>
            <span className="text-[11px] font-bold text-secondary bg-secondary-fixed/60 px-3 py-1 rounded-full">
              Ahorro garantizado
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {BOCADITO_PACKS.map((pack) => {
              const qty = packQtyMap[pack.id] || 1;
              const isAdded = !!addedMap[pack.id];

              return (
                <div
                  key={pack.id}
                  className="bg-ivory rounded-2xl p-5 shadow-atelier hover:shadow-atelier-lift border border-border-hairline transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${pack.tagColor}`}>
                        {pack.tag}
                      </span>
                      <div className="text-right">
                        <span className="font-sans text-xl font-bold text-primary block leading-none">
                          S/ {pack.price.toFixed(2)}
                        </span>
                        <span className="text-[10px] text-espresso/60">{pack.units} unidades</span>
                      </div>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-espresso leading-snug">
                      {pack.title}
                    </h4>

                    <div className="h-36 w-full rounded-xl overflow-hidden relative bg-linen">
                      <img
                        src={pack.image}
                        alt={pack.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-[10px] bg-black/60 text-ivory font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {pack.serves}
                      </span>
                    </div>

                    <p className="text-xs text-espresso/70 leading-relaxed">
                      {pack.description}
                    </p>
                  </div>

                  {/* Quantity Stepper & Add Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-border-hairline/60 mt-4">
                    <div className="flex items-center gap-2 bg-surface-container-low px-2 py-1 rounded-full">
                      <button
                        type="button"
                        onClick={() => handlePackQty(pack.id, -1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-primary shadow-sm active:scale-95 transition-transform"
                      >
                        <span className="material-symbols-outlined text-base">remove</span>
                      </button>
                      <span className="font-bold text-xs px-1 text-espresso">{qty}</span>
                      <button
                        type="button"
                        onClick={() => handlePackQty(pack.id, 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-primary shadow-sm active:scale-95 transition-transform"
                      >
                        <span className="material-symbols-outlined text-base">add</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddPack(pack)}
                      className={`px-4 py-2 rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm active:scale-95 transition-all ${
                        isAdded
                          ? 'bg-secondary text-ivory'
                          : 'bg-primary hover:bg-espresso text-ivory'
                      }`}
                    >
                      <span className="material-symbols-outlined text-base">
                        {isAdded ? 'check' : 'add_shopping_cart'}
                      </span>
                      <span>{isAdded ? 'Añadido' : 'Pedir Pack'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* SECTION: SINGLES (DULCES / SALADOS) */}
      {(activeTab === 'dulces' || activeTab === 'salados') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl sm:text-2xl text-espresso font-bold">
              Catálogo de Bocaditos a la Carta ({activeTab === 'dulces' ? 'Dulces' : 'Salados'})
            </h3>
            <span className="text-xs text-espresso/60">Elige por Ciento o Medio Ciento</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {BOCADITOS_SINGLES.filter((item) => item.type === activeTab.slice(0, -1)).map((single) => {
              const fullId = `${single.id}-100`;
              const halfId = `${single.id}-50`;
              const isFullAdded = !!addedMap[fullId];
              const isHalfAdded = !!addedMap[halfId];

              return (
                <div
                  key={single.id}
                  className="bg-ivory rounded-2xl p-4 sm:p-5 shadow-atelier border border-border-hairline flex flex-col justify-between"
                >
                  <div className="flex gap-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-linen">
                      <img
                        src={single.image}
                        alt={single.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      {single.tag && (
                        <span className="text-[10px] bg-secondary-fixed text-primary px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mb-1 inline-block">
                          {single.tag}
                        </span>
                      )}
                      <h4 className="font-serif text-base font-bold text-espresso leading-snug">
                        {single.name}
                      </h4>
                      <p className="text-xs text-espresso/70 mt-1 leading-relaxed line-clamp-2">
                        {single.description}
                      </p>
                    </div>
                  </div>

                  {/* Dual buttons: 1/2 Ciento vs 1 Ciento */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border-hairline/60 mt-3">
                    <button
                      type="button"
                      onClick={() => handleAddSingle(single, false)}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center transition-all active:scale-95 ${
                        isHalfAdded
                          ? 'bg-secondary text-ivory border-secondary'
                          : 'bg-surface-container-low hover:bg-surface-container text-espresso border-border-hairline'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-semibold text-espresso/60">1/2 Ciento (50 u)</span>
                      <span className="text-sm font-bold">S/ {single.priceMedioCiento.toFixed(2)}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddSingle(single, true)}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center transition-all active:scale-95 ${
                        isFullAdded
                          ? 'bg-secondary text-ivory border-secondary'
                          : 'bg-primary hover:bg-espresso text-ivory border-primary'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-semibold text-ivory/80">1 Ciento (100 u)</span>
                      <span className="text-sm font-bold">S/ {single.priceCiento.toFixed(2)}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Direct WhatsApp custom quote */}
      <div className="bg-linen rounded-2xl p-5 border border-secondary-soft/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-serif text-lg font-bold text-espresso">
            ¿Requieres un pedido mixto especial para 100+ personas?
          </h4>
          <p className="text-xs text-espresso/75">
            Armamos bandejas personalizadas según el número de tus invitados y temática.
          </p>
        </div>
        <a
          href={createWhatsAppUrl("Hola Giovanna! Deseo cotizar una mesa de bocaditos dulces y salados para un evento en Sullana")}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-lg">chat</span>
          <span>Cotizar Mesa de Bocaditos</span>
        </a>
      </div>
    </div>
  );
};
