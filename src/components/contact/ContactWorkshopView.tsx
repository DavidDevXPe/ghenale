import React, { useState } from 'react';
import { BUSINESS_INFO, createWhatsAppUrl } from '../../data/business';

interface ContactWorkshopViewProps {
  onOpenPaymentModal: () => void;
}

export const ContactWorkshopView: React.FC<ContactWorkshopViewProps> = ({ onOpenPaymentModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 pb-24 md:pb-12 space-y-6">
      {/* Warm Welcome Greeting Card */}
      <div className="relative overflow-hidden rounded-2xl bg-surface-container-high p-6 sm:p-8 shadow-sm border border-border-hairline">
        <div className="relative z-10 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-ivory shrink-0 shadow-md">
            <span className="material-symbols-outlined text-3xl">storefront</span>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-primary text-xs font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Taller Abierto en Sullana</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-primary font-bold tracking-tight">
              Visítanos en Nuestro Taller
            </h2>
            <p className="text-xs sm:text-sm text-espresso/75 mt-1.5 leading-relaxed">
              Horneamos cada día con el amor y la calidez de Giovanna Pastelería. Te recibimos en nuestro taller artesanal en Sullana para coordinar degustaciones o recoger tus creaciones favoritas.
            </p>
          </div>
        </div>
      </div>

      {/* Primary Contact & Fast Actions Card */}
      <div className="bg-ivory rounded-2xl p-5 sm:p-7 shadow-atelier border border-border-hairline space-y-4">
        <div className="flex items-center justify-between pb-1 border-b border-border-hairline">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-2xl">perm_phone_msg</span>
            <h3 className="font-serif text-lg font-bold text-espresso">Atención Inmediata</h3>
          </div>
          <span className="px-3 py-1 rounded-full bg-gold-light text-primary text-xs font-bold">
            Respuesta Rápida
          </span>
        </div>

        {/* Highlight phone container */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-border-hairline/60">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
              <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
            </div>
            <div>
              <span className="text-[10px] text-espresso/60 uppercase font-bold tracking-wider block">
                Línea Directa Doña Giovanna
              </span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-espresso tracking-normal">
                {BUSINESS_INFO.phoneFormatted}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyPhone}
            aria-label="Copiar número"
            className="p-2.5 rounded-full bg-secondary-fixed/70 text-primary hover:bg-secondary-fixed active:scale-90 transition-all"
            title="Copiar número"
          >
            <span className="material-symbols-outlined text-xl">
              {copied ? 'check' : 'content_copy'}
            </span>
          </button>
        </div>

        {/* Dual Actions: WhatsApp vs Call */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <a
            href={createWhatsAppUrl("Hola Giovanna! Deseo consultar por una torta o bocaditos artesanales en Sullana")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            <span>Escribir por WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary hover:bg-espresso text-ivory font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">call</span>
            <span>Llamar por Teléfono</span>
          </a>
        </div>
      </div>

      {/* Location & Map Card */}
      <div className="bg-ivory rounded-2xl p-5 sm:p-7 shadow-atelier border border-border-hairline space-y-4">
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-full bg-secondary-container flex items-center justify-center text-primary shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-2xl">location_on</span>
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-lg font-bold text-espresso">
              Taller Artesanal Sullana
            </h3>
            <p className="text-sm font-semibold text-espresso mt-1">
              {BUSINESS_INFO.address}
            </p>
            <span className="text-xs text-secondary font-bold block mt-0.5">
              {BUSINESS_INFO.city}
            </span>
            <span className="text-xs text-espresso/70 block mt-1">
              📍 <strong>Referencia:</strong> {BUSINESS_INFO.reference}
            </span>
          </div>
        </div>

        {/* Stylized visual map presentation with reference */}
        <div className="relative w-full h-52 sm:h-64 rounded-xl overflow-hidden shadow-inner group border border-border-hairline">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3kOj0rwDbEzfGTZw5gMhUJQbBUOq7geLCaFTy2Cth0rhrhqFIJZ-c3cZgcWCNYgGZtH6QGzIcKuQbrpyNP4WQi9JwZue2RjZlROa3jBroyQ4tifqyMp56N1iVh8rK2mQ636zrm53oPsEm5JlKVWXMcLs5pxvvmoc4A_GpLoSPuZ0GKASSnUAYgdgZsKHzI5PVBEk6mEqrx-U5O9xy4QjhvSo-6RlzcI1RNdvI-QJq4F3QBb6mwA')`,
            }}
          />
          {/* Overlay Tag */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-ivory/95 backdrop-blur-md shadow-md border border-border-hairline">
            <div className="flex items-center gap-2 text-xs font-bold text-espresso">
              <span className="material-symbols-outlined text-secondary text-lg">storefront</span>
              <span className="truncate">Sánchez Cerro • Recojo directo en taller</span>
            </div>
            <span className="text-[10px] bg-secondary-fixed text-primary px-2 py-0.5 rounded-full font-bold uppercase">
              Ubicación Exacta
            </span>
          </div>
        </div>

        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-espresso font-bold text-xs uppercase tracking-wider border border-border-hairline active:scale-95 transition-all text-center"
        >
          <span className="material-symbols-outlined text-lg text-primary">directions_car</span>
          <span>Abrir Ubicación en Google Maps / Waze</span>
        </a>
      </div>

      {/* Schedules */}
      <div className="bg-surface-container-low rounded-2xl p-5 sm:p-6 shadow-sm border border-border-hairline space-y-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-2xl">schedule</span>
          <h3 className="font-serif text-lg font-bold text-espresso">
            Horarios de Horno &amp; Entregas
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3.5 rounded-xl bg-ivory border border-border-hairline flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-gold text-xl">calendar_month</span>
              <span className="text-xs font-bold text-espresso">Lunes a Sábado</span>
            </div>
            <span className="text-xs font-bold text-primary">8:00 AM – 7:30 PM</span>
          </div>

          <div className="p-3.5 rounded-xl bg-ivory border border-border-hairline flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-gold text-xl">cake</span>
              <span className="text-xs font-bold text-espresso">Domingos (Entregas)</span>
            </div>
            <span className="text-xs font-bold text-primary">9:00 AM – 2:00 PM</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-espresso/70 pt-1">
          <span className="material-symbols-outlined text-base text-secondary">info</span>
          <span>Recomendamos reservar con 48h de anticipación (o 72h para tortas de matrimonio).</span>
        </div>
      </div>

      {/* How to Order 3-Step Flow */}
      <div className="bg-ivory rounded-2xl p-5 sm:p-7 shadow-atelier border border-border-hairline space-y-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-2xl">list_alt</span>
          <h3 className="font-serif text-lg font-bold text-espresso">¿Cómo hacer tu pedido?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-surface-container-low/70 border border-border-hairline flex flex-col justify-between">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed text-primary font-bold text-sm flex items-center justify-center mb-3">
              1
            </div>
            <div>
              <h4 className="text-sm font-bold text-espresso mb-1">Cuéntanos tu idea</h4>
              <p className="text-xs text-espresso/70 leading-relaxed">
                Envíanos tus fotos de referencia, porciones o la temática de tu evento por WhatsApp.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-low/70 border border-border-hairline flex flex-col justify-between">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed text-primary font-bold text-sm flex items-center justify-center mb-3">
              2
            </div>
            <div>
              <h4 className="text-sm font-bold text-espresso mb-1">Confirma con abono 50%</h4>
              <p className="text-xs text-espresso/70 leading-relaxed">
                Agendamos tu cupo en el horno con un anticipo fácil por Yape, Plin o transferencia bancaria.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-container-low/70 border border-border-hairline flex flex-col justify-between">
            <div className="w-8 h-8 rounded-full bg-primary text-ivory font-bold text-sm flex items-center justify-center mb-3">
              3
            </div>
            <div>
              <h4 className="text-sm font-bold text-espresso mb-1">Recojo en Taller o Delivery</h4>
              <p className="text-xs text-espresso/70 leading-relaxed">
                Pasa por nuestro taller en Sánchez Cerro o recíbelo fresco en la puerta de tu fiesta en Sullana.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Badges Grid */}
      <div className="bg-surface-container-low rounded-2xl p-5 sm:p-7 shadow-sm border border-border-hairline space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-2xl">payments</span>
            <h3 className="font-serif text-lg font-bold text-espresso">Formas de Pago Aceptadas</h3>
          </div>
          <span className="text-xs font-bold text-primary bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
            100% Seguro
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Yape */}
          <div
            onClick={onOpenPaymentModal}
            className="p-3 rounded-xl bg-ivory border border-border-hairline flex items-center gap-2.5 cursor-pointer hover:border-primary transition-all shadow-sm"
          >
            <div className="w-9 h-9 rounded-full bg-[#742384] text-white flex items-center justify-center font-bold text-xs shrink-0">
              Y
            </div>
            <div>
              <span className="text-xs font-bold text-espresso block leading-tight">Yape</span>
              <span className="text-[10px] text-espresso/60">Sin comisión</span>
            </div>
          </div>

          {/* Plin */}
          <div
            onClick={onOpenPaymentModal}
            className="p-3 rounded-xl bg-ivory border border-border-hairline flex items-center gap-2.5 cursor-pointer hover:border-primary transition-all shadow-sm"
          >
            <div className="w-9 h-9 rounded-full bg-[#00D4B2] text-black flex items-center justify-center font-bold text-xs shrink-0">
              P
            </div>
            <div>
              <span className="text-xs font-bold text-espresso block leading-tight">Plin</span>
              <span className="text-[10px] text-espresso/60">Cualquier banco</span>
            </div>
          </div>

          {/* BCP / BBVA */}
          <div
            onClick={onOpenPaymentModal}
            className="p-3 rounded-xl bg-ivory border border-border-hairline flex items-center gap-2.5 cursor-pointer hover:border-primary transition-all shadow-sm"
          >
            <div className="w-9 h-9 rounded-full bg-[#002A66] text-white flex items-center justify-center font-bold text-xs shrink-0">
              <span className="material-symbols-outlined text-base">account_balance</span>
            </div>
            <div>
              <span className="text-xs font-bold text-espresso block leading-tight">BCP / BBVA</span>
              <span className="text-[10px] text-espresso/60">Transferencia</span>
            </div>
          </div>

          {/* Cash on pickup */}
          <div
            onClick={onOpenPaymentModal}
            className="p-3 rounded-xl bg-ivory border border-border-hairline flex items-center gap-2.5 cursor-pointer hover:border-primary transition-all shadow-sm"
          >
            <div className="w-9 h-9 rounded-full bg-secondary-fixed text-primary flex items-center justify-center font-bold text-xs shrink-0">
              <span className="material-symbols-outlined text-base">payments</span>
            </div>
            <div>
              <span className="text-xs font-bold text-espresso block leading-tight">Efectivo</span>
              <span className="text-[10px] text-espresso/60">Contraentrega</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenPaymentModal}
          className="text-xs font-bold text-secondary hover:text-primary underline flex items-center gap-1"
        >
          <span>Consultar números de cuenta y datos de transferencia</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </button>
      </div>

      {/* Warm Personal Message from Giovanna */}
      <div className="relative overflow-hidden rounded-2xl bg-primary text-linen p-6 sm:p-8 text-center border border-secondary-soft/30 shadow-xl">
        <div className="w-12 h-12 mx-auto rounded-full bg-secondary-fixed text-primary flex items-center justify-center mb-3 shadow-inner">
          <span className="material-symbols-outlined text-2xl">volunteer_activism</span>
        </div>
        <p className="font-script text-2xl sm:text-3xl text-gold italic leading-relaxed mb-3">
          “Gracias por permitirnos ser parte de los momentos más dulces de tu familia en Sullana. Horneamos cada pedido como si fuera para nuestra propia mesa.”
        </p>
        <div>
          <span className="font-serif text-base font-bold text-ivory block">
            {BUSINESS_INFO.founder}
          </span>
          <span className="text-[11px] font-bold text-secondary-soft uppercase tracking-widest">
            {BUSINESS_INFO.name} · Pastelería Artesanal
          </span>
        </div>
      </div>
    </div>
  );
};
