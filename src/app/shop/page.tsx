import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';

export default function ShopPage() {
  const consumerProducts = products.filter(p => p.category === 'consumer');

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Shop
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg">
            Every Sukoon bean bag is made with premium materials and designed for
            real comfort — not just the showroom kind.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {consumerProducts.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Color dots overlay */}
                <div className="absolute bottom-3 left-3 flex gap-1.5">
                  {product.colors.slice(0, 4).map((color) => (
                    <span
                      key={color.name}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-base font-medium text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground capitalize">
                    The {product.style} Collection
                  </p>
                </div>
                <p className="text-sm font-medium text-foreground whitespace-nowrap">
                  {product.price} {product.currency}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* B2B CTA */}
        <div className="mt-20 py-12 px-8 bg-surface rounded-2xl text-center">
          <p className="text-sm font-medium text-accent mb-2">Looking for bulk orders?</p>
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
            Custom branded bean bags for your business
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Add your logo, choose your colors, and preview your custom bean bag in 3D.
          </p>
          <Link
            href="/custom"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-medium transition-all"
          >
            Start a custom order
          </Link>
        </div>
      </div>
    </section>
  );
}
