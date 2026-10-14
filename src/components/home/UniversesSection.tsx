import React from 'react';
import { ActiveTab } from '../../types';

interface UniversesSectionProps {
  onNavigate: (tab: ActiveTab) => void;
}

const UNIVERSES = [
  {
    id: "celebracion",
    title: "Tortas de Celebración",
    tag: "Celebración",
    description: "Capas armoniosas y modelados especiales pensados para cumpleaños y aniversarios memorables.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwT5BN8B_NMAiaj9uiNEgpikzarz5H133nsKXqDfNnNbT_zMnZ6adckkxdJtE3xG0SkQr6phFSC6j2rg1lgWtT_pkhmPTBLqEuSFafO3Y4qMO_eTwzAHyy9ePdBkRg8JmcsouKSEQePVRHtAz1bEEX5MdvLHiH2Q0JvNYVm7LIScM1JNljFzKFPDQnrWq3AZ_3vnSY6ILCTp0BjFK6OcvfR6GdWrpJ6gz-nF_h8P4A5xn7WGYfjw",
    targetTab: "catalog" as ActiveTab
  },
  {
    id: "bocaditos",
    title: "Bocaditos Finos de Cóctel",
    tag: "Cóctel & Fiestas",
    description: "Petit fours, alfajorcitos de maicena y bocadillos salados horneados el mismo día para recepciones elegantes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEALe_q-W7YCdHUrZFA5ZtZto8OVZkTQtT9d0PJN7VE-jTzN3HJ6UvCiuvvidSLE39Gc8Bjz-GR-LFdjG2yqnv8AjroBH9uMS_EJozfZdcdyhcz-1J0pwQ-nqZVmYV4udYKYdrp4FHStlCrLquoftUqi8r7XAS2Qm3Gpjl7ngqZy7h_VxI19M2hyIu5SnhM8DzxxpS9ROIDroZxq50FPV4N_hV7EVW8dKZfTg_Xo-Xk5VjVyHoXg",
    targetTab: "bocaditos" as ActiveTab
  },
  {
    id: "nupcial",
    title: "Tortas para Bodas & 15 Años",
    tag: "Nupcial de Gala",
    description: "Piezas monumentales de varios pisos diseñadas en perfecta consonancia con la paleta de tu boda.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkkjGV94d_4_FvuwV_g19dfpPIavONp-QhWM2oztgYFJPuJTn242F-ZGaYJHGbTKtXx-Mqvz6HHXBGjJRWDDKYjVCyHoj8kMTr4s-uGbF8MeOAv_NwYWRWX11rpOqLggm3k9sEo04Svd25-r0b6lbkS8m-jA5a-8pGJVZmS5Clfvq0UJC21vj5BS0RdbOpluBpfP9fBqogzmWkV4s71212KuKNu7W9NHBzKYUsy_NnHQ-vAE1Zqg",
    targetTab: "customizer" as ActiveTab
  },
  {
    id: "postres",
    title: "Postres & Keke Tradicional",
    tag: "Recetas Familiares",
    description: "Tres leches piurana, keke inglés de frutos secos y delicias hogareñas con el toque de Doña Giovanna.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOgG2fi6MPV6QXTK0UsLdBXIMjp1-aGNbvz33lK-AuWLUm0ZvOfkRkEqZB8TTmEaE-PjoJTyWATYXlXYRFyk5-x-saX7M5hi9qlEO8pjZXeiX2bwQKY3mT_QYUAuLB-PwA491xDWT6Fi9bSSpmErBou6fpH-7B6wdwQP9NaX_yo_Db2idiHG2qRcV0-1aq2ULLGaNrh6ORmeFU8X09lfo6Px2MoiSXOewt_VU_m9tMEo9daNYolg",
    targetTab: "catalog" as ActiveTab
  }
];

export const UniversesSection: React.FC<UniversesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-6 max-w-7xl mx-auto">
      <div className="px-4 sm:px-6 flex items-end justify-between mb-4">
        <div>
          <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.16em] block">
            Exploración Temática
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-espresso font-bold">
            Universos Dulces
          </h2>
        </div>
        <div className="flex items-center gap-1 text-espresso/60 text-xs font-semibold uppercase tracking-wider">
          <span>Deslizar</span>
          <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
        </div>
      </div>

      {/* Horizontal Swipeable Track */}
      <div className="flex overflow-x-auto gap-4 px-4 sm:px-6 pb-4 no-scrollbar scroll-smooth snap-x">
        {UNIVERSES.map((universe) => (
          <button
            key={universe.id}
            type="button"
            onClick={() => onNavigate(universe.targetTab)}
            className="snap-start shrink-0 w-72 sm:w-80 bg-surface-low hover:bg-surface-container rounded-2xl p-4 shadow-sm group text-left border border-border-hairline transition-all duration-300 hover:shadow-atelier-lift hover:-translate-y-1"
          >
            <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3 bg-linen">
              <img
                src={universe.image}
                alt={universe.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <span className="absolute top-2.5 left-2.5 bg-espresso/85 backdrop-blur-sm text-ivory text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                {universe.tag}
              </span>
            </div>
            <h3 className="font-serif text-lg text-primary font-bold mb-1 group-hover:text-secondary transition-colors">
              {universe.title}
            </h3>
            <p className="text-xs text-espresso/70 leading-relaxed line-clamp-2">
              {universe.description}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
};
