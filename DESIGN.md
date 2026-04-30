# Design Brief

## Purpose & Tone
Warm, editorial restaurant website. Inviting and curated — feels like the restaurant's own branded space, not generic e-commerce.

## Palette

| Token          | OKLCH           | Usage                                 |
|:---|:---|:---|
| **primary**    | `0.64 0.16 32`  | Warm terracotta — main CTAs, headers  |
| **secondary**  | `0.70 0.08 143` | Sage green — accents, category tags   |
| **accent**     | `0.24 0.06 20`  | Deep charcoal — high-contrast CTAs    |
| **background** | `0.98 0.01 60`  | Warm cream — main content area        |
| **card**       | `0.99 0.01 60`  | Cream with slight warmth              |
| **muted**      | `0.92 0.01 60`  | Light neutral — section dividers      |
| **destructive**| `0.60 0.18 16`  | Warm red — remove/delete actions      |

Dark mode maintains warmth — terracotta brightened, backgrounds dark charcoal, sage preserved for calm.

## Typography

| Tier       | Font         | Usage                  |
|:---|:---|:---|
| **display** | Fraunces     | Headings, restaurant name, section titles |
| **body**   | GeneralSans  | Menu descriptions, cart labels, body copy |
| **mono**   | GeistMono    | QR code metadata, order IDs, codes        |

Type scale: 3xl (32px), 2xl (28px), xl (24px), lg (20px), base (16px), sm (14px).

## Structural Zones

| Zone              | Treatment                                    |
|:---|:---|
| **Header/Nav**    | Warm terracotta background, white text, rounded corners |
| **Menu Content**  | Cream background, grid of cards with gentle shadows     |
| **Menu Cards**    | Rounded lg (12px), box-shadow-card, hover elevation     |
| **Sidebar/Cart**  | Soft muted background, sage accents for add-to-cart    |
| **Checkout**      | Clean card layout, QR centered, order summary below    |

## Spacing & Rhythm
Generous padding (24px sections), relaxed card spacing (gap-6), mobile-first stacked layout.

## Component Patterns
- **Menu Item Card**: Image, name (serif display), description, price + "Add to Cart" (primary button)
- **Cart Item**: Name, quantity select, price, remove (accent button)
- **CTA Buttons**: Primary (terracotta) for add/checkout, secondary (sage) for secondary actions
- **Category Filter**: Sage accent on active state

## Motion
Smooth transitions (0.3s) on hover states. Card elevation on hover. No bounce or spring animations — refined, purposeful.

## Signature Detail
Warm terracotta underline accent on section headings (serif display font) — signals personality and brand ownership.

## Mobile Responsiveness
- Cart accessible via drawer (md: sidebar)
- Menu grid: 1 col (sm) → 2 col (md) → 3 col (lg)
- Touch-friendly button sizing (min 48px height)
- Header condenses on small screens
