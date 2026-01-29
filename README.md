# Sparkling Clean Oven Cleaning - Website

A premium, dark-themed static website built with Astro for Sparkling Clean Oven Cleaning, a professional oven cleaning service in Dorset, UK.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/0riceisnice0-hash/Sparkling-Clean.git
cd Sparkling-Clean
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── Icon.astro
│   ├── ServiceCard.astro
│   ├── PriceCard.astro
│   ├── ReviewCard.astro
│   ├── CTASection.astro
│   └── BeforeAfter.astro
├── data/                # Centralized content (edit here to update site)
│   ├── business.ts      # Business info, phone, email
│   ├── prices.ts        # All pricing information
│   ├── services.ts      # Service listings
│   ├── areas.ts         # Coverage areas
│   ├── reviews.ts       # Customer reviews (sample)
│   └── blog.ts          # Blog posts
├── layouts/
│   └── Layout.astro     # Base page layout
├── pages/               # All website pages
│   ├── index.astro      # Homepage
│   ├── services/        # Service pages
│   ├── areas/           # Area SEO pages
│   ├── blog/            # Blog posts
│   └── ...
└── styles/
    └── global.css       # Global styles and theme
public/
├── favicon.svg
└── robots.txt
```

## ✏️ How to Edit Content

### Changing Business Information

Edit `src/data/business.ts`:
- Phone number
- Email address
- Contact name
- Service area description

### Updating Prices

Edit `src/data/prices.ts` - changes will reflect across all pricing sections on the site.

### Adding/Editing Services

Edit `src/data/services.ts` - the service pages are generated from this data.

### Adding Coverage Areas

Edit `src/data/areas.ts` - area pages are generated automatically.

### Adding Blog Posts

Edit `src/data/blog.ts` - add new entries following the existing template structure.

### Customising Reviews

Edit `src/data/reviews.ts` - replace sample reviews with real testimonials.

## 🎨 Design

The site uses a premium dark theme:
- **Background**: Near black (#0a0a0a)
- **Text**: Off-white (#f5f5f5) and grey (#a0a0a0)
- **Accent**: Gold (#d4af37)

Edit `src/styles/global.css` to customise the theme.

## 📧 Contact Form

The contact form is configured for [Formspree](https://formspree.io/). To enable:

1. Create a free Formspree account
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in `src/pages/contact.astro`

## 🚀 Deploying to GitHub Pages

The site is configured for GitHub Pages deployment.

### Automatic Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Manual Deployment

1. Build the site: `npm run build`
2. Deploy the `dist/` folder to your hosting

## 📱 Features

- ✅ Fully responsive design
- ✅ Dark luxury theme with gold accents
- ✅ SEO optimised with meta tags, Open Graph, and schema markup
- ✅ Sitemap generation
- ✅ Accessibility features (skip links, ARIA labels, keyboard navigation)
- ✅ Fast performance (minimal JS, lazy loading ready)
- ✅ Easy content management via data files
- ✅ Before/after comparison slider
- ✅ Mobile-friendly navigation

## 📄 Pages

### Core Pages
- Home
- Services (index + individual service pages)
- Prices
- About
- Gallery
- FAQs
- Reviews
- Contact

### Area SEO Pages
14 local area pages for Dorset towns

### Blog
6 starter blog posts with SEO-focused topics

### Legal
- Privacy Policy
- Terms and Conditions

## 🔧 Technical Details

- **Framework**: Astro 4.x
- **Styling**: CSS (no framework)
- **JavaScript**: Minimal, for mobile menu and slider
- **Deployment**: Static (GitHub Pages compatible)