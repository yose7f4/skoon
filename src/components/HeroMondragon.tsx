'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, VolumeX, ShieldCheck, Layers } from 'lucide-react';

interface Colorway {
  id: string;
  name: string;
  subtitle: string;
  hex: string;
  image: string;
  badge: string;
  tag: string;
}

const COLORWAYS: Colorway[] = [
  {
    id: 'charcoal',
    name: 'Noir Striped Sanctuary',
    subtitle: 'Washed European Linen & Noir Weave',
    hex: '#232323',
    image: '/images/products/lounger charcoal.jpg',
    badge: 'Flagship Edition',
    tag: 'Architectural Monolith',
  },
  {
    id: 'navy',
    name: 'Coastal Indigo Loom',
    subtitle: 'Deep Sea Cotton with Striped Cocoon',
    hex: '#1B3A5C',
    image: '/images/products/lounger navy.jpg',
    badge: 'Coastal Series',
    tag: 'Deep Marine Calm',
  },
  {
    id: 'red',
    name: 'Heritage Crimson Weave',
    subtitle: 'Raw Terracotta & Muted Burgundy',
    hex: '#7A2222',
    image: '/images/products/lounger red.png',
    badge: 'Limited Run',
    tag: 'Warm Desert Ember',
  },
  {
    id: 'green',
    name: 'Oasis Sage Botanical',
    subtitle: 'Organic Canvas with Natural Breathability',
    hex: '#436252',
    image: '/images/products/teardrob green.png',
    badge: 'Naturalist Edition',
    tag: 'Muted Botanical',
  },
];

export default function HeroMondragon() {
  const [selectedColor, setSelectedColor] = useState<Colorway>(COLORWAYS[0]);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  return (
    <section className="relative w-full pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden border-b border-border/40">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-secondary/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Metabar — Inspired by Mondragon 4 Agency Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-border/60 font-mono text-xs text-on-surface-variant">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="uppercase tracking-widest font-semibold text-on-surface">
              Bespoke Workshop Active
            </span>
            <span className="text-border">/</span>
            <span>Riyadh • Jeddah • Al-Ula</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block">ARCHITECTURAL SEATING EST. 2024</span>
            <span className="text-border hidden sm:inline-block">/</span>
            <span className="bg-surface-container px-2.5 py-0.5 rounded text-primary font-semibold">
              سكون • Tranquility
            </span>
          </div>
        </div>

        {/* Hero Content Grid: Asymmetric Mondragon Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-10 items-center">
          
          {/* Left Column: Monumental Editorial Typography (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 z-10">
            <div className="inline-flex items-center gap-2 bg-surface-container px-3.5 py-1.5 rounded-full w-fit border border-border/40 text-xs font-mono tracking-wider text-on-surface-variant">
              <Sparkles size={13} className="text-primary" />
              <span>COLLECTION 2026 // MONDRAGON EDITION</span>
            </div>

            <div className="flex flex-col">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium tracking-tight text-on-surface leading-[1.04]">
                Redefining <span className="italic font-normal text-primary">Stillness.</span>
                <br />
                The Architectural Lounger.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl font-normal leading-relaxed">
              We rejected disposable, squeaking sacks. Skoon creates structural sculptures tailored with double-lined organic European linen, soundproof virgin micro-beads, and ergonomic spinal cradling.
            </p>

            {/* Interactive Material Swatch & Switcher */}
            <div className="bg-card/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-border/70 shadow-sm max-w-lg flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-on-surface-variant">TACTILE FINISH:</span>
                <span className="text-primary font-bold">{selectedColor.name}</span>
              </div>

              <div className="flex items-center gap-3">
                {COLORWAYS.map((c) => {
                  const isSelected = selectedColor.id === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedColor(c)}
                      className={`group relative p-1 rounded-full transition-all duration-300 transform ${
                        isSelected
                          ? 'ring-2 ring-primary ring-offset-2 scale-110'
                          : 'ring-1 ring-transparent hover:ring-border hover:scale-105'
                      }`}
                      aria-label={`Select ${c.name}`}
                      type="button"
                    >
                      <span
                        className="block w-8 h-8 rounded-full border border-white/60 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  );
                })}

                <div className="ml-auto pl-3 border-l border-border/60 text-right">
                  <div className="text-[11px] font-mono text-on-surface-variant">{selectedColor.subtitle}</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#collection"
                className="inline-flex items-center justify-center gap-2 bg-on-surface text-surface px-7 py-4 rounded-xl text-sm font-semibold tracking-wide hover:bg-primary hover:text-white transition-all shadow-md group active:scale-95"
              >
                <span>Explore The Collection</span>
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                href="/custom"
                className="inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-on-surface px-6 py-4 rounded-xl text-sm font-medium border border-border/60 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Bespoke Roastery & Studio Orders</span>
              </Link>
            </div>

            {/* Three Technical Pillars */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/40 max-w-lg">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <VolumeX size={16} className="text-primary shrink-0" />
                <span className="font-mono">12dB Silent Fill</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <ShieldCheck size={16} className="text-secondary shrink-0" />
                <span className="font-mono">Spill Barrier</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <Layers size={16} className="text-primary shrink-0" />
                <span className="font-mono">Double-Lined</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered 3D Perspective Card Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div
              className="relative w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl bg-surface-container/70 border border-border/70 p-6 flex flex-col justify-between shadow-2xl overflow-hidden group perspective-1000"
              onMouseEnter={() => setIsHoveringCard(true)}
              onMouseLeave={() => setIsHoveringCard(false)}
            >
              {/* Top Card Bar */}
              <div className="flex items-center justify-between z-20 font-mono text-[11px] text-on-surface-variant">
                <span className="bg-surface/90 backdrop-blur px-3 py-1 rounded-full border border-border/50 uppercase">
                  {selectedColor.badge}
                </span>
                <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
                  SAR 990
                </span>
              </div>

              {/* Main Product Showcase Image with 3D Depth */}
              <div className="relative w-full flex-1 my-3 flex items-center justify-center transform transition-transform duration-700 ease-out group-hover:scale-105">
                <div className="relative w-full h-full max-h-[340px] drop-shadow-2xl">
                  <Image
                    src={selectedColor.image}
                    alt={selectedColor.name}
                    fill
                    className="object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-all duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Bottom Card Footer Details */}
              <div className="relative z-20 bg-surface/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-primary uppercase font-bold tracking-wider">
                    {selectedColor.tag}
                  </div>
                  <h4 className="text-sm font-semibold text-on-surface">
                    {selectedColor.name}
                  </h4>
                </div>
                <Link
                  href="/shop/lounger-charcoal"
                  className="w-10 h-10 rounded-xl bg-on-surface text-surface flex items-center justify-center hover:bg-primary transition-all shadow-sm group-hover:scale-105"
                  aria-label="View Product"
                >
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              {/* Decorative Subtle Corner Index */}
              <div className="absolute top-2 right-2 text-[60px] font-display font-light text-border/20 select-none pointer-events-none">
                01
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
