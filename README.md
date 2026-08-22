# Kavay Khurana — Developer Portfolio 🌿

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Java](https://img.shields.io/badge/Java-21-ED8B00?style=flat-square&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=flat-square&logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel&logoColor=white)](https://fortfolio-nine-dun.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

🌐 **Live Website**: [https://fortfolio-nine-dun.vercel.app](https://fortfolio-nine-dun.vercel.app)

A personal developer portfolio built for **Kavay Khurana**, a Computer Science & Engineering student at **Thapar Institute of Engineering & Technology (TIET '28)** specializing in **Java Backend Engineering**, API architecture, and transactional systems.

The portfolio is styled around the **Terminal Garden** editorial design philosophy—pairing systems precision and monospaced technical metadata with warm parchment tones, tactile typography, and signature **Service Lime (`#B9F25C`)** accents.

---

## 📑 Table of Contents

- [Live Preview & Highlights](#-highlights--features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Portfolio Sections](#-portfolio-sections)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
  - [Starting the Production Server](#starting-the-production-server)
- [Deployment](#-deployment)
- [Contact & Connect](#-contact--connect)
- [License](#-license)

---

## ✨ Highlights & Features

- 🌿 **Terminal Garden Design System**: Editorial software craftsmanship inspired by engineering field notes, warm paper textures, monospaced metadata, and custom responsive layouts.
- ⚡ **Interactive Request/Response Flow**: Animated hero illustration showcasing the lifecycle of a request moving across *Client → Java Service → Data Store*.
- 🛠️ **Featured Enterprise Project — StockPilot**: Complete overview of an inventory, purchasing, and sales operating system built with Java 21, Spring Boot 3, PostgreSQL, and Spring Security.
- 🧩 **Deliberate Problem-Solving**: Highlights 500+ LeetCode algorithmic problems solved in C++ with focus on data structures and performance constraints.
- 📋 **Categorized Technical Matrix**: Recruiter-ready technical stack covering Languages, Frameworks, Databases, Security, DevOps, and CS Core Fundamentals.
- 📱 **Fully Responsive & Accessible**: Fluid side-rail navigation on desktop that seamlessly transforms into an intuitive mobile drawer with accessible ARIA landmarks and tap targets.
- 🚀 **High-Performance Architecture**: Zero external tracking bloat, optimized static asset loading, sub-second builds with Vite 7 and esbuild.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [TypeScript 5.6](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` tokens
- **Routing**: [Wouter](https://github.com/molefrog/wouter) (lightweight, client-side routing)
- **UI Components & Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Effects**: Framer Motion & CSS custom keyframe packet flows
- **Feedback & Notifications**: [Sonner](https://sonner.emilkowal.ski/)

### Backend / Server
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Web Server**: [Express.js 4](https://expressjs.com/)
- **Bundler**: [esbuild](https://esbuild.github.io/)

### Tooling & Package Management
- **Package Manager**: `pnpm` (v10+)
- **Code Formatting**: Prettier

---

## 📁 Project Structure

```text
kavay-khurana-portfolio/
├── client/                     # Frontend client source
│   ├── public/                 # Static assets served as-is
│   │   └── assets/             # Brand logos, service routes & system maps
│   ├── src/
│   │   ├── components/         # Reusable UI primitives (Radix, Dialogs, ErrorBoundary)
│   │   │   └── ui/             # Individual component implementations
│   │   ├── contexts/           # React contexts (ThemeContext)
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utility helper functions (cn, classnames)
│   │   ├── pages/              # Application views
│   │   │   ├── Home.tsx        # Main single-page portfolio layout
│   │   │   └── NotFound.tsx    # 404 error page
│   │   ├── App.tsx             # Application shell, routing & providers
│   │   ├── const.ts            # Frontend constants
│   │   ├── index.css           # Global styles, Tailwind setup & design tokens
│   │   └── main.tsx            # React application root mount
│   └── index.html              # HTML entry point
├── server/                     # Backend production server
│   └── index.ts                # Express server for serving compiled dist/
├── shared/                     # Shared models, schemas, and constants
│   └── const.ts
├── static-assets/              # High-resolution original source assets
├── ideas.md                    # Design philosophy & visual guidelines
├── todo.md                     # Revision checklist & requirements
├── vite.config.ts              # Vite 7 build & development configuration
├── tsconfig.json               # TypeScript compiler options
└── package.json                # Project dependencies and script commands
```

---

## 🧭 Portfolio Sections

1. **Header & Persistent Rail (`01`–`05`)**:
   - Status badge indicating active availability for backend engineering internships.
   - Direct quick-links to GitHub, LinkedIn, and Email.
2. **Hero Section**:
   - Headline: *"Building the habits behind reliable software."*
   - Live route packet animation illustrating backend request processing.
3. **`01 / Profile`**:
   - Academic trajectory at Thapar Institute of Engineering & Technology (B.Tech CSE '28, Patiala, Punjab).
   - Core backend engineering philosophy and system design focus.
4. **`02 / Selected Work`**:
   - **StockPilot**: Full-stack inventory and sales OS with transactional multi-line validation, Spring Security RBAC, PostgreSQL persistence, and Docker support.
   - Direct repository and live demo links.
5. **`03 / Deliberate Practice`**:
   - **500+ LeetCode Problems Solved**: Daily algorithmic practice in C++ covering arrays, trees, graphs, dynamic programming, and greedy algorithms.
6. **`04 / Technical Skills`**:
   - **Languages**: Java, C++, JavaScript, Python, SQL, HTML/CSS
   - **Frameworks & Libraries**: Spring Boot 3.x, Spring Security 6.x, Spring Data JPA, Hibernate, Node.js, Express.js, React
   - **Databases**: PostgreSQL, MongoDB, MySQL
   - **Security**: JWT (JJWT 0.12.x), BCrypt Hashing, Role-Based Access Control (RBAC)
   - **DevOps & Tools**: Git, GitHub, Maven, Railway, Vercel, Runway
   - **CS Fundamentals**: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, OOP
7. **`05 / Contact (Next Request)`**:
   - Personal Email: [kavaykhurana4@gmail.com](mailto:kavaykhurana4@gmail.com)
   - Phone: [+91 7428631825](tel:+917428631825)
   - Verified profile links to GitHub, LinkedIn, and LeetCode.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** >= `20.x` (LTS recommended)
- **pnpm** >= `10.x` (`npm install -g pnpm`)

### Installation

Clone the repository and install all dependencies:

```bash
git clone https://github.com/Kavaykhurana/portfolio.git
cd portfolio
pnpm install
```

### Development Server

Start the local Vite development server with hot module replacement:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Checking

Run the TypeScript compiler to verify type correctness:

```bash
pnpm check
```

### Building for Production

Compile both the client-side frontend bundle and the production Node.js server:

```bash
pnpm build
```

The output artifacts will be placed in:
- `dist/public/` — Client static assets
- `dist/index.js` — Bundled Express server

### Starting the Production Server

Run the production server:

```bash
pnpm start
```

---

## 🌐 Deployment

The application can be deployed anywhere that supports static hosting or Node.js containers:

### Option A: Static Hosting (Vercel / Netlify / GitHub Pages)
- **Build Command**: `vite build`
- **Output Directory**: `dist/public`

### Option B: Container / Node Server (Render / Railway / Fly.io / AWS)
- **Build Command**: `pnpm run build`
- **Start Command**: `pnpm run start`
- **Port**: Set `PORT` environment variable (defaults to `3000`)

---

## 📬 Contact & Connect

- **Name**: Kavay Khurana
- **Email**: [kavaykhurana4@gmail.com](mailto:kavaykhurana4@gmail.com)
- **Phone**: [+91 7428631825](tel:+917428631825)
- **GitHub**: [@Kavaykhurana](https://github.com/Kavaykhurana)
- **LinkedIn**: [kavay-khurana](https://www.linkedin.com/in/kavay-khurana-437272322/)
- **LeetCode**: [@kavaykhurana](https://leetcode.com/u/kavaykhurana/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
