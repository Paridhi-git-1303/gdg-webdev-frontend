# GDG RBU — beginner-friendly Next.js website

A responsive GDG RBU community landing page. It keeps the original sections, colours, geometric shapes, group photo, event cards, FAQ accordion, and dark/light switch.

## Features
- **Next.js App Router** for the page and layout.
- **TypeScript** for the page state and chat message types.
- **GDG RBU Helper**: a small rule-based assistant that answers common questions about events, joining, and getting started. It works locally and does not need an API key. It is a simple demo assistant, not a connected large-language-model service.
- Responsive layout, mobile navigation, theme toggle, and interactive FAQs.

## Run it
1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address printed in the terminal (usually `http://localhost:3000`).

## Build for production
Run `npm run build`, then `npm start`.

## Deploy
Push the folder to GitHub, import the repository into Vercel, and keep the framework preset as **Next.js**.

## Main files
- `app/page.tsx` — page sections and beginner-friendly helper interaction.
- `app/layout.tsx` — page metadata and shared CSS.
- `app/globals.css` — original page styling plus a few helper styles.
- `public/assets/` — GDG RBU logo and group photo.

The helper uses a small set of keyword-based responses so you can understand and customise it easily. For a real AI API, connect a secure server-side route and keep any API key on the server, never in browser code.
