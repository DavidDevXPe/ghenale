import React from 'react';

export const PhilosophySection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      <div className="bg-linen/80 rounded-2xl p-6 sm:p-10 border border-secondary-soft/30 shadow-atelier">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.18em]">
            Atelier &amp; Rigor Técnico
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-espresso mt-1 mb-3 font-bold">
            Nuestra Filosofía
          </h2>
          <p className="text-xs sm:text-sm text-espresso/75 leading-relaxed">
            Rechazamos las premezclas y la confitería industrial. Cada bocado reposa en la pureza de insumos nobles seleccionados en su máxima expresión aromática y horneados con paciencia artesanal en Sullana.
          </p>
        </div>

        {/* Ingredient Micro-Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Ingredient 1 */}
          <div className="flex items-start gap-4 bg-ivory/90 p-4 rounded-xl shadow-sm border border-border-hairline">
            <div className="w-11 h-11 rounded-full bg-primary text-secondary-soft flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[22px]">nutrition</span>
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-espresso mb-1">
                Cacao Nativo de Origen
              </h4>
              <p className="text-xs text-espresso/70 leading-relaxed">
                Granos de Chuncho cusqueño al 72% y Piura Blanco tostados a baja temperatura para notas florales y frutales sin acidez agresiva.
              </p>
            </div>
          </div>

          {/* Ingredient 2 */}
          <div className="flex items-start gap-4 bg-ivory/90 p-4 rounded-xl shadow-sm border border-border-hairline">
            <div className="w-11 h-11 rounded-full bg-primary text-gold flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[22px]">spa</span>
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-espresso mb-1">
                Vainilla Bourbon Curada
              </h4>
              <p className="text-xs text-espresso/70 leading-relaxed">
                Vainas enteras curadas al sol, maceradas en frío en cremas y bizcochuelos para infundir un aroma envolvente y notas de madera dulce.
              </p>
            </div>
          </div>

          {/* Ingredient 3 */}
          <div className="flex items-start gap-4 bg-ivory/90 p-4 rounded-xl shadow-sm border border-border-hairline">
            <div className="w-11 h-11 rounded-full bg-primary text-secondary-soft flex items-center justify-center shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[22px]">bakery_dining</span>
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-espresso mb-1">
                Mantequilla Pura & Manjar de Olla
              </h4>
              <p className="text-xs text-espresso/70 leading-relaxed">
                Materia grasa selecta al 84% para migas sedosas, combinada con manjar blanco preparado a fuego lento en pailas tradicionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
