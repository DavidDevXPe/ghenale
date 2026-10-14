import React, { useState } from 'react';
import { createWhatsAppUrl } from '../../data/business';

export const CustomCakeWizard: React.FC = () => {
  const [occasion, setOccasion] = useState('Cumpleaños Infantil');
  const [portionIndex, setPortionIndex] = useState(1); // default 25-35 personas
  const [dough, setDough] = useState('Keke de Vainilla con chispas de chocolate');
  const [filling, setFilling] = useState('Manjar blanco de olla casero (receta de Giovanna)');
  const [style, setStyle] = useState('Masa Elástica / Fondant modelado 3D');
  const [dedication, setDedication] = useState('');
  const [eventDate, setEventDate] = useState(() => {
    // Default to in 3 days
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [deliveryMode, setDeliveryMode] = useState<'recojo' | 'delivery'>('recojo');
  const [referencePhotoName, setReferencePhotoName] = useState<string>('');

  const PORTION_OPTIONS = [
    { label: '15 a 20 personas', detail: '1 piso compacto · Reunión íntima', price: 95 },
    { label: '25 a 35 personas', detail: '1 piso alto o 2 pisos pequeños', price: 130 },
    { label: '40 a 60 personas', detail: '2 pisos elegantes · Fiesta mediana', price: 185 },
    { label: '70 a 100+ personas', detail: '3 pisos monumentales de gala', price: 270 },
  ];

  const currentPortion = PORTION_OPTIONS[portionIndex];
  const deliveryExtra = deliveryMode === 'delivery' ? 6 : 0;
  const estimatedTotal = currentPortion.price + deliveryExtra;

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReferencePhotoName(e.target.files[0].name);
    }
  };

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `🎂 *SOLICITUD DE COTIZACIÓN - GHENALE CAKES*
----------------------------------------
✨ *Ocasión:* ${occasion}
👥 *Porciones / Tamaño:* ${currentPortion.label} (${currentPortion.detail})
🍰 *Keke / Masa:* ${dough}
🍯 *Relleno:* ${filling}
🎨 *Estilo y Cubierta:* ${style}
✍️ *Dedicatoria:* ${dedication || 'Sin dedicatoria'}
📅 *Fecha del Evento:* ${eventDate}
🚚 *Modalidad:* ${deliveryMode === 'recojo' ? 'Recojo en Taller (TRV. Santa Cecilia, Sullana)' : 'Envío Delivery en Sullana'}
📸 *Foto Referencial:* ${referencePhotoName ? `Adjuntaré la foto (${referencePhotoName}) por este chat` : 'Sin foto específica'}
💰 *Presupuesto base estimado:* S/ ${estimatedTotal.toFixed(2)}
----------------------------------------
Hola Doña Giovanna! Por favor confírmeme disponibilidad para esta fecha y los detalles de reserva.`;

    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-4 pb-24 md:pb-12">
      {/* Intro Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-surface-container-high p-5 sm:p-7 shadow-sm border border-border-hairline mb-6">
        <div className="relative z-10 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shadow-sm shrink-0">
            <span className="material-symbols-outlined text-2xl">cake</span>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-ivory text-secondary text-[11px] font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-xs text-gold">verified</span>
              <span>100% Hecho a Mano en Sullana</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight">
              Diseña Tu Torta Soñada con Doña Giovanna
            </h2>
            <p className="text-xs sm:text-sm text-espresso/75 mt-1.5 leading-relaxed">
              Elige cada detalle de tu pastel y calcula tu presupuesto base. Al finalizar, tu solicitud se enviará con un clic directamente a nuestro WhatsApp para coordinar fecha y abono de cupo.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSendQuote} className="space-y-6">
        {/* PASO 1: Ocasión */}
        <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-secondary-fixed text-primary font-bold text-xs flex items-center justify-center">
              1
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-espresso font-bold">
                ¿Para qué ocasión es tu celebración?
              </h3>
              <p className="text-xs text-espresso/60">Selecciona el tipo de evento</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {[
              { id: 'Cumpleaños Infantil', icon: 'celebration' },
              { id: 'Bautizo / Comunión', icon: 'church' },
              { id: 'Boda / Matrimonio', icon: 'favorite' },
              { id: 'Quinceañero', icon: 'crown' },
              { id: 'Aniversario / Adulto', icon: 'workspace_premium' },
              { id: 'Baby Shower', icon: 'child_care' }
            ].map((item) => {
              const isSelected = occasion === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setOccasion(item.id)}
                  className={`p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all ${
                    isSelected
                      ? 'bg-secondary-fixed text-primary font-bold shadow-sm ring-2 ring-primary/20'
                      : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl text-secondary mb-1">
                    {item.icon}
                  </span>
                  <span className="text-xs font-semibold">{item.id}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* PASO 2: Porciones y Pisos */}
        <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-secondary-fixed text-primary font-bold text-xs flex items-center justify-center">
              2
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-espresso font-bold">
                ¿Cuántas porciones necesitas?
              </h3>
              <p className="text-xs text-espresso/60">Calculamos la estructura y tamaño</p>
            </div>
          </div>

          <div className="space-y-2.5">
            {PORTION_OPTIONS.map((item, index) => {
              const isSelected = portionIndex === index;
              return (
                <div
                  key={item.label}
                  onClick={() => setPortionIndex(index)}
                  className={`flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-secondary-fixed/50 border border-secondary shadow-sm'
                      : 'bg-surface-container-low hover:bg-surface-container border border-border-hairline/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="portions"
                      checked={isSelected}
                      onChange={() => setPortionIndex(index)}
                      className="accent-primary w-4 h-4"
                    />
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-espresso block">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-espresso/65">{item.detail}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary bg-white px-2.5 py-1 rounded-full shadow-sm">
                    Desde S/ {item.price}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* PASO 3: Masa y Relleno */}
        <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-secondary-fixed text-primary font-bold text-xs flex items-center justify-center">
              3
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-espresso font-bold">
                Masa y relleno artesanal favorito
              </h3>
              <p className="text-xs text-espresso/60">100% hecho en casa con insumos nobles</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-espresso uppercase tracking-wider mb-1">
                Tipo de Keke / Masa:
              </label>
              <select
                value={dough}
                onChange={(e) => setDough(e.target.value)}
                className="w-full py-3 px-3.5 rounded-xl bg-surface-container-low text-espresso text-xs sm:text-sm font-medium border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value="Keke de Vainilla con chispas de chocolate">Keke de Vainilla con chispas de chocolate</option>
                <option value="Chocochips artesanal intenso">Chocochips artesanal intenso de puro cacao</option>
                <option value="Keke de Novia tradicional (pasas, nueces y pisco)">Keke de Novia tradicional (pasas, nueces y pisco piurano)</option>
                <option value="Red Velvet suave y aterciopelado">Red Velvet suave y aterciopelado</option>
                <option value="Naranja cítrica natural piurana">Naranja cítrica natural piurana</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-espresso uppercase tracking-wider mb-1">
                Relleno Artesanal:
              </label>
              <select
                value={filling}
                onChange={(e) => setFilling(e.target.value)}
                className="w-full py-3 px-3.5 rounded-xl bg-surface-container-low text-espresso text-xs sm:text-sm font-medium border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value="Manjar blanco de olla casero (receta de Giovanna)">Manjar blanco de olla casero (receta tradicional)</option>
                <option value="Fudge de chocolate oscuro a la leña">Fudge de chocolate oscuro casero</option>
                <option value="Crema pastelera de vainilla aromática">Crema pastelera de vainilla Bourbon</option>
                <option value="Mermelada artesanal de fresas norteñas">Mermelada artesanal de fresas norteñas</option>
              </select>
            </div>
          </div>
        </section>

        {/* PASO 4: Estilo y Cubierta */}
        <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-secondary-fixed text-primary font-bold text-xs flex items-center justify-center">
              4
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-espresso font-bold">
                Estilo decorativo y cubierta
              </h3>
              <p className="text-xs text-espresso/60">Elige el acabado estético que sueñas lucir</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'Masa Elástica / Fondant modelado 3D', name: 'Masa Elástica', sub: 'Fondant modelado 3D', icon: 'palette' },
              { id: 'Chantilly cremoso y ligero', name: 'Chantilly Fino', sub: 'Cremoso y ligero', icon: 'cloud' },
              { id: 'Buttercream suave y texturado', name: 'Buttercream', sub: 'Texturado moderno', icon: 'brush' },
              { id: 'Naked Cake rústico con flores naturales', name: 'Naked Cake', sub: 'Con flores naturales', icon: 'eco' },
            ].map((item) => {
              const isSelected = style === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setStyle(item.id)}
                  className={`p-3.5 rounded-xl text-left flex flex-col justify-between transition-all ${
                    isSelected
                      ? 'bg-secondary-fixed text-primary font-bold shadow-sm ring-2 ring-primary/20'
                      : 'bg-surface-container-low text-espresso/80 hover:bg-surface-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-secondary text-2xl mb-2">
                    {item.icon}
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm font-bold block">{item.name}</span>
                    <span className="text-[11px] opacity-75">{item.sub}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* PASO 5: Foto Referencial & Dedicatoria */}
        <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-secondary-fixed text-primary font-bold text-xs flex items-center justify-center">
              5
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-espresso font-bold">
                Foto de referencia y dedicatoria
              </h3>
              <p className="text-xs text-espresso/60">Detalles personalizados para el agasajado</p>
            </div>
          </div>

          <label className="flex flex-col items-center justify-center p-5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer border border-dashed border-espresso/20 text-center">
            <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-xl">add_photo_alternate</span>
            </div>
            <span className="text-xs font-bold text-primary">
              {referencePhotoName ? `Archivo listo: ${referencePhotoName}` : 'Subir imagen o diseño de referencia'}
            </span>
            <span className="text-[11px] text-espresso/60 mt-0.5">
              Captura de Pinterest, Instagram o dibujo (puedes adjuntarlo también al WhatsApp)
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />
          </label>

          <div>
            <label className="block text-xs font-bold text-espresso uppercase tracking-wider mb-1.5">
              Nombre o Dedicatoria para la placa comestible:
            </label>
            <input
              type="text"
              value={dedication}
              onChange={(e) => setDedication(e.target.value)}
              placeholder="Ej: Valentina · Mis Dulces 15 Años / Feliz Día Mamá"
              className="w-full py-3 px-3.5 rounded-xl bg-surface-container-low text-espresso text-xs sm:text-sm border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </section>

        {/* PASO 6: Fecha y Modalidad de Entrega */}
        <section className="bg-ivory rounded-2xl p-5 shadow-atelier border border-border-hairline space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-secondary-fixed text-primary font-bold text-xs flex items-center justify-center">
              6
            </span>
            <div>
              <h3 className="font-serif text-base sm:text-lg text-espresso font-bold">
                Fecha del evento y modalidad de entrega
              </h3>
              <p className="text-xs text-espresso/60">Sullana, Bellavista y Piura</p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-espresso uppercase tracking-wider mb-1.5">
              ¿Qué día será tu celebración?
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full py-3 px-3.5 rounded-xl bg-surface-container-low text-espresso text-xs sm:text-sm border border-border-hairline focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <label
              onClick={() => setDeliveryMode('recojo')}
              className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all ${
                deliveryMode === 'recojo'
                  ? 'bg-secondary-fixed/50 border border-secondary shadow-sm'
                  : 'bg-surface-container-low hover:bg-surface-container border border-border-hairline'
              }`}
            >
              <input
                type="radio"
                name="deliveryMode"
                checked={deliveryMode === 'recojo'}
                onChange={() => setDeliveryMode('recojo')}
                className="mt-1 accent-primary"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-espresso block">
                  Recojo en Taller (Gratis)
                </span>
                <span className="text-[11px] text-espresso/65 block">
                  TRV. Santa Cecilia AA.HH Sánchez Cerro, Sullana
                </span>
              </div>
            </label>

            <label
              onClick={() => setDeliveryMode('delivery')}
              className={`flex items-start gap-3 p-3.5 rounded-xl cursor-pointer transition-all ${
                deliveryMode === 'delivery'
                  ? 'bg-secondary-fixed/50 border border-secondary shadow-sm'
                  : 'bg-surface-container-low hover:bg-surface-container border border-border-hairline'
              }`}
            >
              <input
                type="radio"
                name="deliveryMode"
                checked={deliveryMode === 'delivery'}
                onChange={() => setDeliveryMode('delivery')}
                className="mt-1 accent-primary"
              />
              <div>
                <span className="text-xs sm:text-sm font-bold text-espresso block">
                  Envío Refrigerado (+S/ 6)
                </span>
                <span className="text-[11px] text-espresso/65 block">
                  A domicilio en Sullana o Bellavista climatizado a 4°C
                </span>
              </div>
            </label>
          </div>
        </section>

        {/* Total Summary & WhatsApp Action */}
        <div className="bg-primary text-ivory rounded-2xl p-5 sm:p-6 shadow-xl border border-secondary-soft/30 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold block">
                Presupuesto Base Estimado
              </span>
              <p className="font-serif text-3xl font-bold text-ivory">
                S/ {estimatedTotal.toFixed(2)}
              </p>
            </div>
            <div className="text-right text-xs text-linen/75">
              <span>{currentPortion.label}</span>
              <span className="block text-gold text-[11px]">{deliveryMode === 'delivery' ? 'Con envío incluido' : 'Recojo en taller'}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-xs uppercase tracking-[0.1em] flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            <span>Enviar Pedido a WhatsApp de Giovanna</span>
          </button>
          <p className="text-[11px] text-center text-linen/70">
            Al enviar, se abrirá WhatsApp con el resumen listo para confirmación de fecha y abono del 50%.
          </p>
        </div>
      </form>
    </div>
  );
};
