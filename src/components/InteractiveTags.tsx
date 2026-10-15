'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CraftTag {
  id: string;
  label: string;
  arabicLabel: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const TAGS: CraftTag[] = [
  {
    id: 'linen',
    label: 'ORGANIC EUROPEAN LINEN',
    arabicLabel: 'كتان أوروبي عضوي',
    category: 'Textile Mastery',
    description: '480 GSM double-woven natural fiber that breathes in desert heat and gains patina over decades.',
    image: '/images/products/lounger navy.jpg',
    link: '#anatomy',
  },
  {
    id: 'embroidery',
    label: 'ARABIC CALLIGRAPHY ATELIER',
    arabicLabel: 'تطريز الخط العربي المخصص',
    category: 'Artisanal Studio',
    description: 'Precision thread embroidery for specialty cafes, boutique hotels, and residential crests in Riyadh.',
    image: '/images/products/teardrop black B2B habah bun.png',
    link: '/custom',
  },
  {
    id: 'acoustic',
    label: '12dB ACOUSTIC QUIET FILL',
    arabicLabel: 'حشوة صامتة فائقة الكثافة',
    category: 'Spinal Engineering',
    description: 'Virgin micro-bead capsules that eliminate the loud crunchy rustle of conventional bean bags.',
    image: '/images/products/lounger charcoal.jpg',
    link: '#anatomy',
  },
  {
    id: 'b2b',
    label: 'COMMERCIAL HOSPITALITY GRADE',
    arabicLabel: 'معايير الضيافة والمقاهي',
    category: 'Commercial Solutions',
    description: 'Spill-proof internal barrier, stain resistance, and reinforced double-lock stitching for high-traffic venues.',
    image: '/images/products/teardrop black B2B.png',
    link: '/custom',
  },
  {
    id: 'contour',
    label: 'SCULPTURAL SPINAL ERGONOMICS',
    arabicLabel: 'انسيابية معمارية تدعم الظهر',
    category: 'Posture & Poise',
    description: 'Engineered silhouette that holds structured posture without slumping into a shapeless pile.',
    image: '/images/products/teardrob green.png',
    link: '#collection',
  },
  {
    id: 'circular',
    label: 'LIFETIME CIRCULAR REFILLS',
    arabicLabel: 'ضمان الاستدامة وإعادة التعبئة',
    category: 'Conscious Craft',
    description: 'Zero planned obsolescence. Every Skoon lounger includes complimentary bead top-up service in KSA.',
    image: '/images/products/lounger red.png',
    link: '/about',
  },
];

export default function InteractiveTags() {
  const [activeTag, setActiveTag] = useState<CraftTag>(TAGS[0]);

  return (
    <section className="w-full py-20 bg-background border-b border-border/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border/60">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-semibold uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              <span>MONDRAGON MATRIX // CRAFT &amp; DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-on-surface">
              Tactile Disciplines.
            </h2>
          </div>
          <p className="font-mono text-xs text-on-surface-variant max-w-sm">
            Hover over any discipline to inspect our architectural materials and workshop standards.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 items-center">
          
          {/* Left: Interactive Tags list (Mondragon Style) (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-border/60">
            {TAGS.map((tag) => {
              const isActive = activeTag.id === tag.id;
              return (
                <div
                  key={tag.id}
                  onMouseEnter={() => setActiveTag(tag)}
                  className={`group py-5 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    isActive ? 'px-4 bg-surface-container/60 rounded-xl' : 'hover:px-2'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <span className={`text-xl sm:text-2xl lg:text-3xl font-display font-medium transition-colors ${
                      isActive ? 'text-primary' : 'text-on-surface group-hover:text-primary'
                    }`}>
                      {tag.label}
                    </span>
                    <span className="font-arabic text-sm text-on-surface-variant/70">
                      {tag.arabicLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-on-surface-variant hidden sm:inline-block">
                      {tag.category}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-primary text-white scale-110' : 'bg-surface-container text-on-surface-variant group-hover:bg-primary group-hover:text-white'
                    }`}>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Hover Preview Window (Mondragon 3D Visual Box) (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-3xl bg-surface-container overflow-hidden border border-border shadow-xl p-6 flex flex-col justify-between group">
              <div className="flex items-center justify-between z-10 font-mono text-xs">
                <span className="bg-surface/90 backdrop-blur px-3 py-1 rounded-full border border-border/50 uppercase text-primary font-bold">
                  {activeTag.category}
                </span>
                <span className="bg-surface/90 backdrop-blur px-3 py-1 rounded-full border border-border/50 text-on-surface-variant">
                  KSA ATELIER
                </span>
              </div>

              {/* Dynamic Image with Smooth Cross-Fade */}
              <div className="relative w-full flex-1 my-3 flex items-center justify-center">
                <div className="relative w-full h-full max-h-[260px] transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    key={activeTag.id}
                    src={activeTag.image}
                    alt={activeTag.label}
                    fill
                    className="object-contain filter drop-shadow-xl animate-fade-in"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 bg-surface/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-md">
                <h4 className="text-sm font-semibold text-on-surface">
                  {activeTag.label}
                </h4>
                <p className="text-xs text-on-surface-variant font-normal mt-1 leading-relaxed">
                  {activeTag.description}
                </p>
                <div className="pt-2">
                  <Link
                    href={activeTag.link}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-primary font-semibold hover:underline"
                  >
                    <span>Inspect Specification</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
