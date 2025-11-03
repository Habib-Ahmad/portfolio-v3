"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLang } from "./lang-context";
import DownloadCVButton from "./download-cv-button";

export default function Hero() {
  const { lang } = useLang();

  return (
    <div className="py-20 md:py-28 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold tracking-tight"
      >
        {lang === "fr" ? "Salut, je suis Ahmad Habib" : "Hi, I'm Ahmad Habib"}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto"
      >
        {lang === "fr"
          ? "Ingénieur full-stack avec une forte sensibilité produit. Je conçois et livre des expériences rapides, fiables et accessibles, qui restent faciles à faire évoluer."
          : "Full-stack engineer with a strong product mindset. I design and ship fast, reliable, and accessible experiences that stay easy to evolve as teams and features grow."}
      </motion.p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <Button asChild>
          <a href="#projects">
            {lang === "fr" ? "Voir les projets" : "View Projects"}
          </a>
        </Button>
        <DownloadCVButton asChild variant="outline" />
      </div>
    </div>
  );
}
