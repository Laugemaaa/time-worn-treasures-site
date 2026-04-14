

## Vintage Watch Showcase — Implementation Plan

### Overview
A warm, story-driven vintage watch showcase website with an archival aesthetic. Users browse a curated collection, read editorial stories about each watch, and continue to Tradera auctions. Built with React, Tailwind CSS, and the existing shadcn/ui foundation.

### Design System Setup
- **Color palette**: Warm beige/parchment backgrounds (#F5F0E8), sand surfaces (#E8DFD0), espresso footer (#2C2118), charcoal text (#1A1A1A), warm gray secondary (#6B6560), navy blue for all interactive elements only (#1B3A5C / #132A44 hover)
- **Typography**: Playfair Display (headings), DM Sans (body/UI) via Google Fonts
- **Subtle paper grain texture** on primary background via CSS
- **CSS custom properties** for full palette, type scale, spacing
- **Motion tokens**: spring-like easing, sub-300ms transitions, `prefers-reduced-motion` support, hover effects gated behind `@media (hover: hover)`

### Data Layer
- `src/data/products.ts` — mock dataset (all 8 watches provided), exports `getProducts()` and `getProductBySlug()` async functions
- `Product` type definition matching the spec exactly
- Single-file swap point for future Tradera API integration with `mapTraderaProduct()` placeholder

### Pages & Routing
1. **Home page** (`/`) — Hero → Philosophy → Product Grid → Testimonials → Footer
2. **Product Detail page** (`/watch/:slug`) — Full editorial view with auction data and Tradera CTA
3. **Not Found** — Warm-toned 404

### Components

**Layout:**
- `Navbar` — Sticky, logo left, nav links right. Hamburger → slide-in drawer on mobile. Active state styling. Skip-to-content link.
- `Footer` — Dark espresso background, brand description, nav links, external Tradera link, trust line
- `SectionWrapper` — Consistent padding, max-width, viewport-triggered staggered entrance animations

**Home Sections:**
- `HeroSection` — Split layout (headline + watch image), serif headline, navy CTA button, staggered fade-in entrance
- `PhilosophySection` — Narrow centered text column, warm editorial copy, staggered paragraph reveals
- `ProductGrid` — Responsive 3/2/1 column grid with staggered card entrance
- `TestimonialsSection` — Distinct sand background, 2-3 placeholder testimonial cards

**Shared Components:**
- `ProductCard` — Full-card click target, image → title → snippet → auction metadata. Hover lift/shadow, press scale-down, keyboard focus ring. Graceful degradation for missing fields.
- `AuctionMetadata` — Compact row: price, bids, viewers, time remaining. Only renders available fields. Countdown updates quietly, urgency color shift under 1 hour.
- `CTAButton` — Navy blue, tactile press animation (scale 0.97), consistent across site
- `TestimonialCard` — Quote, attribution, optional avatar placeholder

**Detail Page:**
- `ProductDetail` — Two-column desktop / stacked mobile. Back link, large image, title, full description, history note (pull-quote style), auction data block, "View on Tradera" CTA with external icon + handoff notice
- Skeleton loading state matching layout
- Error state with retry + direct Tradera fallback link

### Motion Design
- All entrance animations via Intersection Observer, play once
- Cards/sections: translateY(10px) + opacity fade, ~60ms stagger
- Buttons: 150ms background transition on hover, scale(0.97) on active
- Cards: scale(1.02) + shadow lift on hover (CSS transitions, not keyframes)
- Page load hero sequence under 800ms
- `prefers-reduced-motion`: collapse to simple opacity fades
- No parallax, no particles, no bounce effects

### Accessibility
- WCAG AA contrast on all text/background combinations
- Semantic HTML (header, main, nav, article, section, footer)
- Cards as focusable links with visible navy focus rings
- Descriptive alt text on all images
- 44×44px minimum touch targets
- Skip-to-content link

### Loading & Error States
- Skeleton placeholders (warm-toned pulsing rectangles) matching card layout
- Friendly error message with retry button
- Empty state message when no watches available

