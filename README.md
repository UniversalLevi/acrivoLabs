# Acrivo Labs Website

A modern, professional website for Acrivo Labs built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Dark theme with blue and orange accent colors from the brand logo
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Fast Performance**: Built with Next.js App Router for optimal performance
- **Accessible**: Semantic HTML and proper ARIA labels

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/        # React components
│   ├── layout/       # Header, Footer, Navigation
│   ├── sections/     # Homepage sections
│   └── ui/          # Reusable UI components
├── lib/              # Utilities and constants
└── types/            # TypeScript type definitions
```

## Configuration

### Update Contact Information

Edit `src/lib/constants.ts` to update:
- Email address
- WhatsApp number
- Working hours

### Update Domain

Update the domain in:
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/layout.tsx` (metadataBase)

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform that supports Next.js

## Pages

- `/` - Homepage
- `/about` - About Us
- `/services` - Services
- `/work` - Portfolio
- `/work/[slug]` - Individual project pages
- `/contact` - Contact page
- `/legal/privacy` - Privacy Policy
- `/legal/terms` - Terms & Conditions

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette.

### Content

Most content is managed in `src/lib/constants.ts`:
- Services
- Process steps
- Portfolio projects
- Contact information

## License

Copyright © 2024 Acrivo Labs. All rights reserved.
