# Fenil Kareliya — Cosmic × Cybersecurity Portfolio
## Milestone 19: Public Production Launch

This repository contains the complete, production-ready personal portfolio for **Fenil Kareliya**, deployed publicly via GitHub Pages at:
**https://fenilk2.github.io/Fenil_Kareliya/**

---

### Project Identity & Aesthetic

- **Cosmic Exploration × Cybersecurity × Personal Evolution**
- Cinematic deep-space atmosphere with subtle nebula gradients, interactive Three.js stars, and precision telemetry accents.
- **Palette**: Deep cosmic space (`#050611`), cyan (`#72e5ff`), electric blue (`#52d9ff`), violet (`#9b8cff`), mint (`#75efd0`), and amber (`#ffb86c`).
- **Typography**: Manrope (`--sans`) and DM Mono (`--mono`).
- **Brand Signature Symbol**: Custom geometric **F + cosmic orbital ring** icon with a celestial satellite spark and starlight glint.
- **Strictly honest posture**: Presents real projects, verified capabilities, and authentic communication channels without fabricated metrics, artificial download counts, or false claims.

---

### Brand Identity & Favicon Details

A cohesive brand identity icon serves as the personal signature in every browser tab, bookmark, and mobile home screen:

#### 1. Design Geometry & Symbolism
- **Letterform "F"**: Clean, bold geometric initial in Starlight White (`#ffffff`) and Glacial Cyan (`#72e5ff`) gradient, anchored on deep midnight space (`#050611`).
- **Cosmic Orbital Ring**: An inclined celestial orbit (`-26°`) looping through the letterform in 3D, styled with an Electric Cyan (`#72e5ff`) to Nebula Violet (`#9b8cff`) gradient.
- **Satellite Spark & Starlight Glint**: Glowing cyan celestial node and crisp 4-point stellar glint emphasizing cosmic exploration.
- **Micro-Scale Legibility**: Engineered specifically to remain recognizable and crisp at 16 × 16, 32 × 32, and high-DPI displays.

#### 2. Multi-Resolution Format Support
- **Scalable SVG (`/icon.svg`)**: Lossless vector favicon dynamically loaded by modern browsers (Chrome, Edge, Firefox, Safari) at any viewport scale.
- **Dual-Frame ICO (`/favicon.ico`)**: Multi-resolution binary ICO packaging 32 × 32 and 16 × 16 PNG frames for legacy browsers and tab bars.
- **Apple Touch Icon (`/apple-icon.svg`)**: 180 × 180 high-resolution format for iOS / iPadOS home screens.
- **Native App Router Metadata Strategy**: Favicon assets are placed in `src/app/` (`src/app/icon.svg`, `src/app/favicon.ico`, `src/app/apple-icon.svg`), which Next.js App Router automatically handles as metadata routes, serving `/icon.svg` and `/favicon.ico` seamlessly in development and exporting them directly to the root of `out/` during static build without duplicate route collisions.

---

### Chromatic Scroll Typography Architecture

- **Cosmic Light Flowing Through Typography**: Headings and subheadings gradually evolve their gradient shades as the visitor scrolls through the page.
- **Performant Viewport Tracking Engine (`src/components/ChromaticScroll.tsx`)**: Single passive `requestAnimationFrame` loop with `IntersectionObserver` element culling. Directly updates `--chromatic-progress` CSS custom properties with zero React re-renders.
- **Reusable Typography Component (`src/components/ScrollGradientText.tsx`)**: Supports `primary`, `secondary`, and `subheading` hierarchy variants.

---

### Technical Architecture & Stack

- **Framework**: [Next.js 15.5.28](https://nextjs.org/) (App Router, static export mode `output: "export"`, `trailingSlash: true`).
- **UI & Runtime**: [React 19.1.0](https://react.dev/), [React DOM 19.1.0](https://react.dev/).
- **Language**: [TypeScript 5.8.3](https://www.typescriptlang.org/) (Strict type checking, zero `any` evasions).
- **3D Graphics**: [Three.js 0.179.1](https://threejs.org/) & [@react-three/fiber 9.1.2](https://github.com/pmndrs/react-three-fiber).
- **Styling & Motion**: Vanilla CSS tokens with hardware-accelerated transforms, `requestAnimationFrame` tilt and chromatic engines, and full reduced-motion compliance.
- **Linting & Code Quality**: [ESLint 9.30.1](https://eslint.org/) with `eslint-config-next`.
- **CI/CD & Deployment**: GitHub Actions workflow deploying pre-rendered static artifacts directly to GitHub Pages.

---

### Prerequisites

- **Node.js**: `18.18.0` or higher (Node 22 LTS recommended).
- **Package Manager**: `npm` (v9 or v10).
- **Operating System**: Cross-platform (Windows, macOS, Linux).

---

### Installation & Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# The application will be available at http://localhost:3000/
```

---

### Production Build & Preview

```bash
# 1. Generate production static build (all static routes exported to out/)
npm run build

# 2. Preview the static export locally
npx serve@latest out
```

---

### Quality Assurance & Verification Commands

```bash
# TypeScript strict type checking
npm run typecheck

# ESLint code style and best practice checks
npm run lint

# Complete production build (typecheck + lint + static export)
npm run build
```

---

### Complete Route Map (13 Pre-rendered Routes)

| Route | Title | Brand & Favicon Integration |
|---|---|---|
| `/` | **CosmoVerse Home** | Custom F+Orbit favicon, 3D canvas, chromatic typography, full telemetry HUD |
| `/about/` | **Beyond the Interface** | Custom F+Orbit favicon, personal narrative, principles, and interests |
| `/skills/` | **Constellation of Capabilities** | Custom F+Orbit favicon, 2D SVG constellation, 7 capabilities, 4 pathways |
| `/journey/` | **The Evolution Timeline** | Custom F+Orbit favicon, 5 evolutionary stages, orbital signal art |
| `/projects/` | **The Mission Archive** | Custom F+Orbit favicon, mission filter toolbar, real-time search, inspector |
| `/projects/cosmoverse/` | **CosmoVerse Case File** | Custom F+Orbit favicon, WebGL scientific simulation brief |
| `/projects/gravityflip/` | **GravityFlip Case File** | Custom F+Orbit favicon, 2D physics and gameplay mechanics dossier |
| `/projects/scamshield-india/` | **ScamShield India Case File** | Custom F+Orbit favicon, regex heuristic threat parsing dossier |
| `/projects/cinematic-shorts/` | **Cinematic Shorts Case File** | Custom F+Orbit favicon, visual storytelling and pacing dossier |
| `/contact/` | **Establish the Connection** | Custom F+Orbit favicon, direct communication console & channels |
| `/_not-found/` | **Cosmic 404 Lost Sector** | Custom F+Orbit favicon, telemetry recovery coordinates |
