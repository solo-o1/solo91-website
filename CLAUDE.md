# Solo 91 Cafe & Restaurant website

One-page site for Solo 91, Zarqa branch (Madinat Al-Sharq, Jordan). Stack: React 19 + Vite 6 + TypeScript + Tailwind CSS 3 + motion + shadcn/ui (Radix Tabs, Select) + lucide-react.

## Commands
- `npm install`, then `npm run dev` (http://localhost:5173)
- `npm run build` writes a static site to `dist/`. `base: './'`, so `dist/index.html` also works from a subfolder (VS Code Live Preview).

## Where things live
- Menu (26 categories, prices in JD, English + Arabic names): `src/data/menu.ts`
- Contact, WhatsApp, Instagram, address, hours: `src/data/site.ts`
- Sections: `src/sections/` (Navbar, Hero, Story, Menu, Signature, Gatherings, Words, Reservations, Footer)
- Shared pieces (gold underline heading, reveal, price, grain overlay): `src/components/shared.tsx`
- Design tokens: `src/index.css` (`:root`, with `--c-*` HSL channel vars so Tailwind opacity modifiers work)
- Photos: `public/images/`. Hero video: `public/media/hero.mp4`, built from the café's own photos.

## Decisions already made
- Content comes from the old site solo91jo.com and its Zarqa menu boards. Phone +962 79 928 0622 is the Zarqa branch. The Irbid branch was left out on purpose.
- No invented reviews. The quote slider ("In Our Words") uses lines from the café's own About text.
- There is no backend. The reservation form and the "Plan Your Gathering" button open WhatsApp with the details pre-filled.
- Image paths in JSX are relative (`./images/...`). Keep them relative.
- Cormorant numerals use `lining-nums` so "91" and prices render at full height.
- Menu tabs wrap onto several lines on mobile instead of scrolling sideways.

## Open items to confirm with the café
- Transliterations: Mango Giraro, Kaif, Arabiya milkshake, Iced Shaken.
- The Gatherings photo shows the "Solo Show", which only appears on the Irbid menu.

## Arabic / English
- Language button (عربي / EN) in the navbar and the mobile menu. All copy lives in `src/i18n.tsx` (`en` and `ar` objects with the same shape); menu items carry both names in `src/data/menu.ts`.
- Arabic switches the page to `dir="rtl"`, uses the Alexandria font, and turns off letter-spacing for Arabic text (`:lang(ar)` in `src/index.css`).
- `?lang=ar` in the URL opens the Arabic version directly; the choice is remembered in localStorage.
- The Arabic hero uses a mirrored video edit (`public/media/hero-rtl.mp4`) so the text never covers the product. The Signatures section keeps its left text column in both languages because its photo has "Solo" written on the plate.
