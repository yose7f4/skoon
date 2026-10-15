'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Image
            src="/images/logos/sukoon-bilingual.jpg"
            alt="Sukoon سكون"
            width={200}
            height={80}
            className="h-12 w-auto object-contain mx-auto mb-10"
          />
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Comfort is a quiet act of care
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Sukoon — سكون — means tranquility in Arabic. It&apos;s the diacritical mark that silences
            a letter, the pause that gives meaning to sound. We named our company after it because
            we believe the best comfort is felt, not announced.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-6">
                Made for real life
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Every Sukoon bean bag starts with a question: where will this live? A reading nook
                  in a family home needs different things than a café lobby or a startup&apos;s breakout
                  space.
                </p>
                <p>
                  That&apos;s why we make two shapes — the Nest, our round open-top design that wraps
                  around you, and the Drop, our teardrop silhouette with built-in back support.
                  Both are filled with premium high-density memory foam and polystyrene beads for
                  structure that doesn&apos;t flatten after a month.
                </p>
                <p>
                  Our covers are removable and machine-washable, because real comfort means not
                  worrying about spills. We use double-stitched seams and reinforced zippers because
                  bean bags should last years, not seasons.
                </p>
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-surface">
              <Image
                src="/images/products/beanbag-navy.jpg"
                alt="Sukoon Nest bean bag in navy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground text-center mb-12">
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Honest materials',
                description: 'Premium cotton-blend fabrics, high-density fills, reinforced construction. No shortcuts.',
              },
              {
                title: 'Designed to last',
                description: 'Removable covers, washable fabrics, and replaceable fills. Built for years of daily use.',
              },
              {
                title: 'Made for everyone',
                description: 'From homes to hotels, cafés to co-working spaces. We make comfort accessible.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground text-center mb-3">
            Get in touch
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Questions, partnerships, or just want to say hello?
          </p>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent! (This is a placeholder — connect to your email service.)');
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  required
                  className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-all"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-medium">
            Ready to find your quiet place?
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-medium transition-all"
            >
              Shop now
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/custom"
              className="inline-flex items-center gap-2 px-6 py-3 border border-background/30 text-background rounded-lg text-sm font-medium hover:bg-background/10 transition-all"
            >
              Custom orders
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
