import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThreeBackground from '@/components/ThreeBackground';
import HeroMondragon from '@/components/HeroMondragon';
import FilmstripGallery from '@/components/FilmstripGallery';
import FoldfolioAnatomy from '@/components/FoldfolioAnatomy';
import InteractiveTags from '@/components/InteractiveTags';
import CollectionGrid from '@/components/CollectionGrid';
import { Star, CheckCircle, ArrowUpRight, Award, Shield, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* 3D WebGL Ambient Background */}
      <ThreeBackground />

      <div className="relative z-10 flex flex-col w-full">
        
        {/* 1. Architectural Hero (Mondragon 4 Concept) */}
        <HeroMondragon />

        {/* 2. Interactive Filmstrip Gallery Reel (Filmstrip Concept) */}
        <div id="filmstrip">
          <FilmstripGallery />
        </div>

        {/* 3. Triple-Layer Foldfolio Unfolding Experience (Foldfolio Concept) */}
        <FoldfolioAnatomy />

        {/* 4. Mondragon Tactile Disciplines & Hover Matrix */}
        <InteractiveTags />

        {/* 5. Core Seating Sanctuary Collection Grid */}
        <CollectionGrid />

        {/* 6. Signature B2B & Commercial Roastery Case Study */}
        <section className="w-full py-20 bg-surface-container/60 border-b border-border/60 relative overflow-hidden" id="b2b">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Visual Case Study Card (6 Cols) */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-lg aspect-square rounded-3xl bg-card border border-border/80 p-8 shadow-2xl flex flex-col justify-between overflow-hidden group">
                  <div className="flex items-center justify-between z-10 font-mono text-xs">
                    <span className="bg-secondary/10 text-secondary font-bold px-3 py-1 rounded-full">
                      CASE STUDY 01 // AL-ULA
                    </span>
                    <span className="text-on-surface-variant">COMMERCIAL CONTRACT</span>
                  </div>

                  <div className="relative w-full flex-1 my-4 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/products/teardrop black B2B habah bun.png"
                      alt="Habat Bon Specialty Roastery Custom Bean Bag"
                      fill
                      className="object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className="relative z-10 bg-surface/95 backdrop-blur p-4 rounded-2xl border border-white/60 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-primary font-bold">
                        Habat Bon (حبة بن) Roastery
                      </div>
                      <div className="text-xs text-on-surface-variant font-normal">
                        Gold Thread Arabic Insignia • Desert Lounge Setup
                      </div>
                    </div>
                    <span className="bg-primary text-white font-mono text-[11px] px-3 py-1 rounded-full font-semibold">
                      14 Loungers
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: B2B Proposition & Spec (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-secondary font-semibold uppercase tracking-widest">
                    <Award size={14} />
                    <span>HOSPITALITY &amp; COMMERCIAL ATELIER</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-on-surface">
                    Bespoke Living for Saudi Cafes, Resorts &amp; Studios.
                  </h2>
                  <p className="text-base text-on-surface-variant leading-relaxed">
                    From specialty coffee lounges in Riyadh to desert retreats in Al-Ula, Skoon crafts commercial-grade seating customized with Arabic typography, crests, and water-repellent performance fabrics.
                  </p>
                </div>

                {/* 4 Commercial Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-card border border-border/80 flex flex-col gap-1.5 shadow-xs">
                    <span className="font-bold text-on-surface">Precision Embroidery</span>
                    <span className="text-on-surface-variant">Arabic script or corporate branding stitched directly into heavy canvas.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border/80 flex flex-col gap-1.5 shadow-xs">
                    <span className="font-bold text-on-surface">Spill-Proof Core</span>
                    <span className="text-on-surface-variant">Inner water-repellent lining designed for high-traffic food & beverage venues.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border/80 flex flex-col gap-1.5 shadow-xs">
                    <span className="font-bold text-on-surface">Custom Dye Batches</span>
                    <span className="text-on-surface-variant">Match exact Pantone or interior design palettes with certified dyes.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-card border border-border/80 flex flex-col gap-1.5 shadow-xs">
                    <span className="font-bold text-on-surface">Volume Tier Rates</span>
                    <span className="text-on-surface-variant">Direct workshop wholesale pricing for architects and commercial studios.</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    href="/custom"
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-7 py-3.5 rounded-xl font-mono text-xs font-semibold hover:bg-accent-hover transition-all shadow-sm active:scale-95"
                  >
                    <span>Request B2B Catalog &amp; Swatches</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Voices of Repose: Editorial Quotes & Architectural Press */}
        <section className="w-full py-20 bg-background border-b border-border/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-border/60">
              <div>
                <span className="font-mono text-xs text-primary font-semibold uppercase tracking-widest mb-2 block">
                  VOICES OF REPOSE // ARCHITECTURAL PRESS
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-medium text-on-surface">
                  Living in Quiet Contemplation.
                </h2>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-on-surface-variant">
                <div className="flex items-center text-amber-500">
                  <Star size={14} className="fill-amber-500" />
                  <Star size={14} className="fill-amber-500" />
                  <Star size={14} className="fill-amber-500" />
                  <Star size={14} className="fill-amber-500" />
                  <Star size={14} className="fill-amber-500" />
                </div>
                <span className="font-bold text-on-surface ml-1">4.9/5.0</span>
                <span>• Over 1,400 tranquil homes &amp; cafes in Saudi Arabia</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Quote 1 */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
                <p className="font-display text-lg text-on-surface leading-snug">
                  “The Noir Striped lounger transformed our reading nook in Diriyah. It holds its structured form unlike conventional sacks, effortlessly elevating the entire room.”
                </p>
                <div className="pt-4 border-t border-border/60 font-mono text-xs">
                  <div className="font-bold text-on-surface">Fatima Al-Mansoor</div>
                  <div className="text-on-surface-variant">Interior Architect, Riyadh</div>
                </div>
              </div>

              {/* Quote 2 */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
                <p className="font-display text-lg text-on-surface leading-snug">
                  “We ordered 14 custom branded loungers for our roastery in Jeddah. The embroidery craftsmanship with our Arabic insignia was immaculate, and the fabric washes like a dream.”
                </p>
                <div className="pt-4 border-t border-border/60 font-mono text-xs">
                  <div className="font-bold text-on-surface">Tariq Al-Ghamdi</div>
                  <div className="text-on-surface-variant">Founder, Rawiyat Cafe, Jeddah</div>
                </div>
              </div>

              {/* Quote 3 */}
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow">
                <p className="font-display text-lg text-on-surface leading-snug">
                  “The quiet beads are a real revelation. Zero squeaking, perfectly silent when shifting posture during evening meditation. Skoon brought real tranquility into our home.”
                </p>
                <div className="pt-4 border-t border-border/60 font-mono text-xs">
                  <div className="font-bold text-on-surface">Sara &amp; Omar</div>
                  <div className="text-on-surface-variant">Homeowners, Al-Khobar</div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
