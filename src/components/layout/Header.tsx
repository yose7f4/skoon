'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#collection', label: '01 Series' },
    { href: '/#filmstrip', label: '02 Filmstrip' },
    { href: '/#anatomy', label: '03 Anatomy' },
    { href: '/shop', label: '04 Catalog' },
    { href: '/custom', label: '05 Bespoke & B2B' },
    { href: '/about', label: '06 Ethos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-xs'
          : 'bg-background/70 backdrop-blur-sm border-b border-border/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-display text-2xl font-bold tracking-tight text-on-surface">
              SKOON<span className="text-primary text-3xl leading-none">.</span>
            </span>
            <span className="hidden sm:inline-block font-arabic text-sm text-on-surface-variant border-l border-border/80 pl-3">
              سكون
            </span>
          </Link>

          {/* Desktop Navigation (Mondragon Mono style numbered links) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Cluster: Status Pill & Bag */}
          <div className="flex items-center gap-4">
            
            {/* Mondragon 4 inspired Live Status Pill */}
            <Link
              href="/custom"
              className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-border text-[11px] font-mono text-on-surface-variant hover:border-primary/50 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>Available for Bespoke Orders</span>
              <ArrowUpRight size={12} className="text-primary" />
            </Link>

            {/* Shopping Bag Trigger */}
            <Link
              href="/cart"
              className="relative p-2.5 rounded-full bg-surface-container/60 hover:bg-surface-container text-on-surface transition-all active:scale-95 border border-border/50"
              aria-label={`Shopping bag with ${totalItems} items`}
            >
              <ShoppingBag size={18} strokeWidth={1.75} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] font-mono font-bold rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2 text-on-surface hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-3 font-mono text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-on-surface hover:text-primary transition-colors border-b border-border/40 last:border-0 flex items-center justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} className="text-primary" />
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border/60">
              <Link
                href="/custom"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-mono text-xs font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Bespoke Roastery Catalog
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
