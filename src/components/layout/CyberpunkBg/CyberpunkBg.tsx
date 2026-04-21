"use client";

import { useEffect, useRef } from "react";
import { cyberpunkBgStyles as s } from "./cyberpunkBg.styles";

const CHARS = "アイウエオカキクケコサシスセソ01001101ヤユヨラリルレロ";

export const CyberpunkBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const FONT_SIZE = 13;
    type Column = { y: number; speed: number; opacity: number };
    let columns: Column[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor(canvas.width / FONT_SIZE);
      columns = Array.from({ length: count }, () => ({
        y: Math.random() * -canvas.height,
        speed: 0.4 + Math.random() * 1.2,
        opacity: 0.04 + Math.random() * 0.12,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;

      for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        const steps = Math.ceil(canvas.height / FONT_SIZE);

        for (let j = 0; j < steps; j++) {
          const yPos = col.y + j * FONT_SIZE;
          if (yPos < 0 || yPos > canvas.height) continue;

          const fade = 1 - j / steps;
          if (j === 0) {
            ctx.fillStyle = `rgba(200, 250, 255, ${col.opacity * 2.5})`;
          } else {
            ctx.fillStyle = `rgba(0, 229, 255, ${col.opacity * fade})`;
          }

          const char = CHARS[Math.floor(Math.random() * CHARS.length)];
          ctx.fillText(char, i * FONT_SIZE, yPos);
        }

        col.y += col.speed;
        if (col.y > canvas.height) {
          col.y = Math.random() * -canvas.height * 0.6;
          col.speed = 0.4 + Math.random() * 1.2;
          col.opacity = 0.04 + Math.random() * 0.12;
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);
    const intervalId = setInterval(draw, 50);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={s.canvas}
      style={{ opacity: 0.4 }}
      aria-hidden="true"
    />
  );
};
