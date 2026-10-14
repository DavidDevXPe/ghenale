export type CategoryType = 'all' | 'tematicas' | 'eventos' | 'clasicas' | 'postres';
export type PortionFilter = 'all' | '15-20' | '25-40' | '50+';

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  portion: string;
  portionRange: '15-20' | '25-40' | '50+';
  diameter?: string;
  category: CategoryType;
  tag: string;
  tagVariant?: 'primary' | 'secondary' | 'gold' | 'atelier';
  image: string;
  rating: number;
  reviewsCount: number;
  ingredients?: string[];
  isAtelierFirma?: boolean;
}

export interface BocaditoPack {
  id: string;
  title: string;
  tag: string;
  tagColor?: string;
  description: string;
  price: number;
  units: number;
  serves: string;
  image: string;
}

export interface BocaditoSingle {
  id: string;
  name: string;
  type: 'dulce' | 'salado';
  description: string;
  priceCiento: number;
  priceMedioCiento: number;
  image: string;
  tag?: string;
}

export interface CartItem {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    portion?: string;
    image: string;
    tag?: string;
  };
  quantity: number;
  customText?: string;
  candleSelected?: boolean;
}

export interface CakeQuoteData {
  occasion: string;
  portions: string;
  dough: string;
  filling: string;
  style: string;
  dedication: string;
  eventDate: string;
  deliveryMode: 'recojo' | 'delivery';
  estimatedPrice: number;
  referenceImageName?: string;
}

export type ActiveTab = 'home' | 'catalog' | 'customizer' | 'bocaditos' | 'contact' | 'cart';
