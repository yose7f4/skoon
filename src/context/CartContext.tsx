'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Product, ProductColor, CartItem } from '@/lib/types';

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, color: ProductColor, quantity?: number) => void;
  removeItem: (productId: number, colorName: string) => void;
  updateQuantity: (productId: number, colorName: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'sukoon-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch {
      // Silently fail if localStorage is unavailable
    }
    setIsHydrated(true);
  }, []);

  // Persist cart to localStorage on change
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch {
        // Silently fail
      }
    }
  }, [items, isHydrated]);

  const addItem = useCallback((product: Product, color: ProductColor, quantity = 1) => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.selectedColor.name === color.name
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }

      return [...prev, { product, selectedColor: color, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: number, colorName: string) => {
    setItems(prev =>
      prev.filter(
        item => !(item.product.id === productId && item.selectedColor.name === colorName)
      )
    );
  }, []);

  const updateQuantity = useCallback((productId: number, colorName: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, colorName);
      return;
    }

    setItems(prev =>
      prev.map(item =>
        item.product.id === productId && item.selectedColor.name === colorName
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
