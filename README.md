# Vasyl Biliak — Frontend Developer Portfolio

[![Gatsby](https://img.shields.io/badge/Gatsby-5.14-663399?logo=gatsby&logoColor=white)](https://www.gatsbyjs.com/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222222?logo=github&logoColor=white)](https://vasylbiliak.github.io/portfolio/)

> A creative, animated single-page portfolio showcasing modern frontend development with React, Gatsby, and TypeScript. Built for performance, accessibility, and delightful user experiences.

**Live Demo:** [https://vasylbiliak.github.io/portfolio/](https://vasylbiliak.github.io/portfolio/)

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | [Gatsby 5](https://www.gatsbyjs.com/) — Static site generation with GraphQL |
| **Frontend** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) — Smooth, declarative animations |
| **Styling** | CSS Modules + BEM methodology + CSS Variables |
| **Theming** | Light/Dark mode via CSS custom properties |
| **Images** | Gatsby Image (gatsby-plugin-image) — Optimized, responsive images |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Deployment** | [GitHub Pages](https://pages.github.com/) |

---

## Features

- **Smooth Animations** — Framer Motion powered transitions and scroll-triggered effects
- **Responsive Design** — Mobile-first approach, optimized for all screen sizes
- **Dark/Light Theme** — Instant theme switching with CSS variables
- **Performance Optimized** — Code splitting, lazy loading, optimized images
- **Modular Architecture** — Reusable component system with CSS Modules
- **SEO Ready** — React Helmet for meta tags and Open Graph integration
- **Type Safe** — Full TypeScript coverage for maintainable code
- **Accessible** — Semantic HTML and keyboard navigation support

---

## Quick Start

### Prerequisites

- **Node.js** 18+ and **npm**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/VasylBiliak/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run develop
```

Open [http://localhost:8000](http://localhost:8000) to view the site.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run develop` | Start development server with hot reload |
| `npm run build` | Create optimized production build (`--prefix-paths` enabled) |
| `npm run serve` | Serve production build locally for testing |
| `npm run clean` | Clear Gatsby cache and build artifacts |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run deploy:dev` | Deploy to `gh-pages-dev` branch for testing |

---

## Deployment

This project is configured for **GitHub Pages** deployment:

```bash
# Deploy to production
npm run deploy
```

The deployment process:
1. Builds the site with `gatsby build --prefix-paths`
2. Pushes the `public/` folder to the `gh-pages` branch
3. Site is live at `https://vasylbiliak.github.io/portfolio/`

> **Note:** `--prefix-paths` is required for GitHub Pages subpath deployment (`/portfolio/`).

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # About, Skills, Projects, Contact
│   │   ├── ui/              # Reusable UI components
│   │   └── Home.tsx         # Hero section
│   ├── pages/               # Gatsby pages
│   │   └── index.tsx        # Main landing page
│   ├── styles/              # Global CSS and variables
│   ├── images/              # Static assets
│   └── hooks/               # Custom React hooks
├── static/                  # Static files (favicons, etc.)
├── gatsby-config.ts         # Gatsby configuration
├── gatsby-node.ts           # Node APIs
└── package.json
```

---

## About the Author

**Vasyl Biliak** — Frontend Developer

This portfolio is a personal project demonstrating modern web development practices, performance optimization, and creative UI/UX design. It reflects a commitment to clean code, accessibility, and delivering exceptional user experiences.

- **LinkedIn:** [linkedin.com/in/vasyl-biliak-developer](https://www.linkedin.com/in/vasyl-biliak-developer)
- **GitHub:** [github.com/VasylBiliak](https://github.com/VasylBiliak)

---

## License

This project is open source and available for learning purposes. Feel free to fork and customize for your own portfolio.
