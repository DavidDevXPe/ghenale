import { ActiveTab } from '../../types';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenPaymentModal: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTab,
  onOpenPaymentModal,
}) => {
  const handleNavigate = (tab: ActiveTab) => {
    onSelectTab(tab);
    onClose();
  };

  return (
    <>
      {/* Scrim backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-primary/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Off-canvas sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-[84vw] max-w-[340px] bg-ivory shadow-modal transform transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top brand header */}
        <div className="p-5 flex items-center justify-between border-b border-border-hairline">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-gold shadow-sm">
              <span className="material-symbols-outlined text-lg">cake</span>
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-wider text-espresso block leading-none">
                GHENALE
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-antique">
                Haute Pâtisserie Atelier
              </span>
            </div>
          </div>
          <button
            type="button"
            aria-label="Cerrar Menú"
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full text-espresso/70 hover:bg-surface-container active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Workshop badge */}
        <div className="px-5 py-3 bg-linen/50 flex items-center gap-2 text-xs text-secondary-rose font-medium">
          <span className="material-symbols-outlined text-base">location_on</span>
          <span>Sullana, Piura • Taller Artesanal</span>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-1 text-sm font-medium text-espresso">
          <button
            onClick={() => handleNavigate('home')}
            className="w-full flex items-center justify-between py-3 text-left hover:text-secondary border-b border-border-hairline transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl text-gold-antique">home</span>
              Atelier Inicio
            </span>
            <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavigate('catalog')}
            className="w-full flex items-center justify-between py-3 text-left hover:text-secondary border-b border-border-hairline transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl text-gold-antique">grid_view</span>
              Catálogo de Tortas
            </span>
            <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavigate('customizer')}
            className="w-full flex items-center justify-between py-3 text-left hover:text-secondary border-b border-border-hairline transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl text-gold-antique">auto_awesome</span>
              Cotizador de Tortas a Medida
            </span>
            <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavigate('bocaditos')}
            className="w-full flex items-center justify-between py-3 text-left hover:text-secondary border-b border-border-hairline transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl text-gold-antique">bakery_dining</span>
              Bocaditos & Packs para Fiestas
            </span>
            <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
          </button>

          <button
            onClick={() => handleNavigate('contact')}
            className="w-full flex items-center justify-between py-3 text-left hover:text-secondary border-b border-border-hairline transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl text-gold-antique">storefront</span>
              Taller en Sullana & Contacto
            </span>
            <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenPaymentModal();
            }}
            className="w-full flex items-center justify-between py-3 text-left hover:text-secondary border-b border-border-hairline transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl text-gold-antique">payments</span>
              Formas de Pago (Yape / Plin / BCP)
            </span>
            <span className="material-symbols-outlined text-base opacity-40">chevron_right</span>
          </button>
        </nav>

        {/* Personalized consultation card at bottom */}
        <div className="p-4 mx-4 mb-4 rounded-xl bg-linen/70 border border-secondary-soft/30 space-y-2">
          <div className="flex items-center gap-1.5 text-secondary text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">support_agent</span>
            Atención Personalizada
          </div>
          <p className="text-xs text-espresso/80 leading-relaxed">
            Asesoría nupcial y tortas temáticas con anticipación mínima de 48h.
          </p>
          <a
            href={`https://wa.me/51997404726?text=Hola%20Giovanna!%20Deseo%20hacer%20una%20consulta%20especial%20para%20un%20evento`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95 text-center mt-1"
          >
            <span className="material-symbols-outlined text-base">chat</span>
            <span>Escribir al WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
};
