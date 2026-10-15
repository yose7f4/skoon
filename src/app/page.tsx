import React from 'react';
import Image from 'next/image';
import ThreeBackground from '@/components/ThreeBackground';
import CollectionGrid from '@/components/CollectionGrid';

export default function HomePage() {

  return (
    <div className="relative">
      <ThreeBackground />
      <div className="relative z-10">
        <div className="flex flex-col w-full">
{/*  Interactive Hero Section  */}
<section className="relative w-full overflow-hidden bg-transparent py-space-xl lg:py-space-xxl">
{/*  Ambient glowing aura  */}
<div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none animate-pulse duration-[8000ms]"></div>
<div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-primary-fixed/40 blur-3xl pointer-events-none"></div>
<div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
{/*  Text & Action Column (5 Cols)  */}
<div className="lg:col-span-5 flex flex-col gap-space-lg z-10">
<div className="inline-flex items-center gap-space-xs bg-surface-container px-space-md py-space-xs rounded-full w-fit shadow-xs">
<span className="relative flex h-2.5 w-2.5 items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Handcrafted in Saudi Arabia</span>
</div>
<div className="flex flex-col gap-space-sm">
<h1 className="font-headline-xxl text-headline-xxl text-on-surface tracking-tight leading-[1.08]">
              The Art of <span className="italic font-normal text-primary">Quiet</span> Comfort.
            </h1>
<p className="font-body-xl text-body-xl text-on-surface-variant max-w-lg">
              Handcrafted bean bags tailored for slow living, contemplative spaces, and ergonomic serenity. Rooted in the poise of mindful stillness.
            </p>
</div>
{/*  Color Swatch Interactive Switcher  */}
<div className="bg-card p-space-md rounded-xl shadow-sm border border-border/40 flex flex-col gap-space-xs max-w-md backdrop-blur-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Selected Colorway:</span>
<span className="font-label-md text-label-md text-primary font-bold transition-all duration-300" id="hero-swatch-name">Striped Noir &amp; Cream</span>
</div>
<div className="flex items-center gap-space-sm pt-space-xs" id="hero-swatches-container">
{/*  Swatch 1: Noir  */}
<button aria-label="Striped Noir" className="hero-swatch-btn group relative p-1 rounded-full ring-2 ring-primary transition-all duration-300 transform hover:scale-110 active:scale-95" data-color="noir" data-image="https://lh3.googleusercontent.com/aida-public/AB6AXuADxYUl2PpOWIIIsYKNT4TG27KbsZEcdzbZms2TW0S3zDnvx08oCjqQA0BNoRbKbZ7XjDyYwEb-4d5xgWhQSjhF_hhst8E48lxzhy5HQVH2rY2bbUm2YIWC8U2M25TrwC9m9PG3Kt5J9_5rwBrG2cbX1nCzjm0_Oy5w4ZE-xmJhb5WcRqZUDrd9RPae_k1lI4307NgltzGx1YtMTjhDRi0x-Kzlmrw12-susx44JJlBOJ81yjW7o0gmTQ" data-name="Striped Noir &amp; Cream"  type="button">
<span className="block w-7 h-7 rounded-full bg-[#202020] border-2 border-white shadow-sm"></span>
</button>
{/*  Swatch 2: Indigo  */}
<button aria-label="Coastal Indigo" className="hero-swatch-btn group relative p-1 rounded-full ring-2 ring-transparent hover:ring-outline/60 transition-all duration-300 transform hover:scale-110 active:scale-95" data-color="indigo" data-image="https://lh3.googleusercontent.com/aida-public/AB6AXuAenbLkTjO8N8qg4EVLXj27NtI0-ABBreXxqwpKlJ8IKKSTJavTCaXgN0hl3YUa2Qq0-rSLdd0xmRTtaeEpLhDefChwgweuJkOcEHeRHwMPe4EllcdfBJMnvGxPeLbx1GwnOlcQP3Vk24i9t275QlIkPKd9Sxda2hiQnqM9E0GCGKIec9bO0pCzqD91g4lq70BLCpxDvk61MVKQJzGEC7e2iykX79B2o2OTCZmL5kJP_2DXMKZLJVvvUA" data-name="Coastal Indigo &amp; Desert Ecru"  type="button">
<span className="block w-7 h-7 rounded-full bg-[#1e3a5f] border-2 border-white shadow-sm"></span>
</button>
{/*  Swatch 3: Crimson  */}
<button aria-label="Heritage Crimson" className="hero-swatch-btn group relative p-1 rounded-full ring-2 ring-transparent hover:ring-outline/60 transition-all duration-300 transform hover:scale-110 active:scale-95" data-color="crimson" data-image="https://lh3.googleusercontent.com/aida-public/AB6AXuDUGMAwrtA4U9ZTbpwErrjEMS-vY3XsX05Ynm34nfJvSiG7XXTrkp46ErXcrYJG0fnBndBCXJeo0TdmYJLHMUVC_1SxSQctS4dkiO7QYmH_whrGAWjFas0wHhJKRguJ1Nal6yYGISpu6xdbC5TOmqkIxofV2osDrn0ga-hY87eQ4RnZ3OzjdggTz6cMNHV77xhdPkqCK8eup_jh-QgxKvtH2fJp3wKPTpDb_6UUMlM88dQ-zwyGyFreAw" data-name="Heritage Crimson Weave"  type="button">
<span className="block w-7 h-7 rounded-full bg-[#5a1e27] border-2 border-white shadow-sm"></span>
</button>
{/*  Swatch 4: Onyx Canvas  */}
<button aria-label="Matte Onyx" className="hero-swatch-btn group relative p-1 rounded-full ring-2 ring-transparent hover:ring-outline/60 transition-all duration-300 transform hover:scale-110 active:scale-95" data-color="onyx" data-image="https://lh3.googleusercontent.com/aida-public/AB6AXuC1drn_1-jsVQuiILXeaUWOXGpU4RW0ui49UB8LynvP5CKORz0pTeaweyq-c5Fsx_OlaAT583mJoS6VzXb0NxBw5Tos-_yJwc7cQJGTx4XvKN6YcvLX-1zqO5DgjEQsP477d_VrG8SNgeuQkcBwEy0Tth4h1qxxgZtaYx5nxUJe_TpVaoZsDbS_SRTVvPJt75Q3qpvoSf4n3Fe1XNazdIZDbjZJemYCsxBQpGfWC8F9HWbHyCiEie-Zvg" data-name="Matte Onyx Washed Organic Canvas"  type="button">
<span className="block w-7 h-7 rounded-full bg-[#171616] border-2 border-white shadow-sm"></span>
</button>
<div className="ml-auto pl-space-sm border-l border-muted-subtle flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-base text-primary">water_drop</span>
<span className="font-label-sm text-label-sm">Spill-Proof Linen</span>
</div>
</div>
</div>
{/*  CTAs  */}
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
<a className="shimmer-btn bg-primary text-on-primary font-label-lg text-label-lg px-space-xl py-3.5 rounded-xl hover:bg-primary-container transition-all text-center shadow-md hover:-translate-y-0.5 active:scale-95" href="#collection">
              Explore the Collection
            </a>
<a className="bg-surface-container-high text-on-surface hover:text-secondary font-label-lg text-label-lg px-space-lg py-3.5 rounded-xl transition-all text-center hover:bg-surface-container border border-border/50 hover:-translate-y-0.5 active:scale-95" href="#b2b">
              Custom &amp; Hospitality Orders
            </a>
</div>
{/*  Proof Metrics  */}
<div className="flex items-center gap-space-lg pt-space-sm">
<div className="flex -space-x-2">
<span className="inline-block w-8 h-8 rounded-full bg-[#d4c9c2] flex items-center justify-center text-[10px] font-bold text-on-surface shadow-sm ring-2 ring-white">NA</span>
<span className="inline-block w-8 h-8 rounded-full bg-[#b5c7bb] flex items-center justify-center text-[10px] font-bold text-on-surface shadow-sm ring-2 ring-white">SK</span>
<span className="inline-block w-8 h-8 rounded-full bg-[#e7bea8] flex items-center justify-center text-[10px] font-bold text-on-surface shadow-sm ring-2 ring-white">RY</span>
</div>
<div className="flex flex-col">
<div className="flex items-center text-[#e8924b]">
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-label-md text-label-md font-bold text-on-surface ml-1">4.9</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse"></span>
              Over 1,400 tranquil homes &amp; cafes
            </span>
</div>
</div>
</div>
{/*  Featured Product Presentation (7 Cols)  */}
<div className="lg:col-span-7 relative flex justify-center items-center mt-space-lg lg:mt-0">
<div className="relative w-full max-w-xl aspect-square rounded-3xl bg-surface-container flex items-center justify-center p-space-md lg:p-space-lg shadow-xl overflow-hidden group animate-subtle-breathe">
{/*  Soft radial backplate  */}
<div className="absolute inset-0 bg-gradient-to-tr from-surface-container via-surface-container-low to-white/70"></div>
{/*  Product image with smooth floating animation & cross-fade  */}
<div className="relative z-10 w-full h-full flex items-center justify-center animate-gentle-float">
<Image src="/images/products/beanbag-charcoal.jpg" alt="Skoon Sanctuary Lounger" fill className="object-cover filter drop-shadow-2xl transition-all duration-500 ease-out transform group-hover:scale-105" id="hero-lounger-img" sizes="(max-width: 768px) 100vw, 50vw" />
</div>
{/*  Floating Architectural Badges with staggered gentle floating keyframes  */}
<div className="badge-float-1 absolute top-6 left-6 z-20 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-md flex items-center gap-space-xs border border-white/60 hover:bg-white transition-all cursor-default">
<span className="material-symbols-outlined text-primary text-sm">spa</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">100% Organic Linen Blend</span>
</div>
<div className="badge-float-2 absolute bottom-6 right-6 z-20 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-md flex items-center gap-space-xs border border-white/60 hover:bg-white transition-all cursor-default">
<span className="material-symbols-outlined text-secondary text-sm">adjust</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">Ergonomic Micro-bead Fill</span>
</div>
<div className="badge-float-3 absolute bottom-6 left-6 z-20 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-md hidden sm:flex items-center gap-space-xs border border-white/60 hover:bg-white transition-all cursor-default">
<span className="material-symbols-outlined text-primary text-sm">handyman</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">Hand-stitched in Riyadh</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Value & Sensory Strip with Gentle Micro-Interactions  */}
<section className="w-full bg-surface-container/30 py-space-lg backdrop-blur-md border-y border-border/30">
<div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-lg">
<div className="flex items-center gap-space-sm group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-fixed group-hover:text-primary">
<span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:rotate-12">air</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-sm sm:text-base group-hover:text-primary transition-colors">Silent Filling</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Zero rustling virgin beads</p>
</div>
</div>
<div className="flex items-center gap-space-sm group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-fixed group-hover:text-primary">
<span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:-rotate-12">wash</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-sm sm:text-base group-hover:text-primary transition-colors">Removable Slips</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Machine washable at 30°C</p>
</div>
</div>
<div className="flex items-center gap-space-sm group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-secondary-fixed group-hover:text-secondary">
<span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:scale-110">shield_moon</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-sm sm:text-base group-hover:text-secondary transition-colors">Spill-Proof Core</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Inner water-resistant lining</p>
</div>
</div>
<div className="flex items-center gap-space-sm group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-primary shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary-fixed group-hover:text-primary">
<span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:translate-x-1">local_shipping</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-sm sm:text-base group-hover:text-primary transition-colors">Fast KSA Delivery</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">2-4 days Riyadh &amp; Jeddah</p>
</div>
</div>
</div>
</div>
</section>
{/*  Curated Collection Grid  */}
<CollectionGrid />
{/*  Signature Custom & B2B Solutions Section  */}
<section className="w-full py-section bg-surface-container-high/40 relative overflow-hidden backdrop-blur-sm" id="b2b">
{/*  Organic contour background illustration  */}
<div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
<div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
{/*  Showcase Visual (6 Cols)  */}
<div className="lg:col-span-6 relative flex justify-center">
<div className="relative w-full max-w-lg aspect-square bg-card rounded-3xl p-space-lg shadow-xl overflow-hidden flex items-center justify-center border border-border/50 group">
<div className="relative w-full h-full flex items-center justify-center animate-gentle-float">
<Image src="/images/products/beanbag-custom-logo.jpg" alt="Bespoke Coffee Shop Custom Bean Bag" fill className="object-cover filter drop-shadow-md transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
</div>
<div className="absolute bottom-6 left-6 right-6 bg-surface/90 backdrop-blur-md p-space-md rounded-2xl shadow-lg flex items-center justify-between border border-white/60">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75"></span>
<span className="material-symbols-outlined relative z-10 text-xl">brush</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-sm flex items-center gap-1.5">
                    Habat Bon (حبة بن) Specialty Roastery
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Custom Calligraphy Embroidery • Al-Ula Lounge</p>
</div>
</div>
<span className="font-label-sm text-label-sm font-bold bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full shadow-xs">Case Study</span>
</div>
</div>
</div>
{/*  B2B Value Proposition (6 Cols)  */}
<div className="lg:col-span-6 flex flex-col gap-space-lg">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Commercial &amp; Hospitality Projects</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Bespoke Living for Saudi Cafes, Resorts &amp; Studios</h2>
<p className="font-body-xl text-body-xl text-on-surface-variant">
              From specialty coffee spaces in Riyadh to desert retreats in Al-Ula, Skoon crafts commercial-grade, branded seating customized with Arabic typography, crests, and performance fabrics.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="bg-card p-space-md rounded-xl shadow-sm border-l-4 border-l-transparent hover:border-l-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col gap-space-xs group">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-lg">edit_note</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-base group-hover:text-primary transition-colors">Custom Monograms &amp; Typography</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Precision thread embroidery of your identity, Arabic script, or brand motif.</p>
</div>
<div className="bg-card p-space-md rounded-xl shadow-sm border-l-4 border-l-transparent hover:border-l-secondary transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col gap-space-xs group">
<div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-lg">water_damage</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-base group-hover:text-secondary transition-colors">High-Traffic Water Repellency</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Hospitality-grade water and stain-repellent linings engineered for public venues.</p>
</div>
<div className="bg-card p-space-md rounded-xl shadow-sm border-l-4 border-l-transparent hover:border-l-tertiary transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col gap-space-xs group">
<div className="w-8 h-8 rounded-lg bg-surface-dim flex items-center justify-center text-on-surface group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-lg">palette</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-base group-hover:text-tertiary transition-colors">Curated Textile Sourcing</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Select from raw linen, textured boucle, or heavy canvas matched to your moodboard.</p>
</div>
<div className="bg-card p-space-md rounded-xl shadow-sm border-l-4 border-l-transparent hover:border-l-primary-light transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col gap-space-xs group">
<div className="w-8 h-8 rounded-lg bg-primary-fixed-dim flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-lg">inventory_2</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface text-base group-hover:text-primary transition-colors">Volume Tier Pricing</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Direct workshop wholesale rates for architectural firms, interior stylists, and retail venues.</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
<button className="shimmer-btn bg-secondary text-on-secondary hover:bg-accent-hover font-label-lg text-label-lg px-space-xl py-3.5 rounded-xl transition-all shadow-md text-center active:scale-95" type="button">
              Request B2B Catalog &amp; Swatches
            </button>
<a className="group font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors flex items-center justify-center gap-1.5 py-3" href="#">
<span className="">View Hospitality Lookbook</span>
<span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/*  Craftsmanship & Philosophy Section  */}
<section className="w-full py-section bg-transparent" id="ethos">
<div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="max-w-2xl mx-auto text-center flex flex-col gap-space-xs mb-space-xxl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">The Skoon Ethos</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Rooted in Tranquility (سكون)</h2>
<p className="font-body-xl text-body-xl text-on-surface-variant">
          We reject the disposable, noisily rustling sacks of the past. Skoon is designed as an architectural sculpture that cradles the spine and calms the room.
        </p>
</div>
{/*  3 Pillars Grid with Micro-Interaction Lift  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
<div className="card-hover-lift bg-card p-space-xl rounded-2xl flex flex-col gap-space-md shadow-sm relative overflow-hidden border border-border/40 group">
<div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-space-xs transition-transform duration-300 group-hover:scale-110">
<span className="material-symbols-outlined text-3xl">layers</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">Double-Lined Sanctuary</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Every piece houses a high-density, spill-proof inner bag filled with silent, virgin micro-beads. It contours without sagging and preserves its sculptural posture year after year.
          </p>
<div className="mt-auto pt-space-md flex items-center text-primary font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span className="">Silent beads, no squeaks</span>
</div>
</div>
<div className="card-hover-lift bg-card p-space-xl rounded-2xl flex flex-col gap-space-md shadow-sm relative overflow-hidden border border-border/40 group">
<div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-secondary mb-space-xs transition-transform duration-300 group-hover:scale-110">
<span className="material-symbols-outlined text-3xl">texture</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-secondary transition-colors">Tactile Elegance</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Woven with heavy natural cottons and breathable European linen that soften with time. Breathable in Riyadh summers and cozy during cool desert nights.
          </p>
<div className="mt-auto pt-space-md flex items-center text-secondary font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span className="">Pre-washed for shrink resistance</span>
</div>
</div>
<div className="card-hover-lift bg-card p-space-xl rounded-2xl flex flex-col gap-space-md shadow-sm relative overflow-hidden border border-border/40 group">
<div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-tertiary mb-space-xs transition-transform duration-300 group-hover:scale-110">
<span className="material-symbols-outlined text-3xl">all_inclusive</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors">Consciously Made</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Outer slipcovers detach in under a minute with hidden anti-scratch zips. Machine washable, easy to swap seasonally, and backed by lifetime bead top-up support.
          </p>
<div className="mt-auto pt-space-md flex items-center text-tertiary font-label-sm text-label-sm gap-1">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span className="">Circular refill guarantee</span>
</div>
</div>
</div>
</div>
</section>
{/*  Fabric & Swatch Order CTA / Sensory Banner with Interactive Swatch Elements  */}
<section className="w-full bg-secondary-fixed/30 py-space-xl backdrop-blur-sm relative overflow-hidden">
<div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="bg-card rounded-3xl p-space-lg md:p-space-xl shadow-lg flex flex-col lg:flex-row items-center justify-between gap-space-xl border border-border/40">
<div className="flex flex-col gap-space-sm max-w-xl">
<div className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-base">touch_app</span>
<span className="">Feel Before You Decide</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Order the Skoon Tactile Swatch Kit</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Test our organic cotton weaves, striped linens, and matte canvas under your own living room lighting. Includes 5 generous fabric swatches and color cards.
          </p>
<div className="flex items-center gap-space-md text-on-surface-variant text-label-sm font-label-sm pt-space-xs">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-sm">verified</span> SAR 35</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-sm">redeem</span> 100% credited toward your lounger</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
<div className="flex -space-x-3 overflow-hidden p-2">
<span className="inline-block w-12 h-12 rounded-xl bg-[#202020] shadow-md border-2 border-white transform -rotate-6 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 hover:z-20 cursor-pointer"></span>
<span className="inline-block w-12 h-12 rounded-xl bg-[#1e3a5f] shadow-md border-2 border-white transform rotate-3 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 hover:z-20 cursor-pointer"></span>
<span className="inline-block w-12 h-12 rounded-xl bg-[#5a1e27] shadow-md border-2 border-white transform -rotate-3 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 hover:z-20 cursor-pointer"></span>
<span className="inline-block w-12 h-12 rounded-xl bg-[#d4c9c2] shadow-md border-2 border-white transform rotate-6 transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 hover:z-20 cursor-pointer"></span>
</div>
<button className="shimmer-btn bg-secondary text-on-secondary hover:bg-accent-hover font-label-lg text-label-lg px-space-xl py-3.5 rounded-xl shadow-md transition-all whitespace-nowrap w-full sm:w-auto text-center active:scale-95" type="button">
            Order Swatch Kit (SAR 35)
          </button>
</div>
</div>
</div>
</section>
{/*  Editorial Testimonials & Architectural Press  */}
<section className="w-full py-section bg-transparent">
<div className="w-full px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
<div>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Voices of Repose</span>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Living in Quiet Contemplation</h2>
</div>
<div className="flex items-center gap-space-xs">
<div className="flex items-center text-secondary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-semibold ml-1">4.9 Average rating</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
{/*  Quote 1  */}
<div className="card-hover-lift bg-card p-space-lg rounded-2xl flex flex-col justify-between gap-space-lg shadow-sm border border-border/40">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center text-secondary text-sm">
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface leading-snug">
              “The Noir Striped lounger transformed our reading nook in Diriyah. It holds its structured form unlike conventional bean bags, effortlessly elevating the whole room.”
            </p>
</div>
<div className="flex items-center gap-space-sm pt-space-xs border-t border-muted-subtle/50">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-primary">FA</div>
<div>
<h4 className="font-label-md text-label-md font-bold text-on-surface">Fatima Al-Mansoor</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Interior Architect, Riyadh</p>
</div>
</div>
</div>
{/*  Quote 2  */}
<div className="card-hover-lift bg-card p-space-lg rounded-2xl flex flex-col justify-between gap-space-lg shadow-sm border border-border/40">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center text-secondary text-sm">
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{}}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface leading-snug">
              “We ordered 14 custom branded loungers for our roastery in Jeddah. The embroidery craftsmanship with our Arabic insignia was immaculate, and the fabric washes like a dream.”
            </p>
</div>
<div className="flex items-center gap-space-sm pt-space-xs border-t border-muted-subtle/50">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-secondary">TA</div>
<div>
<h4 className="font-label-md text-label-md font-bold text-on-surface">Tariq Al-Ghamdi</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Founder, Rawiyat Cafe</p>
</div>
</div>
</div>
{/*  Quote 3  */}
<div className="card-hover-lift bg-card p-space-lg rounded-2xl flex flex-col justify-between gap-space-lg shadow-sm border border-border/40">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center text-secondary text-sm">
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface leading-snug">
              “The quiet beads are a real revelation. No squeaking, perfectly silent when shifting posture during evening meditation. Skoon brought real tranquility into our home.”
            </p>
</div>
<div className="flex items-center gap-space-sm pt-space-xs border-t border-muted-subtle/50">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-bold text-tertiary">SA</div>
<div>
<h4 className="font-label-md text-label-md font-bold text-on-surface">Sara &amp; Omar</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">Homeowners, Al-Khobar</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
      </div>
    </div>
  );
}
