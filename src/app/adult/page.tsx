"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINES = [
  "Ага! Попались!",
  "Нечего тут смотреть.",
];

export default function AdultPage() {
  const [shown, setShown] = useState(0);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    if (shown >= LINES.length) return;
    const delays = [400, 1100];
    const t = setTimeout(() => setShown((n) => n + 1), delays[shown]);
    return () => clearTimeout(t);
  }, [shown]);

  useEffect(() => {
    if (shown < LINES.length) return;
    const t = setTimeout(() => setImgVisible(true), 400);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] pt-[30px] gap-8 px-4 text-center">
      <div className="flex flex-col gap-3">
        {LINES.map((line, i) => (
          <p
            key={i}
            className={`font-cyber tracking-widest uppercase transition-all duration-700 ease-out ${
              i < shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } ${i === 0 ? "text-3xl font-bold text-accent neon-text" : "text-lg text-text-secondary"}`}
          >
            {line}
          </p>
        ))}
      </div>

      <div
        className={`transition-all duration-1000 ease-out ${
          imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Image
          src="/images/tournaments/caught.png"
          alt="Попавсь"
          width={280}
          height={240}
          className="rounded border border-accent/20 shadow-neon"
        />
      </div>
    </div>
  );
}
