'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight, Plus, Check } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/lib/products';

interface FilmstripSlide {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  slug: string;
  price: number;
  image: string;
  specs: {
    dimensions: string;
    weight: string;
    fabric: string;
    fill: string;
  };
  accentColor: string;
}

const SLIDES: FilmstripSlide[] = [
  {
    id: '1',
    index: '01',
    title: 'The Sanctuary Lounger',
    subtitle: 'Striped Cocoon & Deep Ergonomic Cradling',
    category: 'Flagship Lounger Series',
    slug: 'lounger-charcoal',
    price: 990,
    image: '/images/products/lounger charcoal.jpg',
    specs: {
      dimensions: '95cm ø × 70cm h',
      weight: '8.5 kg',
      fabric: '480 GSM Double Linen Weave',
      fill: 'High-Density Virgin Micro-beads',
    },
    accentColor: '#436252',
  },
  {
    id: '2',
    index: '02',
    title: 'The Sculpted Teardrop',
    subtitle: 'High-Back Lumbar Elevation & Clean Profile',
    category: 'Teardrop Collection',
    slug: 'teardrop-black',
    price: 890,
    image: '/images/products/teardrob black.jpg',
    specs: {
      dimensions: '85cm w × 110cm h',
      weight: '6.5 kg',
      fabric: 'Heavy Cotton Canvas (Washable)',
      fill: 'Anti-Compression Polystyrene',
    },
    accentColor: '#1A1A1A',
  },
  {
    id: '3',
    index: '03',
    title: 'The Minimal Ottoman',
    subtitle: 'Modular Footrest, Side Table & Low Seat',
    category: 'Ottoman Collection',
    slug: 'ottoman-green',
    price: 490,
    image: '/images/products/ottoman green.png',
    specs: {
      dimensions: '60cm ø × 40cm h',
      weight: '4.0 kg',
      fabric: 'Muted Sage Textured Weave',
      fill: 'Shape-Holding Core Capsule',
    },
    accentColor: '#7A9B8A',
  },
  {
    id: '4',
    index: '04',
    title: 'The B2B Bespoke Roastery',
    subtitle: 'Custom Arabic Calligraphy Embroidery for Venues',
    category: 'Commercial Hospitality',
    slug: 'teardrop-custom',
    price: 1190,
    image: '/images/products/teardrop black B2B habah bun.png',
    specs: {
      dimensions: 'Bespoke Sizing Available',
      weight: 'Commercial Grade',
      fabric: 'Water & Spill Resistant Lining',
      fill: 'High-Traffic Silent Core',
    },
    accentColor: '#944A1C',
  },
  {
    id: '5',
    index: '05',
    title: 'The Ground Cushion',
    subtitle: 'Floor Meditation & Quiet Reading Slab',
    category: 'Floor Sanctuary',
    slug: 'cushion-blue',
    price: 290,
    image: '/images/products/cushion blue.png',
    specs: {
      dimensions: '70cm × 70cm × 15cm',
      weight: '2.5 kg',
      fabric: 'Breathable Organic Cotton',
      fill: 'Multi-Density Contour Foam',
    },
    accentColor: '#1B3A5C',
  },
];

export default function FilmstripGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const current = SLIDES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handleQuickAdd = () => {
    const matchedProduct = products.find((p) => p.slug === current.slug);
    if (matchedProduct) {
      addItem(matchedProduct, matchedProduct.colors[0], 1);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <section className="w-full py-20 bg-surface border-y border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header with Filmstrip Concept Label */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border/60">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>FILMSTRIP // MINIMAL GALLERY REEL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-on-surface">
              Architectural Silhouettes.
            </h2>
          </div>

          {/* Reel Navigation Controls */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-on-surface-variant">
              <span className="text-on-surface font-bold text-base">{current.index}</span>
              <span className="text-border mx-1">/</span>
              <span>0{SLIDES.length}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-card border border-border/80 flex items-center justify-center text-on-surface hover:bg-on-surface hover:text-white transition-all shadow-sm active:scale-90"
                aria-label="Previous Silhouette"
                type="button"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-card border border-border/80 flex items-center justify-center text-on-surface hover:bg-on-surface hover:text-white transition-all shadow-sm active:scale-90"
                aria-label="Next Silhouette"
                type="button"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Filmstrip Display Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 items-center">
          
          {/* Main Visual Film Frame (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl bg-surface-container overflow-hidden border border-border shadow-xl flex items-center justify-center p-8 group">
              {/* Subtle film grain background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-container via-surface-container-low to-white/40 pointer-events-none" />

              {/* Filmstrip Frame Counter Tag */}
              <div className="absolute top-6 left-6 z-10 font-mono text-xs bg-surface/90 backdrop-blur px-3 py-1.5 rounded-full border border-border/60">
                FRAME {current.index} // {current.category}
              </div>

              {/* Product Image */}
              <div className="relative z-10 w-full h-full max-h-[420px] transition-all duration-500 transform group-hover:scale-105">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Bottom Quick-Add Pill */}
              <div className="absolute bottom-6 right-6 z-10">
                <button
                  onClick={handleQuickAdd}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all shadow-md active:scale-95 ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-on-surface text-surface hover:bg-primary hover:text-white'
                  }`}
                  type="button"
                >
                  {added ? (
                    <>
                      <Check size={14} /> Added to Cart
                    </>
                  ) : (
                    <>
                      <Plus size={14} /> Quick Reserve • SAR {current.price}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Technical Metadata & Spec Broadside (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                {current.category}
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-medium text-on-surface">
                {current.title}
              </h3>
              <p className="text-base text-on-surface-variant font-normal">
                {current.subtitle}
              </p>
            </div>

            {/* Spec Sheet Table */}
            <div className="bg-card rounded-2xl border border-border/80 p-5 divide-y divide-border/60 font-mono text-xs">
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-on-surface-variant">DIMENSIONS</span>
                <span className="font-semibold text-on-surface">{current.specs.dimensions}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-on-surface-variant">SCULPTURAL WEIGHT</span>
                <span className="font-semibold text-on-surface">{current.specs.weight}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-on-surface-variant">EXTERIOR TEXTILE</span>
                <span className="font-semibold text-on-surface">{current.specs.fabric}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-on-surface-variant">ACOUSTIC INNER FILL</span>
                <span className="font-semibold text-on-surface">{current.specs.fill}</span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <span className="text-on-surface-variant">DIRECT WORKSHOP PRICE</span>
                <span className="font-bold text-primary text-sm">SAR {current.price}</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                href={`/shop/${current.slug}`}
                className="inline-flex items-center justify-center gap-2 bg-on-surface text-surface px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95 group"
              >
                <span>Full Product Details</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Thumbnail Filmstrip Thumb Reel */}
        <div className="pt-10 flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative shrink-0 flex items-center gap-3 p-2.5 pr-5 rounded-2xl border transition-all duration-300 text-left ${
                  isActive
                    ? 'bg-card border-primary ring-2 ring-primary/20 shadow-md scale-105'
                    : 'bg-surface-container/60 border-border/70 hover:bg-card opacity-70 hover:opacity-100'
                }`}
                type="button"
              >
                <div className="relative w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-primary font-bold">{slide.index} // REEL</div>
                  <div className="text-xs font-semibold text-on-surface line-clamp-1">{slide.title}</div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
