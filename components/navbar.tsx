"use client";

import { useEffect, useState } from "react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("#home");
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href) as HTMLElement)
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && setActive(`#${e.target.id}`)
        );
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        solid ? "bg-background/80 backdrop-blur border-b" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          Ahmad Habib
        </a>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm transition ${
                    active === l.href
                      ? "font-semibold underline underline-offset-4"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <Button asChild size="sm" variant="secondary">
            <a href="/AhmadHabibCV.pdf" download>
              Download CV
            </a>
          </Button>

          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
