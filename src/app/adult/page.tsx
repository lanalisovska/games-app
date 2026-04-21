"use client";

import { useEffect, useState } from "react";
import { Icon } from "@uikit/index";

const LINES = [
  "Ага! Попались!",
  "Нечего тут смотреть.",
];

export default function AdultPage() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= LINES.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 300 : 900);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4 text-center">
      <div className="text-8xl select-none animate-pulseNeon">🔞</div>
      <div className="flex flex-col gap-3">
        {LINES.map((line, i) => (
          <p
            key={i}
            className={`font-cyber tracking-widest uppercase transition-all duration-500 ${
              i < shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            } ${i === 0 ? "text-3xl font-bold text-accent neon-text" : "text-lg text-text-secondary"}`}
          >
            {line}
          </p>
        ))}
      </div>
      {shown >= LINES.length && (
        <div className="flex items-center gap-2 text-sm text-text-muted font-cyber tracking-widest animate-fadeIn">
          <Icon name="arrowRight" size="xs" color="muted" aria-hidden />
          <span>Ни-че-го</span>
          <Icon name="arrowRight" size="xs" color="muted" aria-hidden />
        </div>
      )}
    </div>
  );
}
