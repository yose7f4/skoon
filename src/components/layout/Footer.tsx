import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-high/60 border-t border-border/80 pt-16 pb-12 text-on-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Editorial Marquee / Ticker */}
        <div className="pb-12 border-b border-border/60 overflow-hidden">
          <div className="animate-ticker font-display text-2xl sm:text-3xl text-on-surface/40 uppercase tracking-widest gap-12 whitespace-nowrap">
            <span>سكون • QUIET COMFORT</span>
            <span>//</span>
            <span>HAND-STITCHED IN RIYADH</span>
            <span>//</span>
            <span>100% ORGANIC LINEN WEAVE</span>
            <span>//</span>
            <span>12dB SILENT VIRGIN MICRO-BEADS</span>
            <span>//</span>
            <span>BESPOKE HOSPITALITY EDITIONS</span>
            <span>//</span>
            <span>سكون • QUIET COMFORT</span>
            <span>//</span>
            <span>HAND-STITCHED IN RIYADH</span>
            <span>//</span>
            <span>100% ORGANIC LINEN WEAVE</span>
            <span>//</span>
            <span>12dB SILENT VIRGIN MICRO-BEADS</span>
            <span>//</span>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-border/60">
          
          {/* Brand Col (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-3xl font-bold tracking-tight text-on-surface">
                SKOON<span className="text-primary text-4xl leading-none">.</span>
              </span>
            </Link>
            <p className="text-sm text-on-surface-variant max-w-sm font-normal leading-relaxed">
              Handcrafted bean bags tailored for slow living, contemplative spaces, and ergonomic serenity. Rooted in the poise of mindful stillness (سكون).
            </p>
            <div className="flex items-center gap-2 font-mono text-xs text-primary pt-2">
              <MapPin size={14} />
              <span>Workshop: As-Sahafah District, Riyadh, Kingdom of Saudi Arabia</span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3 font-mono text-xs">
            <span className="font-bold text-on-surface uppercase tracking-wider">INDEX</span>
            <Link href="/#collection" className="text-on-surface-variant hover:text-primary transition-colors">
              01 // All Silhouettes
            </Link>
            <Link href="/#filmstrip" className="text-on-surface-variant hover:text-primary transition-colors">
              02 // Filmstrip Reel
            </Link>
            <Link href="/#anatomy" className="text-on-surface-variant hover:text-primary transition-colors">
              03 // Triple-Layer Anatomy
            </Link>
            <Link href="/shop" className="text-on-surface-variant hover:text-primary transition-colors">
              04 // Online Catalog
            </Link>
            <Link href="/custom" className="text-on-surface-variant hover:text-primary transition-colors">
              05 // B2B Roastery Orders
            </Link>
            <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">
              06 // The Skoon Ethos
            </Link>
          </div>

          {/* Products (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3 font-mono text-xs">
            <span className="font-bold text-on-surface uppercase tracking-wider">SILHOUETTES</span>
            <Link href="/shop/lounger-charcoal" className="text-on-surface-variant hover:text-primary transition-colors">
              The Sanctuary Lounger
            </Link>
            <Link href="/shop/teardrop-black" className="text-on-surface-variant hover:text-primary transition-colors">
              The Sculpted Teardrop
            </Link>
            <Link href="/shop/ottoman-green" className="text-on-surface-variant hover:text-primary transition-colors">
              The Low Ottoman
            </Link>
            <Link href="/shop/cushion-blue" className="text-on-surface-variant hover:text-primary transition-colors">
              The Floor Cushion
            </Link>
            <Link href="/shop/teardrop-custom" className="text-on-surface-variant hover:text-primary transition-colors">
              Custom Calligraphy Edition
            </Link>
          </div>

          {/* Newsletter & Atelier Dispatch (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs font-bold text-on-surface uppercase tracking-wider">
              ATELIER DISPATCH
            </span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Seasonal fabric drops, architecture collaborations, and quiet living notes.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="architect@studio.sa"
                className="w-full bg-card px-3.5 py-2.5 rounded-xl border border-border text-xs font-mono text-on-surface placeholder:text-on-surface-variant/50 focus:outline-hidden focus:border-primary"
              />
              <button
                className="px-4 py-2.5 rounded-xl bg-on-surface text-surface hover:bg-primary transition-all text-xs font-mono font-semibold shrink-0"
                type="button"
                aria-label="Subscribe"
              >
                Join
              </button>
            </div>
            <span className="text-[10px] font-mono text-on-surface-variant/70">
              No noise, no spam. Unsubscribe anytime.
            </span>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <div>
            © {new Date().getFullYear()} SKOON ATELIER LTD. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-primary cursor-pointer">Privacy Charter</span>
            <span className="hover:text-primary cursor-pointer">Terms of Commission</span>
            <span className="hover:text-primary cursor-pointer">Commercial Lookbook</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
