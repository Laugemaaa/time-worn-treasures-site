# Time-Worn Treasures

Time-Worn Treasures is a Vite + React storefront for curated vintage watches. The site presents a collection landing page, individual watch detail pages, and auction metadata designed for Tradera-style listings.

## What the project includes

- A home page with hero, philosophy, product grid, testimonials, and shared navigation/footer
- Dynamic product detail routes at `/watch/:slug`
- Localized UI copy through the app's language provider
- Mock watch inventory data in `src/data/products.ts`
- A placeholder mapper for future Tradera API integration

## Tech stack

- React 18
- TypeScript
- Vite
- React Router
- TanStack Query
- Tailwind CSS
- shadcn/ui and Radix UI primitives
- Vitest and Testing Library

## Getting started

Install dependencies with your preferred package manager:

```bash
npm install
```

Or, if you use Bun:

```bash
bun install
```

Start the development server:

```bash
npm run dev
```

The app is configured to run on:

```text
http://localhost:8080
```

## Available scripts

```bash
npm run dev
npm run build
npm run build:dev
npm run lint
npm run test
npm run test:watch
```

## Project structure

```text
src/
  components/   Reusable UI and page sections
  data/         Mock product data and mapping helpers
  hooks/        Shared React hooks
  i18n/         Language provider and translations
  lib/          Utility helpers
  pages/        Route-level pages
  test/         Test setup and specs
```

## Notes for future development

- Product data is currently mocked and includes simulated loading delays
- `mapTraderaProduct` is intentionally left as a stub until real API integration is added
- Some source strings currently show encoding artifacts and should be normalized before production release

