'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Send, Check } from 'lucide-react';
import Image from 'next/image';

const COLORS = [
  { name: 'Black', hex: '#1A1A1A' },
  { name: 'Charcoal', hex: '#3A3A3A' },
  { name: 'Navy', hex: '#1B3A5C' },
  { name: 'Burgundy', hex: '#4A1527' },
  { name: 'Sage', hex: '#5B7B6A' },
];

export default function CustomOrderPage() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [form, setForm] = useState({
    companyName: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    quantity: '10',
    notes: '',
  });

  const updateForm = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/custom-orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          quantity: parseInt(form.quantity),
          preferredColor: selectedColor.name,
          beanBagStyle: 'teardrop',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="text-primary" size={28} />
          </div>
          <h1 className="font-display text-3xl font-medium text-foreground">
            Request received
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Thank you, {form.contactName}! We&apos;ll review your custom order request for {form.companyName} and
            get back to you within 1–2 business days with a quote.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-accent mb-2">For businesses</p>
          <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Custom branded bean bags
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Put your brand on our signature Drop bean bag. Choose your color, provide your logo details,
            and submit your order request for a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: 3D Preview */}
          <div>

            {/* Color picker for the custom order */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">
                Bean bag color: {selectedColor.name}
              </p>
              <div className="flex gap-3">
                {COLORS.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor.name === color.name
                        ? 'border-primary ring-2 ring-primary/30 scale-110'
                        : 'border-border hover:border-muted-foreground'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Example image */}
            <div className="mt-8 rounded-xl overflow-hidden">
              <Image
                src="/images/products/beanbag-custom-logo.jpg"
                alt="Example: custom branded bean bag for a café"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-xl"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                Example: a custom Drop bean bag created for a local café
              </p>
            </div>
          </div>

          {/* Right: Order form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 space-y-5">
                <h2 className="font-display text-xl font-medium text-foreground">
                  Order details
                </h2>

                {/* Company name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-1.5">
                    Company name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    required
                    value={form.companyName}
                    onChange={e => updateForm('companyName', e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Your company or café name"
                  />
                </div>

                {/* Contact name */}
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-1.5">
                    Contact name
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    required
                    value={form.contactName}
                    onChange={e => updateForm('contactName', e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                {/* Email + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      required
                      value={form.contactEmail}
                      onChange={e => updateForm('contactEmail', e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-foreground mb-1.5">
                      Phone
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      value={form.contactPhone}
                      onChange={e => updateForm('contactPhone', e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="+966 5XX XXX XXXX"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-1.5">
                    Quantity (minimum 10)
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    required
                    min="10"
                    value={form.quantity}
                    onChange={e => updateForm('quantity', e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-1.5">
                    Additional notes
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={form.notes}
                    onChange={e => updateForm('notes', e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-y"
                    placeholder="Special requirements, Pantone codes, deadline, etc."
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-medium transition-all disabled:opacity-60"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {isSubmitting ? 'Submitting...' : 'Submit order request'}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                No payment required now. We&apos;ll review your request and send you a detailed
                quote within 1–2 business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
