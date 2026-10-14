import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { BUSINESS_INFO, createWhatsAppUrl } from '../../data/business';
import { ActiveTab } from '../../types';

interface CartDrawerOrViewProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenPaymentModal: () => void;
}

export const CartDrawerOrView: React.FC<CartDrawerOrViewProps> = ({
  onNavigate,
  onOpenPaymentModal,
}) => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    dispatchType,
    setDispatchType,
    selectedZone,
    setSelectedZone,
    shippingCost,
    total,
    giftNote,
    setGiftNote,
    deliveryDate,
    setDeliveryDate,
    timeSlot,
    setTimeSlot,
  } = useCart();

  const [isProcessing, setIsProcessing] = useState(false);

  // Generate the next 5 days for date strip
  const dateOptions = Array.from({ length: 5 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayName = i === 0 ? 'HOY' : d.toLocaleDateString('es-PE', { weekday: 'short' }).toUpperCase();
    const dayNumber = d.getDate();
    const monthName = d.toLocaleDateString('es-PE', { month: 'short' }).toUpperCase();
    return {
      id: `${dayNumber} ${monthName}`,
      label: dayName,
      number: dayNumber,
      month: monthName,
      fullText: `${dayName} ${dayNumber} ${monthName}`,
    };
  });

  const handleCheckoutViaWhatsApp = () => {
    setIsProcessing(true);

    const itemsSummary = items
      .map(
        (it) =>
          `• ${it.quantity}x ${it.product.name} (S/ ${(it.product.price * it.quantity).toFixed(2)})${
            it.customText ? `\n   - Placa/Dedicatoria: "${it.customText}"` : ''
          }${it.candleSelected ? '\n   - Vela dorada incluida' : ''}`
      )
      .join('\n');

    const zoneObj = BUSINESS_INFO.deliveryZones.find((z) => z.id === selectedZone);
    const dispatchDetails =
      dispatchType === 'delivery'
        ? `Envío Refrigerado a Domicilio (${zoneObj?.name || 'Sullana'}) - S/ ${shippingCost.toFixed(2)}`
        : `Recojo en Taller (TRV. Santa Cecilia, Sánchez Cerro, Sullana) - Gratis`;

    const message = `🛍️ *NUEVO PEDIDO - GHENALE CAKES ATELIER*
----------------------------------------
*PRODUCTOS SOLICITADOS:*
${itemsSummary}

----------------------------------------
*DESPACHO Y FECHA:*
🚚 *Modalidad:* ${dispatchDetails}
📅 *Fecha Solicitada:* ${deliveryDate}
⏰ *Franja Horaria:* ${timeSlot}
${giftNote ? `💌 *Tarjeta de Dedicatoria:* "${giftNote}"` : ''}

----------------------------------------
*RESUMEN DE CUENTA:*
Subtotal: S/ ${subtotal.toFixed(2)}
Envío: S/ ${shippingCost.toFixed(2)}
*TOTAL A PAGAR:* S/ ${total.toFixed(2)}
----------------------------------------
Hola Giovanna! Deseo coordinar el pago del 50% por Yape / Plin / Transferencia para confirmar este pedido.`;

    setTimeout(() => {
      setIsProcessing(false);
      window.open(createWhatsAppUrl(message), '_blank');
    }, 800);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-4">
        <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center text-espresso/40 mx-auto">
          <span className="material-symbols-outlined text-4xl">shopping_bag</span>
        </div>
        <h2 className="font-serif text-2xl font-bold text-espresso">Tu bolsa está vacía</h2>
        <p className="text-xs sm:text-sm text-espresso/70 max-w-sm mx-auto leading-relaxed">
          Descubre nuestras tortas de autor o bocaditos finos horneados con pasión en Sullana.
        </p>
        <button
          onClick={() => onNavigate('catalog')}
          className="px-6 py-3 rounded-xl bg-primary hover:bg-espresso text-ivory font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-md inline-flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-base">grid_view</span>
          <span>Explorar Catálogo</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-28 md:pb-12 space-y-6">
      {/* Stepper indicator */}
      <div className="flex items-center justify-between px-2 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary text-ivory text-xs font-bold flex items-center justify-center">
            1
          </span>
          <span className="text-xs font-bold text-espresso uppercase tracking-wider">
            Bolsa &amp; Despacho
          </span>
        </div>
        <div className="h-[1px] flex-1 mx-3 bg-border-hairline" />
        <div className="flex items-center gap-2 opacity-60">
          <span className="w-6 h-6 rounded-full bg-surface-container text-espresso/80 text-xs font-bold flex items-center justify-center">
            2
          </span>
          <span className="text-xs font-semibold text-espresso/70 uppercase tracking-wider">
            Pago Local (Yape/Plin)
          </span>
        </div>
      </div>

      {/* Cold Chain Delicacy Reminder Pill */}
      <div className="bg-surface-container-low rounded-xl p-3.5 flex items-center gap-3 shadow-sm border border-border-hairline">
        <div className="w-9 h-9 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary shrink-0">
          <span className="material-symbols-outlined text-[20px]">ac_unit</span>
        </div>
        <p className="text-xs text-espresso/80 leading-relaxed">
          Cadena de frío y transporte climatizado (4°C) garantizado para proteger la estructura de cada creación.
        </p>
      </div>

      {/* Items list */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-ivory rounded-2xl p-4 sm:p-5 shadow-atelier border border-border-hairline space-y-3"
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-linen">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-espresso leading-snug line-clamp-1">
                    {item.product.name}
                  </h3>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Eliminar artículo"
                    className="text-espresso/40 hover:text-red-600 active:scale-90 transition-transform p-1 -mr-1"
                    title="Eliminar de la bolsa"
                  >
                    <span className="material-symbols-outlined text-lg">delete_outline</span>
                  </button>
                </div>

                {item.product.portion && (
                  <p className="text-xs text-espresso/60">{item.product.portion}</p>
                )}

                <div className="flex items-baseline justify-between pt-1">
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-wider">
                    {item.product.tag || 'Creación Atelier'}
                  </span>
                  <span className="font-sans text-base sm:text-lg font-bold text-espresso">
                    S/ {(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Customization Details & Stepper */}
            <div className="bg-surface-container-low/70 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1 text-espresso/80">
                {item.customText && (
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-gold text-sm">draw</span>
                    <span className="font-bold">Placa de chocolate:</span>
                    <span className="italic font-medium">«{item.customText}»</span>
                  </div>
                )}
                {item.candleSelected && (
                  <div className="flex items-center gap-1.5 text-espresso/80">
                    <span className="material-symbols-outlined text-gold text-sm">celebration</span>
                    <span>1x Vela espiral dorada de cortesía</span>
                  </div>
                )}
              </div>

              {/* Quantity controller */}
              <div className="flex items-center gap-2 bg-ivory px-2.5 py-1 rounded-full border border-border-hairline self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface text-espresso active:scale-95"
                >
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="font-bold text-xs px-1 text-espresso">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-surface text-espresso active:scale-95"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dispatch Method Selector */}
      <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-espresso">Método de Despacho</h3>
          <span className="text-[11px] font-bold text-secondary bg-secondary-fixed/50 px-2.5 py-0.5 rounded-full">
            Sullana &amp; Alrededores
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Option: Home Delivery */}
          <button
            type="button"
            onClick={() => setDispatchType('delivery')}
            className={`rounded-xl p-4 flex flex-col items-start gap-1.5 text-left transition-all ${
              dispatchType === 'delivery'
                ? 'bg-secondary-fixed/40 ring-2 ring-primary border-transparent shadow-sm'
                : 'bg-surface-container-low hover:bg-surface-container border border-border-hairline'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="material-symbols-outlined text-secondary text-2xl">local_shipping</span>
              {dispatchType === 'delivery' && (
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              )}
            </div>
            <span className="text-xs sm:text-sm font-bold text-espresso">Envío Refrigerado</span>
            <span className="text-[11px] text-espresso/70">Móvil climatizado 4°C a domicilio</span>
          </button>

          {/* Option: Workshop Pickup */}
          <button
            type="button"
            onClick={() => setDispatchType('pickup')}
            className={`rounded-xl p-4 flex flex-col items-start gap-1.5 text-left transition-all ${
              dispatchType === 'pickup'
                ? 'bg-secondary-fixed/40 ring-2 ring-primary border-transparent shadow-sm'
                : 'bg-surface-container-low hover:bg-surface-container border border-border-hairline'
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="material-symbols-outlined text-secondary text-2xl">storefront</span>
              {dispatchType === 'pickup' && (
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              )}
            </div>
            <span className="text-xs sm:text-sm font-bold text-espresso">Retiro en Taller (Gratis)</span>
            <span className="text-[11px] text-espresso/70">TRV. Santa Cecilia, Sánchez Cerro</span>
          </button>
        </div>

        {/* Zone Selector conditional on Delivery */}
        {dispatchType === 'delivery' && (
          <div className="pt-2 space-y-1.5">
            <label className="text-xs font-bold text-espresso flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-base">location_on</span>
              Zona o distrito de entrega:
            </label>
            <select
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full bg-surface-container-low text-espresso text-xs sm:text-sm font-medium rounded-xl py-3 px-3.5 border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              {BUSINESS_INFO.deliveryZones.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  {zone.name} (S/ {zone.price.toFixed(2)})
                </option>
              ))}
            </select>
          </div>
        )}
      </section>

      {/* Delivery Date & Time Slot */}
      <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-xl">calendar_today</span>
            <h3 className="font-serif text-lg font-bold text-espresso">Programación de Entrega</h3>
          </div>
          <span className="text-[10px] uppercase font-bold text-espresso/60">Hora Perú (PET)</span>
        </div>

        {/* Horizontal Day Strip */}
        <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
          {dateOptions.map((d) => {
            const isSelected = deliveryDate === d.id || deliveryDate === d.fullText;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setDeliveryDate(d.fullText)}
                className={`shrink-0 w-16 py-2.5 rounded-xl text-center flex flex-col items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-primary text-ivory shadow-sm ring-2 ring-gold/40'
                    : 'bg-surface-container-low hover:bg-surface-container text-espresso'
                }`}
              >
                <span className={`text-[10px] font-bold ${isSelected ? 'text-secondary-soft' : 'text-espresso/60'}`}>
                  {d.label}
                </span>
                <span className="font-serif text-lg font-bold leading-tight my-0.5">
                  {d.number}
                </span>
                <span className={`text-[9px] font-bold ${isSelected ? 'text-secondary-soft' : 'text-espresso/60'}`}>
                  {d.month}
                </span>
              </button>
            );
          })}
        </div>

        {/* Franjas Horarias */}
        <div className="space-y-2 pt-1">
          <span className="text-xs font-bold text-espresso block">Franja Horaria Preferida</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              { slot: '09:00 - 13:00', title: 'Mañana', icon: 'wb_sunny' },
              { slot: '14:00 - 18:00', title: 'Tarde', icon: 'routine' },
              { slot: '18:00 - 20:00', title: 'Noche', icon: 'dark_mode' },
            ].map((s) => {
              const isSelected = timeSlot === s.slot;
              return (
                <button
                  key={s.slot}
                  type="button"
                  onClick={() => setTimeSlot(s.slot)}
                  className={`p-3 rounded-xl flex items-center justify-between text-left transition-all ${
                    isSelected
                      ? 'bg-primary text-ivory font-bold shadow-sm'
                      : 'bg-surface-container-low hover:bg-surface-container text-espresso border border-border-hairline'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold block">{s.title}</span>
                    <span className="text-[11px] opacity-75">{s.slot}</span>
                  </div>
                  <span className="material-symbols-outlined text-lg">{s.icon}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Handwritten Gift Note (Tarjeta de dedicatoria de regalo) */}
      <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-xl">history_edu</span>
            <h3 className="font-serif text-lg font-bold text-espresso">
              Tarjeta Caligráfica de Regalo
            </h3>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-gold-antique bg-gold/15 px-2.5 py-0.5 rounded-full">
            Cortesía
          </span>
        </div>
        <p className="text-xs text-espresso/70 leading-relaxed">
          Escrita a mano con tinta sepia sobre cartulina italiana con sello artesanal para acompañar tu torta.
        </p>
        <div className="space-y-1.5">
          <textarea
            value={giftNote}
            onChange={(e) => setGiftNote(e.target.value)}
            maxLength={140}
            rows={3}
            placeholder="Escribe tu dedicatoria especial aquí (ej: ¡Feliz cumpleaños abuelita! Te amamos con todo el corazón)..."
            className="w-full bg-surface-container-low rounded-xl p-3.5 text-espresso text-xs sm:text-sm font-medium border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />
          <div className="flex justify-between items-center text-[11px] text-espresso/60 px-1">
            <span>Opcional • Máximo 140 caracteres</span>
            <span>{giftNote.length} / 140</span>
          </div>
        </div>
      </section>

      {/* Resumen de Cuenta */}
      <section className="bg-surface-container-low rounded-2xl p-5 sm:p-6 space-y-3 shadow-sm border border-border-hairline">
        <h3 className="font-serif text-lg font-bold text-espresso">Resumen de Cuenta</h3>

        <div className="space-y-2 text-xs sm:text-sm text-espresso/80">
          <div className="flex justify-between">
            <span>Subtotal ({items.length} {items.length === 1 ? 'creación' : 'creaciones'})</span>
            <span className="font-bold text-espresso">S/ {subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1.5">
              <span>Envío Termocontrolado</span>
              <span className="material-symbols-outlined text-sm text-espresso/40">info</span>
            </div>
            <span className="font-bold text-espresso">
              {shippingCost === 0 ? 'Gratis (Retiro en Taller)' : `S/ ${shippingCost.toFixed(2)}`}
            </span>
          </div>

          <div className="flex justify-between text-secondary">
            <span>Empaque de Seda Atelier &amp; Vela</span>
            <span className="font-bold">Gratis</span>
          </div>
        </div>

        <div className="h-[1px] bg-border-hairline my-2" />

        <div className="flex justify-between items-baseline pt-1">
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold text-espresso block">
              Total Final
            </span>
            <span className="text-[10px] text-espresso/60 uppercase">Incluye comprobante</span>
          </div>
          <span className="font-sans text-2xl sm:text-3xl font-bold text-primary">
            S/ {total.toFixed(2)}
          </span>
        </div>
      </section>

      {/* Payment methods badges & Primary checkout button */}
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-4 text-xs text-espresso/70">
          <button
            onClick={onOpenPaymentModal}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <span className="w-4 h-4 rounded-full bg-[#742384] text-white flex items-center justify-center text-[9px] font-bold">Y</span>
            <span>Yape</span>
          </button>
          <span>•</span>
          <button
            onClick={onOpenPaymentModal}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <span className="w-4 h-4 rounded-full bg-[#00D4B2] text-black flex items-center justify-center text-[9px] font-bold">P</span>
            <span>Plin</span>
          </button>
          <span>•</span>
          <button
            onClick={onOpenPaymentModal}
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm text-blue-700">account_balance</span>
            <span>BCP / BBVA</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleCheckoutViaWhatsApp}
          disabled={isProcessing}
          className="w-full bg-primary hover:bg-espresso text-ivory py-4 px-6 rounded-xl font-sans font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-between shadow-lg active:scale-[0.99] transition-all"
        >
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-emerald-400">
              {isProcessing ? 'progress_activity' : 'lock'}
            </span>
            <span>{isProcessing ? 'Preparando Pedido...' : 'Continuar al Pedido por WhatsApp'}</span>
          </span>
          <span className="font-sans text-base font-bold text-gold">
            S/ {total.toFixed(2)}
          </span>
        </button>

        <p className="text-[11px] text-center text-espresso/60">
          Al pulsar el botón se abrirá WhatsApp con el resumen de tu bolsa para confirmar la fecha y enviarte el número de Yape o cuenta.
        </p>
      </div>
    </div>
  );
};
