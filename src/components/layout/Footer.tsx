'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logos/sukoon-english.jpg"
              alt="Sukoon"
              width={120}
              height={40}
              className="h-8 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm leading-relaxed text-background/60 max-w-xs">
              Comfort reimagined. Handcrafted bean bags designed for the way you actually live,
              work, and unwind.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="font-display text-base font-medium text-background mb-4">Shop</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/shop" className="text-sm text-background/60 hover:text-background transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?style=nest" className="text-sm text-background/60 hover:text-background transition-colors">
                  The Nest Collection
                </Link>
              </li>
              <li>
                <Link href="/shop?style=teardrop" className="text-sm text-background/60 hover:text-background transition-colors">
                  The Drop Collection
                </Link>
              </li>
              <li>
                <Link href="/custom" className="text-sm text-background/60 hover:text-background transition-colors">
                  Custom &amp; B2B Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-display text-base font-medium text-background mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-background/60 hover:text-background transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-sm text-background/60 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-base font-medium text-background mb-4">Stay in touch</h4>
            <p className="text-sm text-background/60 mb-4">
              New designs, limited drops, and quiet moments — delivered to your inbox.
            </p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-sm bg-background/10 border border-background/20 rounded-lg text-background placeholder:text-background/40 focus:outline-none focus:border-background/40"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} Sukoon. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/images/logos/sukoon-arabic.jpg"
              alt="سكون"
              width={60}
              height={30}
              className="h-5 w-auto object-contain brightness-0 invert opacity-40"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
