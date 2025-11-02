"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="py-20 md:py-28 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold tracking-tight"
      >
        Hi, I&apos;m{" "}
        <span className="underline underline-offset-8">Ahmad Habib</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-4 text-base md:text-lg opacity-90 max-w-2xl mx-auto"
      >
        Full-stack developer focusing on **Next.js**, **Convex**, and real-time
        apps. I build fast, clean experiences with a product mindset.
      </motion.p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <Button asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/AhmadHabibCV.pdf" download>
            Download CV
          </a>
        </Button>
      </div>
    </div>
  );
}
