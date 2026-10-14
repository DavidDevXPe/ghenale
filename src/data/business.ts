export const BUSINESS_INFO = {
  name: "Ghenale Cakes",
  subBrand: "Giovanna Pastelería",
  slogan: "El dulce sabor de tus momentos",
  founder: "Giovanna & Familia",
  phone: "997 404 726",
  phoneFormatted: "+51 997 404 726",
  address: "TRV. Santa Cecilia AA.HH Luis Miguel Sánchez Cerro Mz. A7 Lt. 04",
  city: "Sullana, Piura — Perú",
  reference: "Cerca a la Cancha Techada Sánchez Cerro",
  googleMapsUrl: "https://maps.google.com/?q=TRV.+Santa+Cecilia+AA.HH+Luis+Miguel+Sanchez+Cerro+Mz.+A7+Lt.+04+Sullana",
  schedule: {
    weekdays: "Lunes a Sábado: 8:00 AM – 7:30 PM",
    weekends: "Domingos (Entregas programadas): 9:00 AM – 2:00 PM",
    leadTime: "Tortas personalizadas con 48h de anticipación (72h para bodas)",
  },
  payments: {
    yape: {
      number: "997 404 726",
      titular: "Giovanna R.",
      note: "Sin comisión, directo desde tu app",
      color: "#742384"
    },
    plin: {
      number: "997 404 726",
      banks: "Interbank, BBVA, Scotiabank, BanBif",
      titular: "Giovanna R.",
      color: "#00D4B2"
    },
    bcp: {
      bank: "BCP Banco de Crédito",
      account: "475-98347192-0-84",
      cci: "002-475009834719208422",
      titular: "Giovanna R.",
      color: "#002A66"
    },
    bbva: {
      bank: "BBVA Perú",
      account: "0011-0284-0200847192",
      cci: "011-284-000200847192-18",
      titular: "Giovanna R.",
      color: "#004481"
    },
    cash: {
      type: "Efectivo",
      description: "Pago contraentrega disponible para recojo en taller"
    }
  },
  deliveryZones: [
    { id: "sullana-centro", name: "Sullana Centro / Cercado", price: 6.00 },
    { id: "sanchez-cerro", name: "Sánchez Cerro / Bellavista", price: 5.00 },
    { id: "santa-rosa", name: "Santa Rosa / Nueve de Octubre", price: 7.00 },
    { id: "marcavilca", name: "Marcavelica / Mallaritos", price: 12.00 },
    { id: "piura", name: "Envío Especial a Piura / Castilla (Refrigerado)", price: 20.00 }
  ]
};

export const createWhatsAppUrl = (text: string) => {
  return `https://wa.me/51997404726?text=${encodeURIComponent(text)}`;
};
