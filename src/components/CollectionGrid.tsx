'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';

type FilterKey = 'all' | 'teardrop' | 'lounger' | 'ottoman' | 'cushion';

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Shapes' },
  { key: 'lounger', label: 'Loungers' },
  { key: 'teardrop', label: 'Teardrop Sacks' },
  { key: 'ottoman', label: 'Ottomans & Cushions' },
];

const BADGE_STYLES: Record<string, string> = {
  teardrop: 'bg-inverse-surface text-inverse-on-surface',
  lounger: 'bg-primary text-on-primary',
  ottoman: 'bg-secondary text-on-secondary',
  cushion: 'bg-tertiary text-on-tertiary',
};

const SERIES_LABELS: Record<string, string> = {
  teardrop: 'Teardrop Collection',
  lounger: 'Lounger Collection',
  ottoman: 'Ottoman Collection',
  cushion: 'Cushion Collection',
};

export default function CollectionGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const consumerProducts = products.filter(p => p.category === 'consumer');

  const filtered = activeFilter === 'all'
    ? consumerProducts
    : activeFilter === 'ottoman'
      ? consumerProducts.filter(p => p.style === 'ottoman' || p.style === 'cushion')
      : consumerProducts.filter(p => p.style === activeFilter);

  return (
    <section className="w-full py-section bg-transparent" id="collection">
      <div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-baseline gap-space-xs">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">Quiet Moments at Home</span>
              <span className="font-headline-sm text-headline-sm text-secondary font-normal">| المختارات</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">The Core Seating Sanctuary</h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-space-md py-space-xs rounded-full font-label-md text-label-md whitespace-nowrap transition-all duration-300 active:scale-95 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="product-item card-hover-lift bg-card rounded-2xl overflow-hidden shadow-sm flex flex-col group border border-border/40"
            >
              <div className="relative bg-surface-container aspect-square overflow-hidden flex items-center justify-center p-space-md">
                <span className={`absolute top-4 left-4 z-10 font-label-sm text-label-sm px-space-sm py-1 rounded-full uppercase tracking-wider shadow-sm ${BADGE_STYLES[product.style] || BADGE_STYLES.teardrop}`}>
                  {SERIES_LABELS[product.style] || product.style}
                </span>
                <button
                  aria-label="Add to wishlist"
                  className="wishlist-btn absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-on-surface-variant flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110 active:scale-90"
                  type="button"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="material-symbols-outlined text-lg transition-colors">favorite</span>
                </button>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-x-4 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="bg-surface/95 backdrop-blur text-on-surface text-label-sm font-label-sm px-space-md py-2 rounded-xl shadow-md w-full flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-sm">visibility</span> Quick View
                  </span>
                </div>
              </div>
              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary font-medium capitalize">{product.style} Series</span>
                    <div className="flex items-center text-secondary text-xs">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-bold text-on-surface ml-0.5">4.9</span>
                      <span className="text-on-surface-variant ml-0.5">({Math.floor(Math.random() * 80) + 40})</span>
                    </div>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                    {product.name.split(' — ')[0]}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {product.name.split(' — ')[1]}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-muted-foreground">Price</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {product.currency} {product.price}
                    </span>
                  </div>
                  <span
                    className="group/btn bg-primary text-on-primary p-2.5 rounded-xl hover:bg-primary-container transition-all duration-300 shadow-sm"
                  >
                    <span className="material-symbols-outlined text-lg">keyboard_double_arrow_left</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
