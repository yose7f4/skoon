'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Plus, Check, Star } from 'lucide-react';
import { products } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/types';

type FilterKey = 'all' | 'lounger' | 'teardrop' | 'ottoman' | 'cushion';

const FILTERS: { key: FilterKey; label: string; count: number }[] = [
  { key: 'all', label: 'All Silhouettes', count: 13 },
  { key: 'lounger', label: 'Loungers', count: 4 },
  { key: 'teardrop', label: 'Teardrop Sacks', count: 4 },
  { key: 'ottoman', label: 'Ottomans', count: 3 },
  { key: 'cushion', label: 'Floor Cushions', count: 2 },
];

export default function CollectionGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [addedSlug, setAddedSlug] = useState<string | null>(null);
  const { addItem } = useCart();

  const consumerProducts = products.filter((p) => p.category === 'consumer');

  const filtered =
    activeFilter === 'all'
      ? consumerProducts
      : consumerProducts.filter((p) => p.style === activeFilter);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addItem(product, product.colors[0], 1);
    setAddedSlug(product.slug);
    setTimeout(() => setAddedSlug(null), 1800);
  };

  return (
    <section className="w-full py-20 bg-background border-b border-border/50 relative" id="collection">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-border/60">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>COLLECTION 2026 // MONDRAGON ARCHITECTURAL CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-on-surface">
              The Seating Sanctuary.
            </h2>
          </div>

          {/* Filter Pills with Counts */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-4 py-2 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 active:scale-95 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-on-surface text-surface border-on-surface font-semibold shadow-xs'
                      : 'bg-surface-container/70 border-border text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                  type="button"
                >
                  <span>{f.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-surface/20 text-surface' : 'bg-border/60 text-on-surface-variant'
                  }`}>
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid (4 Cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const isJustAdded = addedSlug === product.slug;
            return (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Image Container with Subtle Background */}
                <div className="relative aspect-square bg-surface-container overflow-hidden p-6 flex items-center justify-center">
                  
                  {/* Style Tag */}
                  <span className="absolute top-3.5 left-3.5 z-10 font-mono text-[10px] bg-surface/90 backdrop-blur px-2.5 py-1 rounded-full border border-border/50 uppercase tracking-wider text-on-surface font-semibold">
                    {product.style}
                  </span>

                  {/* Rating Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10 font-mono text-[10px] bg-surface/90 backdrop-blur px-2 py-1 rounded-full border border-border/50 flex items-center gap-1 text-on-surface">
                    <Star size={11} className="text-amber-500 fill-amber-500" />
                    <span>4.9</span>
                  </div>

                  {/* Product Image */}
                  <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.12)]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Quick Action Overlay on hover */}
                  <div className="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={`w-full py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-on-surface text-surface hover:bg-primary hover:text-white'
                      }`}
                      type="button"
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={14} /> Added to Cart
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> Quick Add to Bag
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col gap-3">
                  {/* Color Swatch Dots */}
                  <div className="flex items-center gap-1.5">
                    {product.colors.slice(0, 4).map((c, idx) => (
                      <span
                        key={idx}
                        className="w-3.5 h-3.5 rounded-full border border-white/80 shadow-xs"
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                    {product.colors.length > 4 && (
                      <span className="text-[10px] font-mono text-on-surface-variant">
                        +{product.colors.length - 4}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                      {product.name.split(' — ')[0]}
                    </h3>
                    <p className="text-xs text-on-surface-variant font-normal line-clamp-1 mt-0.5">
                      {product.name.split(' — ')[1] || product.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-2 border-t border-border/50 flex items-center justify-between font-mono text-xs">
                    <div>
                      <span className="text-on-surface font-bold text-sm">
                        {product.currency} {product.price}
                      </span>
                    </div>

                    <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Banner for B2B Custom Solutions */}
        <div className="mt-14 p-8 rounded-3xl bg-surface-container border border-border/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-wider text-secondary font-bold">
              COMMERCIAL &amp; HOSPITALITY ATELIER
            </span>
            <h3 className="text-2xl font-display font-medium text-on-surface">
              Outfitting a Cafe, Roastery or Boutique Hotel in Saudi Arabia?
            </h3>
            <p className="text-sm text-on-surface-variant font-normal">
              We provide bulk volume contracts, bespoke Pantone color dyeing, and precision Arabic embroidery for commercial venues.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/custom"
              className="px-6 py-3.5 rounded-xl bg-secondary text-white font-mono text-xs font-semibold hover:bg-accent-hover transition-all shadow-sm active:scale-95"
            >
              Request Hospitality Catalog
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
