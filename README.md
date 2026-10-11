# Aura Studio

A single-page portfolio for a London-based creative agency, built with Next.js
App Router, React, and Tailwind CSS 4. It includes responsive navigation, an
animated hero headline, service cards, and a contact form interface.

## Requirements

- Node.js 20.9 or newer
- npm

## Setup

Install the exact dependencies recorded in the lockfile:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

Run the linter and production build before committing:

```bash
npm run lint
npm run build
```

To run the production build locally:

```bash
npm run start
```

## Project structure

- `app/page.js` composes the home page sections.
- `app/layout.js` defines the root layout, font, and page metadata.
- `app/components/` contains the navigation, hero, content sections, contact
  form, and footer.
- `app/globals.css` imports Tailwind CSS and defines the site theme and styles.

The contact form currently validates input in the browser only; it does not
send or store messages. Configure server-side message delivery before
presenting it as a working contact channel.
