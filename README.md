# Sugeevan VSG - Personal Portfolio

This is the personal portfolio and professional landing page for **Sugeevan Vettivelautham**, Founder & CEO of **EDUS**, **Yarl Ventures**, and **MediMan**. 

Built with the latest web technologies, this site serves as a central hub for his ventures, insights, and professional connections.

![Sugeevan VSG](public/sugeevan.png)

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Analytics:** Ahrefs Web Analytics
- **Scheduling:** [Cal.com](https://cal.com/) Integration

## ✨ Features

- **Modern UI/UX:** Responsive design with glassmorphism effects, smooth animations, and interactive elements.
- **Dynamic SEO:**
  - Automated `sitemap.xml` and `robots.txt` generation.
  - Dynamic metadata execution for individual article pages.
  - Canonical URL management to prevent duplicate indexing.
- **Performance Optimized:** Uses Next.js optimization for fonts, images, and scripts.
- **Conversion Focused:** Integrated Cal.com booking flow and strategic CTA sections.
- **Digital Business Card:** A standalone card page at `/v`, built for QR and NFC. The printed QR and the NFC tag both encode `https://sugeevan.com/v`, so that route path is fixed and must not be renamed. Save Contact serves `public/v/sugeevan.vcf`.
- **Content Management:** Articles are authored as inline TSX in `data/articles.tsx`. Adding an entry there automatically produces its page, sitemap entry, and static route.

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Yarl-Ventures-PVT-Ltd/sugeevan.git
   cd sugeevan
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

```
sugeevan/
├── app/                 # Next.js App Router pages and layouts
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.tsx       # Root layout with SEO and metadata
│   ├── page.tsx         # Main landing page composition
│   ├── insights/        # Article index and per-article pages
│   └── v/               # Digital business card (QR / NFC target)
├── components/          # Reusable UI components (Hero, Navbar, etc.)
├── data/                # articles.tsx - all article content, authored as TSX
├── public/              # Static assets (images, icons); v/ holds the card portrait, vcf and QR files
└── lib/                 # Utility functions (article fetching, etc.)
```

## 🚀 Deployment

The easiest way to deploy this app is using the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, BitBucket).
2. Import the project into Vercel.
3. Vercel will auto-detect Next.js and deploy.

## 📄 License

&copy; 2026 Sugeevan VSG. All rights reserved.
Designed & Developed by [Yarl Ventures](https://yarlventures.com/).
