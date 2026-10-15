'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import { products, getProductBySlug } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import type { ProductColor } from '@/lib/types';
import { useParams } from 'next/navigation';

// Dynamic import for the 3D viewer (no SSR)
const BeanBagViewer = dynamic(() => import('@/components/3d/BeanBagViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-2xl bg-surface flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-border border-t-primary rounded-full animate-spin" />
    </div>
  ),
});

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(
    product?.colors[0] ?? null
  );
  const [showViewer, setShowViewer] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-3xl font-medium text-foreground mb-3">
          Product not found
        </h1>
        <p className="text-muted-foreground mb-6">
          We couldn&apos;t find that bean bag. It might have been moved or discontinued.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedColor) {
      addItem(product, selectedColor);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image or 3D viewer */}
          <div>
            {/* Toggle buttons */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setShowViewer(false)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  !showViewer
                    ? 'bg-foreground text-background'
                    : 'bg-surface text-foreground hover:bg-border'
                }`}
              >
                Photo
              </button>
              <button
                onClick={() => setShowViewer(true)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  showViewer
                    ? 'bg-foreground text-background'
                    : 'bg-surface text-foreground hover:bg-border'
                }`}
              >
                3D View
              </button>
            </div>

            {showViewer ? (
              <BeanBagViewer
                style={product.style}
                color={selectedColor?.hex ?? product.colors[0].hex}
              />
            ) : (
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface">
                <Image
                  src={selectedColor?.image ?? product.images[0]}
                  alt={`${product.name} in ${selectedColor?.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground capitalize mb-1">
              {product.style === 'nest' ? 'The Nest Collection' : 'The Drop Collection'}
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-medium text-foreground">
              {product.name}
            </h1>
            {product.nameAr && (
              <p className="mt-1 text-lg text-muted-foreground font-display" dir="rtl">
                {product.nameAr}
              </p>
            )}

            <p className="mt-4 text-2xl font-display font-semibold text-foreground">
              {product.price} <span className="text-base font-body font-normal text-muted-foreground">{product.currency}</span>
            </p>

            <p className="mt-6 text-foreground/80 leading-relaxed">
              {product.description}
            </p>

            {/* Color selector */}
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-3">
                Color: {selectedColor?.name}
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor?.name === color.name
                        ? 'border-primary ring-2 ring-primary/30 scale-110'
                        : 'border-border hover:border-muted-foreground'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium transition-all ${
                addedToCart
                  ? 'bg-primary text-white'
                  : 'bg-foreground text-background hover:bg-foreground/90'
              }`}
            >
              {addedToCart ? (
                <>
                  <Check size={16} />
                  Added to bag
                </>
              ) : (
                <>
                  <ShoppingBag size={16} />
                  Add to bag
                </>
              )}
            </button>

            {/* Features */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-foreground mb-4">Features</h3>
              <ul className="space-y-2.5">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Dimensions</p>
                  <p className="font-medium text-foreground">{product.dimensions}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Weight</p>
                  <p className="font-medium text-foreground">{product.weight}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
