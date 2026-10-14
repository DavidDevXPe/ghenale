import React, { useState, useEffect } from 'react';
import { ActiveTab, Product } from './types';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { BottomNav } from './components/layout/BottomNav';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/home/HeroSection';
import { UniversesSection } from './components/home/UniversesSection';
import { PhilosophySection } from './components/home/PhilosophySection';
import { FeaturedCakes } from './components/home/FeaturedCakes';
import { DeliveryGuarantee } from './components/home/DeliveryGuarantee';

import { CatalogView } from './components/catalog/CatalogView';
import { CustomCakeWizard } from './components/customizer/CustomCakeWizard';
import { BocaditosView } from './components/bocaditos/BocaditosView';
import { ContactWorkshopView } from './components/contact/ContactWorkshopView';
import { CartDrawerOrView } from './components/cart/CartDrawerOrView';

import { PaymentMethodsModal } from './components/common/PaymentMethodsModal';
import { ProductDetailModal } from './components/common/ProductDetailModal';
import { createWhatsAppUrl } from './data/business';

export const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-surface text-espresso selection:bg-secondary-fixed selection:text-primary">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenSearch={() => setActiveTab('catalog')}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-24 pb-8">
        {activeTab === 'home' && (
          <div className="space-y-4">
            <HeroSection onNavigate={(tab) => setActiveTab(tab)} />
            <UniversesSection onNavigate={(tab) => setActiveTab(tab)} />
            <PhilosophySection />
            <FeaturedCakes
              onNavigate={(tab) => setActiveTab(tab)}
              onSelectProduct={(p) => setSelectedProduct(p)}
            />
            <DeliveryGuarantee onNavigate={(tab) => setActiveTab(tab)} />
          </div>
        )}

        {activeTab === 'catalog' && (
          <CatalogView onSelectProduct={(p) => setSelectedProduct(p)} />
        )}

        {activeTab === 'customizer' && <CustomCakeWizard />}

        {activeTab === 'bocaditos' && <BocaditosView />}

        {activeTab === 'contact' && (
          <ContactWorkshopView onOpenPaymentModal={() => setIsPaymentModalOpen(true)} />
        )}

        {activeTab === 'cart' && (
          <CartDrawerOrView
            onNavigate={(tab) => setActiveTab(tab)}
            onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
          />
        )}
      </main>

      {/* Floating WhatsApp Action Pill for Desktop & Mobile */}
      <a
        href={createWhatsAppUrl(`Hola Giovanna! Estoy navegando en la web de Ghenale Cakes y deseo hacer una consulta.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-30 flex items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:bg-[#20ba5a] active:scale-95 transition-all"
        title="Consultar por WhatsApp a Giovanna"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
        <span className="font-bold text-xs uppercase tracking-wider hidden sm:inline">
          WhatsApp Sullana
        </span>
      </a>

      {/* Footer */}
      <Footer
        onSelectTab={(tab) => setActiveTab(tab)}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
      />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Mobile Drawer Off-Canvas */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectTab={(tab) => setActiveTab(tab)}
        onOpenPaymentModal={() => setIsPaymentModalOpen(true)}
      />

      {/* Payment Information Modal */}
      <PaymentMethodsModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
