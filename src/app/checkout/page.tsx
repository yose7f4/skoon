'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { items, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-20 lg:py-32">
        <div className="max-w-lg mx-auto px-6 text-center">
          <h1 className="font-display text-3xl font-medium text-foreground mb-3">
            Nothing to check out
          </h1>
          <p className="text-muted-foreground mb-6">
            Add some bean bags to your bag first.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium"
          >
            Browse the shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/cart"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to bag
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-10">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Shipping info */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display text-lg font-medium text-foreground mb-5">
                Shipping information
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="postal" className="block text-sm font-medium text-foreground mb-1.5">
                      Postal code
                    </label>
                    <input
                      id="postal"
                      type="text"
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment stub */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-display text-lg font-medium text-foreground mb-5">
                Payment
              </h2>
              <div className="bg-surface rounded-lg p-6 text-center">
                <Lock className="mx-auto mb-3 text-muted-foreground" size={24} />
                <p className="text-sm text-muted-foreground">
                  Payment integration coming soon. This is a placeholder for Stripe, Moyasar, or your preferred payment gateway.
                </p>
              </div>
            </div>

            {/* Place order button */}
            <button
              onClick={() => alert('Payment integration placeholder — order would be submitted here.')}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-all"
            >
              <Lock size={14} />
              Place order — {totalPrice} SAR
            </button>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-28">
              <h2 className="font-display text-base font-medium text-foreground mb-4">
                In your bag ({totalItems})
              </h2>
              <ul className="space-y-3 mb-4">
                {items.map((item) => (
                  <li key={`${item.product.id}-${item.selectedColor.name}`} className="flex justify-between text-sm">
                    <span className="text-foreground/80 truncate max-w-[60%]">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="text-foreground font-medium">
                      {item.product.price * item.quantity} SAR
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-border flex justify-between">
                <span className="font-medium text-foreground">Total</span>
                <span className="font-display font-semibold text-foreground">{totalPrice} SAR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
