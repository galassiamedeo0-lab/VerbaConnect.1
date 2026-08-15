"use client";

import { useEffect, useState } from "react";

type Phrase = { lang: string; text: string };

const PHRASES: Phrase[] = [
  { lang: "EN", text: "Let's talk business." },
  { lang: "IT", text: "Parliamo di affari." },
  { lang: "FR", text: "Parlons affaires." },
  { lang: "DE", text: "Reden wir über Geschäfte." },
  { lang: "ES", text: "Hablemos de negocios." },
];

export default function PhraseTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      const timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % PHRASES.length);
        setVisible(true);
      }, 400);
      return () => clearTimeout(timeout);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const current = PHRASES[index];

  return (
    <div className="flex items-center gap-3 font-mono text-sm text-paper/70">
      <span className="rounded-sm border border-paper/30 px-1.5 py-0.5 text-[11px] tracking-widest2 text-copper">
        {current.lang}
      </span>
      <span
        className={`phrase-fade ${visible ? "opacity-100" : "opacity-0"}`}
        aria-live="polite"
      >
        {current.text}
      </span>
    </div>
  );
}
