import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  productId: string;
  variantId?: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

interface CartState {
  items: CartItem[];
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const isSameLine = (item: CartItem, productId: string, variantId?: string) =>
  item.productId === productId && item.variantId === variantId;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,

      setHasHydrated: (value) => set({ hasHydrated: value }),

      addToCart: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => isSameLine(i, item.productId, item.variantId));
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                isSameLine(i, item.productId, item.variantId)
                  ? { ...i, quantity: Math.min(i.quantity + item.quantity, item.stock) }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        });
      },

      removeFromCart: (productId, variantId) => {
        set((state) => ({
          items: state.items.filter((i) => !isSameLine(i, productId, variantId)),
        }));
      },

      updateQuantity: (productId, quantity, variantId) => {
        set((state) => ({
          items: state.items.map((i) =>
            isSameLine(i, productId, variantId)
              ? { ...i, quantity: Math.max(1, Math.min(quantity, i.stock)) }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'e-commerce-cart-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
