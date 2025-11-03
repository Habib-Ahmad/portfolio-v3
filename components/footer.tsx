"use client";

import { useLang } from "./lang-context";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="mt-16 border-t">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between text-sm">
        <span>© {new Date().getFullYear()} Ahmad Habib</span>
        <span className="opacity-80">
          {lang === "fr"
            ? "Construit avec Next.js, Tailwind & ShadCN UI"
            : "Built with Next.js, Tailwind & ShadCN UI"}
        </span>
      </div>
    </footer>
  );
}
