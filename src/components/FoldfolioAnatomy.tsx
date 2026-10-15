'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, Shield, Droplets, RefreshCw, Smartphone, ChevronDown, CheckCircle2 } from 'lucide-react';

interface LayerSpec {
  id: string;
  name: string;
  subtitle: string;
  depth: string;
  description: string;
  specs: string[];
  color: string;
}

const LAYERS: LayerSpec[] = [
  {
    id: 'outer',
    name: '01. The Tactile Outer Slip',
    subtitle: 'Washed European Linen & Heavy Organic Canvas',
    depth: 'Exterior Envelope',
    description: 'Pre-shrunk, double-woven textile that softens with age. Breathable in dry desert heat and warm during cool winter evenings. Detachable in under 45 seconds with concealed floor-safe zippers.',
    specs: ['480 GSM High-Tensile Weave', 'Machine Washable @ 30°C', 'Zero Chemical Bleaching', 'Hidden Scratch-Free YKK'],
    color: '#436252',
  },
  {
    id: 'core',
    name: '02. The Liquid-Proof Core Membrane',
    subtitle: 'Hospitality-Grade Spill Shield',
    depth: 'Intermediate Barrier',
    description: 'Coffee spills and beverage mishaps happen. Our intermediate internal lining is engineered with a waterproof microporous membrane that halts moisture cold while allowing internal air breathability.',
    specs: ['10,000mm Hydrostatic Head', 'Anti-Bacterial Coating', 'Tear-Proof Ballistic Seams', 'Breathable One-Way Venting'],
    color: '#944A1C',
  },
  {
    id: 'acoustic',
    name: '03. The Silent Acoustic Chamber',
    subtitle: 'Virgin Micro-Beads with Squeak Suppression',
    depth: 'Inner Core Fill',
    description: 'Conventional bean bags use recycled packing peanuts that produce a loud 65dB crunch with every micro-movement. Skoon uses dense 1.5mm virgin polymer micro-beads engineered for 12dB quietness.',
    specs: ['1.5mm Virgin Micro-Sphere Fill', '12dB Silent Compression', 'Dynamic Spine Alignment', 'Lifetime Bead Refill Guarantee'],
    color: '#3C2415',
  },
];

export default function FoldfolioAnatomy() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [isUnfolded, setIsUnfolded] = useState<boolean>(true);
  const [soundTestMode, setSoundTestMode] = useState<'skoon' | 'conventional'>('skoon');

  const layer = LAYERS[activeLayer];

  return (
    <section className="w-full py-20 bg-surface-container/40 border-b border-border/60 relative overflow-hidden" id="anatomy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border/60">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-secondary font-semibold uppercase tracking-widest mb-2">
              <Smartphone size={14} />
              <span>FOLDFOLIO // INTERACTIVE UNVEILING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-on-surface">
              The Triple-Layer Anatomy.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsUnfolded(!isUnfolded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-xs font-mono font-medium hover:bg-on-surface hover:text-white transition-all shadow-sm active:scale-95"
              type="button"
            >
              <RefreshCw size={14} className={isUnfolded ? 'rotate-180 transition-transform' : 'transition-transform'} />
              <span>{isUnfolded ? 'Fold Device View' : 'Unfold Full Anatomy'}</span>
            </button>
          </div>
        </div>

        {/* Foldable Interactive Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 items-center">
          
          {/* Left Column: Foldfolio Interactive Device Widget (6 Cols) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className={`relative w-full max-w-md rounded-[36px] bg-neutral-900 border-4 border-neutral-800 p-6 text-white shadow-2xl transition-all duration-700 ${
              isUnfolded ? 'scale-100 ring-4 ring-primary/20' : 'scale-95 opacity-90'
            }`}>
              
              {/* Phone Status Bar (Inspired by Foldfolio lockscreen) */}
              <div className="flex items-center justify-between pb-6 font-mono text-xs text-neutral-400 border-b border-neutral-800">
                <span className="font-semibold text-white tracking-widest">SKOON OS // 14:32</span>
                <span className="bg-neutral-800 text-neutral-300 px-2.5 py-0.5 rounded-full text-[10px]">
                  RIYADH 28°C
                </span>
              </div>

              {/* Dynamic Lockscreen / Unfolding Card Area */}
              <div className="py-6 flex flex-col gap-4">
                <div className="text-[11px] font-mono tracking-wider text-primary font-bold uppercase">
                  UNFOLDING SANCTUARY CORE
                </div>

                {/* 3 Selectable Layer Bars inside the device */}
                <div className="flex flex-col gap-3">
                  {LAYERS.map((item, idx) => {
                    const isSelected = activeLayer === idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveLayer(idx)}
                        className={`flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-300 ${
                          isSelected
                            ? 'bg-neutral-800 border-primary ring-1 ring-primary/50 text-white shadow-lg translate-x-1'
                            : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:bg-neutral-800/60'
                        }`}
                        type="button"
                      >
                        <div
                          className="w-3 h-3 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: item.color }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-neutral-200">
                              {item.name}
                            </span>
                            <span className="font-mono text-[10px] text-neutral-500 uppercase">
                              {item.depth}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 mt-1 line-clamp-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Decibel Audio Test Widget (Silent Filling Proof) */}
                <div className="mt-4 p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-300">ACOUSTIC AUDIT:</span>
                    <span className={soundTestMode === 'skoon' ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                      {soundTestMode === 'skoon' ? '12 dB (WHISPER STILL)' : '65 dB (CRUNCHY NOISE)'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSoundTestMode('skoon')}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-mono transition-all ${
                        soundTestMode === 'skoon'
                          ? 'bg-primary text-white font-bold'
                          : 'bg-neutral-700/50 text-neutral-400 hover:text-white'
                      }`}
                      type="button"
                    >
                      <VolumeX size={14} />
                      <span>Skoon Core</span>
                    </button>
                    <button
                      onClick={() => setSoundTestMode('conventional')}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-mono transition-all ${
                        soundTestMode === 'conventional'
                          ? 'bg-amber-800/60 text-amber-200 font-bold border border-amber-600'
                          : 'bg-neutral-700/50 text-neutral-400 hover:text-white'
                      }`}
                      type="button"
                    >
                      <Volume2 size={14} />
                      <span>Regular Sack</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Bottom Device Notch */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-center">
                <div className="w-24 h-1 rounded-full bg-neutral-700" />
              </div>
            </div>
          </div>

          {/* Right Column: Deep Layer Inspection & Guarantee (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-secondary font-bold">
                LAYER {activeLayer + 1} OF 3 // {layer.depth}
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-medium text-on-surface">
                {layer.name}
              </h3>
              <p className="text-base text-on-surface-variant font-normal leading-relaxed">
                {layer.description}
              </p>
            </div>

            {/* Checklist of Technical Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {layer.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-card border border-border/80 shadow-xs"
                >
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="font-mono text-xs text-on-surface font-medium">{spec}</span>
                </div>
              ))}
            </div>

            {/* Swatch Kit Voucher Banner */}
            <div className="bg-primary/10 border border-primary/20 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div>
                <h4 className="text-sm font-semibold text-on-surface">
                  Order the Tactile Swatch Kit
                </h4>
                <p className="text-xs text-on-surface-variant font-mono mt-0.5">
                  5 fabric weaves delivered to your door (SAR 35 • 100% credited to your lounger)
                </p>
              </div>
              <button
                className="bg-primary text-white text-xs font-mono font-semibold px-4 py-2.5 rounded-xl hover:bg-primary-container transition-all whitespace-nowrap active:scale-95 shadow-sm"
                type="button"
              >
                Order Swatches
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
