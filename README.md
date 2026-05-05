# Serena Squared Spanish Flashcards

A mobile-friendly Spanish study app built with TanStack Start, React, Vite, and Tailwind CSS. The app helps learners review themed vocabulary and phrases with animated two-sided flashcards, category filters, progress tracking, and quick self-assessment controls.

## Live App

Visit the deployed app at: [https://serenasquared.lovable.app/](https://serenasquared.lovable.app/)

## Features

- **Interactive flashcards**: tap a card to flip between prompt and answer.
- **Two-way practice**: cards are generated in both Spanish-to-English and English-to-Spanish directions.
- **Category filters**: focus on one topic at a time or study the full deck.
- **Progress tracking**: see where you are in the current filtered deck.
- **Self-assessment**: mark cards as correct, needing review, or skip to the next card.
- **Shuffle and reset**: restart a randomized deck whenever you want another round.
- **Responsive UI**: designed for phone-sized screens while still working well on desktop.

## Tech Stack

- [React 19](https://react.dev/)
- [TanStack Router / TanStack Start](https://tanstack.com/router/latest)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Cloudflare Workers](https://workers.cloudflare.com/) deployment configuration

## Getting Started

### Prerequisites

- Node.js 22 or newer is recommended.
- npm is available through the included `package-lock.json` workflow. A Bun lockfile is also present if you prefer Bun.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The local development URL will be printed in your terminal by Vite.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the codebase

```bash
npm run lint
```

### Format files

```bash
npm run format
```

## Project Structure

```text
src/
├── components/
│   ├── Flashcards.tsx      # Main flashcard experience
│   └── ui/                 # Reusable UI primitives
├── data/
│   └── flashcards.ts       # Flashcard categories and vocabulary data
├── routes/
│   ├── __root.tsx          # App shell, metadata, fonts, and global links
│   └── index.tsx           # Home route that renders the flashcards
├── router.tsx              # Router configuration and default error UI
└── styles.css              # Tailwind setup, theme tokens, and global styles
```

## Editing the Flashcards

Flashcard content lives in `src/data/flashcards.ts`.

Each base card includes:

- `spanish`: the Spanish word or phrase
- `english`: the English translation
- `category`: the topic used by the category filter

The app automatically creates both study directions from the base cards, so adding one entry gives learners a Spanish-to-English and an English-to-Spanish card.

## Deployment Notes

This project includes a `wrangler.jsonc` configuration for Cloudflare Workers and uses `@lovable.dev/vite-tanstack-config` to provide the TanStack Start, React, Tailwind, Cloudflare, and path-alias Vite setup.

For Lovable-hosted updates, publish through the Lovable workflow connected to the live app URL above.
