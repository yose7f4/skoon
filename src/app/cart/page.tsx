'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-20 lg:py-32">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="text-muted-foreground" size={28} strokeWidth={1.5} />
          </div>
          <h1 className="font-display text-3xl font-medium text-foreground">
            Your bag is empty
          </h1>
          <p className="mt-3 text-muted-foreground">
            Looks like you haven&apos;t added any bean bags yet.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-all"
          >
            Browse the shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground">
            Your bag
          </h1>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            Continue shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor.name}`}
                className="flex gap-4 p-4 bg-card rounded-xl border border-border"
              >
                {/* Product image */}
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-surface">
                  <Image
                    src={item.selectedColor.image ?? item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-sm font-medium text-foreground truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Color: {item.selectedColor.name}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.selectedColor.name)}
                      className="p-1.5 text-muted-foreground hover:text-destructive transition-colors shrink-0"
                      aria-label={`Remove ${item.product.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 border border-border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedColor.name, item.quantity - 1)}
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium text-foreground w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedColor.name, item.quantity + 1)}
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <p className="text-sm font-medium text-foreground">
                      {item.product.price * item.quantity} {item.product.currency}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
              <h2 className="font-display text-lg font-medium text-foreground mb-4">
                Order summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items ({totalItems})</span>
                  <span className="text-foreground">{totalPrice} SAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">Calculated at checkout</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex justify-between">
                <span className="font-medium text-foreground">Total</span>
                <span className="font-display text-lg font-semibold text-foreground">{totalPrice} SAR</span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-all"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
