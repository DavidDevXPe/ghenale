import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../data/business';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: { id: string; name: string; price: number; portion?: string; image: string; tag?: string }, quantity?: number, customText?: string, candleSelected?: boolean) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  itemsCount: number;
  subtotal: number;
  dispatchType: 'delivery' | 'pickup';
  setDispatchType: (type: 'delivery' | 'pickup') => void;
  selectedZone: string;
  setSelectedZone: (zoneId: string) => void;
  shippingCost: number;
  total: number;
  giftNote: string;
  setGiftNote: (note: string) => void;
  deliveryDate: string;
  setDeliveryDate: (date: string) => void;
  timeSlot: string;
  setTimeSlot: (slot: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'ghenale_pastry_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [
        // Default initial items as seen in Stitch prototype
        {
          id: 'item-demo-1',
          product: {
            id: 'selva-negra',
            name: 'Torta Selva Negra con Cerezas',
            price: 75.00,
            portion: '16 - 18 porciones',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVBj0YWfxypHRZCeDxXmhQPsfdjtBQWO97dhy--ZdGtnectkP8IURFysMIKI8I9-N_VJeLicr34b0LoNFFkzhSpLyMa7lCs8MghMX6D9XHju2_MafD7oPStBBOi7Q7BaJzgbH9w3N6EtxYwMK7-l-kgYSMVuLeuPxGG_-yWpzTOrg0rQo_Q1RuAopS1L6EMhgqAy0-WGjVKhybMCdXO2s8F5kBWQU1OJF7o0rNQ2rJ2g-HZsGfXQ',
            tag: 'Edición Atelier'
          },
          quantity: 1,
          customText: '¡Feliz Aniversario Mamá!',
          candleSelected: true
        },
        {
          id: 'item-demo-2',
          product: {
            id: 'pack-reunion-familiar',
            name: 'Pack Reunión Familiar (50 bocaditos)',
            price: 55.00,
            portion: '50 unidades',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEALe_q-W7YCdHUrZFA5ZtZto8OVZkTQtT9d0PJN7VE-jTzN3HJ6UvCiuvvidSLE39Gc8Bjz-GR-LFdjG2yqnv8AjroBH9uMS_EJozfZdcdyhcz-1J0pwQ-nqZVmYV4udYKYdrp4FHStlCrLquoftUqi8r7XAS2Qm3Gpjl7ngqZy7h_VxI19M2hyIu5SnhM8DzxxpS9ROIDroZxq50FPV4N_hV7EVW8dKZfTg_Xo-Xk5VjVyHoXg',
            tag: 'Caja de Bocaditos'
          },
          quantity: 1,
          candleSelected: false
        }
      ];
    } catch {
      return [];
    }
  });

  const [dispatchType, setDispatchType] = useState<'delivery' | 'pickup'>('delivery');
  const [selectedZone, setSelectedZone] = useState<string>('sullana-centro');
  const [giftNote, setGiftNote] = useState<string>('');
  const [deliveryDate, setDeliveryDate] = useState<string>('Mañana');
  const [timeSlot, setTimeSlot] = useState<string>('14:00 - 18:00');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore write errors
    }
  }, [items]);

  const addToCart = (
    product: { id: string; name: string; price: number; portion?: string; image: string; tag?: string },
    quantity = 1,
    customText?: string,
    candleSelected?: boolean
  ) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.customText === customText);
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `${product.id}-${Date.now()}`,
          product,
          quantity,
          customText,
          candleSelected
        }
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const currentZoneObj = BUSINESS_INFO.deliveryZones.find(z => z.id === selectedZone);
  const shippingCost = dispatchType === 'pickup' ? 0 : (currentZoneObj ? currentZoneObj.price : 6.00);
  const total = subtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        itemsCount,
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
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
