# Skoon Design System

## Brand Overview
Skoon (سكون) means tranquility. The brand is focused on comfort, high-quality handcrafted bean bags, and creating quiet moments. The design should reflect calmness, premium quality, and minimalistic elegance.

## Colors

### Primary Palette
- **Primary:** `#5B7B6A` - A calming, muted sage green. Used for primary actions, focus rings, and selection highlights.
- **Primary Light:** `#7A9B8A` - Used for hover states on primary elements.

### Accent Palette
- **Accent:** `#C4703F` - A warm terracotta/clay orange. Used for specific calls to action and B2B highlights.
- **Accent Hover:** `#A85D33` - Used for hover states on accent elements.
- **Brand Brown:** `#3C2415` - Deep, rich brown for brand-specific grounding.

### Neutrals (Surfaces & Backgrounds)
- **Background:** `#FFFFFF` - Pure white for the main app background.
- **Surface:** `#F5F0EB` - A warm, off-white/beige tone for sections to create subtle contrast against the background.
- **Card:** `#FAF8F5` - A slightly lighter beige for card backgrounds.
- **Border:** `#E5DFD8` - Light warm gray for subtle borders and dividers.

### Text Colors
- **Foreground:** `#2D2926` - Off-black for primary text, headings, and high-contrast elements. Ensures readability without the harshness of pure black.
- **Muted Foreground:** `#7A756E` - Warm grayish-brown for secondary text, descriptions, and less critical information.
- **Card Foreground:** `#2D2926` - Text color inside cards (same as foreground).

### Semantic Colors
- **Muted:** `#D4CFC8` - Used for disabled states or subtle backgrounds.
- **Destructive:** `#C44040` - Red for destructive actions or errors.

## Typography

### Font Families
- **Display Font:** `Fraunces`, serif
  - Used for all headings (h1 to h6).
  - Characteristics: Elegant, slightly organic, premium feel.
  - Line height: `1.15`
  - Letter spacing: `-0.015em` (tightened slightly for headings).
- **Body Font:** `DM Sans`, sans-serif
  - Used for all paragraph text, UI elements, and buttons.
  - Characteristics: Clean, modern, highly legible.
  - Line height: `1.65` for relaxed, comfortable reading.

## Spacing & Layout
- **Base scale:** Tailwind CSS default spacing scale.
- **Section Spacing:** 
  - Default: `6rem` (`--spacing-section`)
  - Large: `8rem` (`--spacing-section-lg`)
- **Interactive Elements:** Smooth transitions applied to all links and buttons (`transition: color 200ms ease, background-color 200ms ease, border-color 200ms ease, opacity 200ms ease`).

## Border Radius (Rounding)
- **sm:** `0.375rem`
- **md:** `0.5rem`
- **lg:** `0.75rem`
- **xl:** `1rem`
- **2xl:** `1.25rem`
- Bean bag product images and soft UI components generally favor larger border radii (`xl` to `2xl`) to echo the soft shapes of the products.

## Interactive States & Accessibility
- **Focus Ring:** Accessible and on-brand, using a `2px` solid outline of `--color-primary` with a `2px` offset (`outline-offset: 2px`).
- **Selection:** Text selection uses `--color-primary` background with white text.
- **Reduced Motion:** Respects `prefers-reduced-motion` by disabling animations and smooth scrolling when requested.

## Components (General Guidelines)
- **Buttons:** 
  - Primary buttons use solid `#2D2926` (Foreground) or `#5B7B6A` (Primary) backgrounds with white text.
  - Rounded corners, typically `lg` or full pill shapes depending on the context.
  - Must include hover transitions.
- **Cards/Products:** 
  - Use `Surface` or `Card` backgrounds with `2xl` border radius.
  - Product images should be edge-to-edge or have generous padding.
  - Hovering over a product card typically scales the image up slightly (e.g., `scale-105`) over a smooth `500ms` duration.
- **3D Elements:**
  - The application features interactive 3D scrolling elements (via React Three Fiber & GSAP). 
  - 3D materials use `MeshDistortMaterial` with colors sourced from the palette (e.g., `#d4c9c2`, `#a8b5b2`, `#e3d5ca`) to match the soft, muted aesthetic of the brand.
