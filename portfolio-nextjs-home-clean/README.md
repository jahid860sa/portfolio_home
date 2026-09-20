# Xiami Portfolio Home — Next.js + GSAP

A clean single-page recreation of the supplied portfolio homepage. The blurred screenshot crops were replaced with newly prepared high-resolution assets.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Main files

- `app/page.jsx` — home route
- `components/HomePage.jsx` — full homepage markup and GSAP animations
- `app/globals.css` — responsive styling
- `data/home.js` — page content data
- `public/assets/images/` — high-resolution page imagery

The Next.js image optimizer is disabled in `next.config.mjs` so the original prepared PNG assets are served without recompression.
