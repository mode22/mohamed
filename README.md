# 💍 Wedding Invitation — Mohamed & Ola

A luxury interactive Arabic wedding invitation website built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Cinematic Loading Screen** — Animated monogram with progress bar
- **Hero Section** — Arabic calligraphy title with gold shimmer effects
- **Wedding Invitation** — Elegant Arabic invitation text with glassmorphism cards
- **Wedding Details** — Interactive calendar, location map button, save-to-calendar
- **Live Countdown** — Real-time countdown with flip animations
- **Event Timeline** — Visual timeline with animated dots and glow effects
- **Gallery** — Placeholder grid ready for real photos
- **RSVP Form** — Guest confirmation with animated success state
- **Background Music** — Play/pause with fade-in/fade-out
- **Bottom Navigation** — Mobile app-style navigation
- **Floating Particles** — Ambient golden sparkle effects
- **RTL Arabic Support** — Full right-to-left layout

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **GSAP** (available for complex sequences)
- **Lenis** (smooth scrolling)

## 📦 Installation

```bash
# Clone the repository
git clone <repo-url>
cd wedding-invitation

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎵 Adding Background Music

1. Download a royalty-free romantic instrumental from [Pixabay Music](https://pixabay.com/music/)
2. Place the MP3 file in `public/music/`
3. Rename it to `background-music.mp3`

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Design system & CSS variables
│   ├── layout.tsx           # Root layout (RTL, fonts, SEO)
│   └── page.tsx             # Main page orchestrator
├── components/
│   ├── LoadingScreen.tsx     # Cinematic loading animation
│   ├── HeroSection.tsx       # Hero with monogram & date
│   ├── InvitationSection.tsx # Arabic invitation card
│   ├── WelcomeMessage.tsx    # Emotional welcome text
│   ├── WeddingDetails.tsx    # Location & calendar
│   ├── CountdownSection.tsx  # Live countdown timer
│   ├── EventTimeline.tsx     # Event program timeline
│   ├── GallerySection.tsx    # Photo gallery placeholder
│   ├── RSVPSection.tsx       # RSVP form
│   ├── ThankYouSection.tsx   # Closing section
│   ├── BottomNavigation.tsx  # Fixed bottom nav
│   ├── ui/
│   │   ├── GlassCard.tsx     # Glassmorphism card
│   │   └── LuxuryButton.tsx  # Animated luxury button
│   └── decorations/
│       ├── GoldOrnament.tsx   # SVG gold decorations
│       └── FloatingParticles.tsx # Ambient particles
├── hooks/
│   ├── useCountdown.ts       # Countdown timer hook
│   ├── useMusic.ts           # Audio playback hook
│   └── useSmoothScroll.ts    # Lenis smooth scroll
└── lib/
    └── animations.ts         # Framer Motion variants
```

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Brown | `#2a2420` | Primary background |
| Warm Charcoal | `#3a3430` | Secondary background |
| Gold | `#c9a96e` | Accent, highlights |
| Champagne | `#e8dcc8` | Heading text |
| Warm White | `#f5f0eb` | Primary text |
| Soft Beige | `#c8bfb4` | Secondary text |

### Typography
| Role | Font |
|------|------|
| Arabic Headings | Aref Ruqaa |
| Arabic Body | Tajawal |
| English Text | Cormorant Garamond |
| Numbers | Playfair Display |

## 📱 Responsive Design

Optimized for:
- iPhone & Android phones
- Tablets (portrait & landscape)
- Desktop screens

## ♿ Accessibility

- RTL layout support
- ARIA labels on all interactive elements
- Keyboard navigation
- `prefers-reduced-motion` support
- Focus-visible states

## 🚀 Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to Vercel:
```bash
npx vercel
```

## 📝 Customization

### Update Wedding Information
- **Names**: Edit in `HeroSection.tsx`, `InvitationSection.tsx`, `WelcomeMessage.tsx`, `ThankYouSection.tsx`
- **Date**: Edit in `HeroSection.tsx`, `WeddingDetails.tsx`, `CountdownSection.tsx`
- **Location URL**: Edit `LOCATION_URL` in `WeddingDetails.tsx`
- **Event Times**: Edit the `events` array in `EventTimeline.tsx`

### Add Real Photos
Replace the placeholder grid in `GallerySection.tsx` with actual `<Image>` components.

---

Made with 💛 for Mohamed & Ola's wedding
