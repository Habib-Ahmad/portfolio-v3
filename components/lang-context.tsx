"use client";

import { createContext, useContext, useState } from "react";

type Lang = "en" | "fr";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({
  lang: "en",
  setLang: () => {},
});

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";

  const saved = localStorage.getItem("lang");
  if (saved === "en" || saved === "fr") {
    return saved;
  }

  const nav = navigator.language || navigator.languages?.[0] || "en";
  return nav.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => getInitialLang());

  const update = (l: Lang) => {
    setLang(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang: update }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
