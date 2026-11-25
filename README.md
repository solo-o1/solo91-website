# Solo 91 Cafe & Restaurant — Website

Dark editorial one-page site for Solo 91 (Zarqa branch). React + Vite + TypeScript + Tailwind CSS + Motion + shadcn/ui (Radix) + lucide-react.

## Run
npm install
npm run dev        # local development
npm run build      # production build in dist/
npm run preview    # serve the build

## Where to edit
- Menu items and prices: src/data/menu.ts
- Phone, WhatsApp, Instagram, address, hours: src/data/site.ts
- Photos: public/images/ — hero video: public/media/hero.mp4 (poster: hero-poster.jpg)

## Notes
- The reservation form opens WhatsApp (+962 79 928 0622) with the booking details pre-filled; no server is needed.
- dist/ is a static site: deploy it to Netlify, Vercel, Cloudflare Pages or any static host.
