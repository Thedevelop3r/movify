# Movify

A modern movie database application built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. Browse, search, and filter movies by genre, rating, and more.

---

## Features

- **Responsive UI** powered by Tailwind CSS
- **Server‑side rendering** and **static optimizations** with Next.js
- **Client‑side routing** for seamless page transitions
- **Movie listing**, **details**, **genres**, **actors**, and **search** pages
- **Pagination**, **filter**, and **sort** controls
- **Reusable components** for cards, lists, navigation, and forms

---

## Tech Stack

- **Framework:** Next.js 15 (`next`)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS, React Icons
- **Styling:** Tailwind via `@tailwindcss/postcss` plugin
- **Data:** Local dummy data (`/dummydata/movies_real.ts`)

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movify-frontend.git
   cd movify-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running in Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```
Open <http://localhost:3000> in your browser.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## Available Scripts

- `dev` – Start Next.js development server
- `build` – Build the app for production
- `start` – Run the built app
- `lint` – Run ESLint (if configured)

---

## Project Structure

```plaintext
frontend/
├── app/             # Next.js App Dir pages and layouts
├── components/      # Reusable React components
├── dummydata/       # Local movie data
├── public/          # Static assets
├── types/           # TypeScript definitions
├── next.config.ts   # Next.js configuration
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```  citeturn0file0

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m "Add YourFeature"`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

> Made with ❤️ by Bilal Amjad

