# 💍 Clara & Marc — Wedding Website

A fully custom, responsive wedding website for Clara & Marc, built with React + Vite. The site is deployed to Firebase Hosting and includes all the practical information guests need, with a personalised Japan honeymoon theme throughout the Gifts section.

🌐 **Live:** [casament-clara-i-marc.web.app](https://casament-clara-i-marc.web.app)

---

## Tech Stack

- **React 18** — component-based UI with lazy loading and Suspense for performance
- **Vite** — fast bundler with per-section code splitting
- **Vanilla CSS** — custom design system with CSS variables (gold, cream, dark) and Google Fonts
- **Firebase Hosting** — static hosting with global CDN

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen landing with the couple's names, date and venue |
| **Details** (`#details`) | Venue info (Hotel Estela Barcelona), address, and a photo carousel |
| **Timeline** (`#timeline`) | Day schedule: Benvinguda · Cerimònia · Aperitiu · Sopar · Festa |
| **Gifts** (`#gifts`) | Japan-themed gift section with IBAN (click to copy), Bizum info, and a shuffled row of custom chibi illustrations |
| **RSVP** (`#rsvp`) | Attendance confirmation form |
| **Footer** | Copyright and social links |

---

## Features

- 📱 **Fully responsive** — designed mobile-first
- 🎨 **Custom design system** — gold, cream and dark palette with smooth animations
- 💅 **Custom SVG components** — `BizumLogo.jsx` for the inline Bizum payment logo
- 🖼️ **Lazy image loading** — `loading="lazy"` on all below-the-fold images
- ⚡ **Code splitting** — all sections below the Hero load asynchronously via `React.lazy`
- 🎲 **Randomised chibi row** — 9 custom chibi illustrations (Korin, Sushi, Dorayaki, Taiyaki, Yawara Inokuma, Ramen, Doraemon, Shin Chan, Kinnikuman) appear in a random order on each visit, using a Fisher-Yates shuffle in `useMemo`
- 📋 **IBAN copy button** — click the bank details box to copy to clipboard with visual feedback

---

## Project Structure

```
src/
├── assets/                  # Images and custom chibi PNGs
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Details/
│   │   └── Carousel.jsx     # Auto-advancing hotel photo carousel
│   ├── Timeline/
│   │   ├── Timeline.jsx
│   │   └── Icons.jsx        # Custom SVG icons for each timeline event
│   ├── Gifts/
│   │   ├── Gifts.jsx        # Llista de Noces section with chibi shuffle
│   │   └── BizumLogo.jsx    # Isolated Bizum SVG logo component
│   ├── RSVP/
│   └── Footer/
├── App.jsx                  # Root layout with React.lazy imports
└── index.css                # Global design tokens and base styles
```

---

## Getting Started

```bash
npm install
npm run dev       # Local dev server at http://localhost:5173
npm run build     # Production build into /dist
```

### Deploy to Firebase

```bash
npx firebase-tools deploy
```

> Make sure you are logged in (`npx firebase-tools login`) and the project is configured in `firebase.json`.
