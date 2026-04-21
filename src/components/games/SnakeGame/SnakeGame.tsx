"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Btn, Icon } from "@uikit/index";
import { snakeStyles as s } from "./snakeGame.styles";

const GRID = 20;
const CELL = 20;
const SIZE = GRID * CELL;
const TICK_BASE = 150;

type Dir = [number, number];
type Point = { x: number; y: number };

const randFood = (snake: Point[]): Point => {
  let f: Point;
  do { f = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) }; }
  while (snake.some((s) => s.x === f.x && s.y === f.y));
  return f;
};

const initState = () => {
  const snake = [{ x: 10, y: 10 }];
  return { snake, dir: [1, 0] as Dir, nextDir: [1, 0] as Dir, food: randFood(snake), score: 0, alive: true };
};

export const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef(initState());
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [phase, setPhase] = useState<"idle" | "playing" | "dead">("idle");

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const { snake, food } = stateRef.current;

    ctx.fillStyle = "#07070f";
    ctx.fillRect(0, 0, SIZE, SIZE);

    // subtle grid
    ctx.fillStyle = "rgba(0,255,255,0.04)";
    for (let x = 0; x < GRID; x++)
      for (let y = 0; y < GRID; y++)
        ctx.fillRect(x * CELL + CELL / 2 - 1, y * CELL + CELL / 2 - 1, 1, 1);

    // snake
    snake.forEach((seg, i) => {
      const head = i === 0;
      ctx.shadowBlur = head ? 18 : 6;
      ctx.shadowColor = "#00ffff";
      ctx.fillStyle = head
        ? "#00ffff"
        : `rgba(0,210,230,${0.3 + 0.7 * (snake.length - i) / snake.length})`;
      ctx.fillRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2);
    });

    // food
    ctx.shadowBlur = 22;
    ctx.shadowColor = "#ff2d78";
    ctx.fillStyle = "#ff2d78";
    const fp = food.x * CELL + CELL / 2;
    const fy = food.y * CELL + CELL / 2;
    ctx.beginPath();
    ctx.arc(fp, fy, CELL / 2 - 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }, []);

  const tick = useCallback(() => {
    const st = stateRef.current;
    if (!st.alive) return;

    st.dir = st.nextDir;
    const head = {
      x: (st.snake[0].x + st.dir[0] + GRID) % GRID,
      y: (st.snake[0].y + st.dir[1] + GRID) % GRID,
    };

    if (st.snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
      st.alive = false;
      setBest((b) => Math.max(b, st.score));
      setPhase("dead");
      return;
    }

    const ate = head.x === st.food.x && head.y === st.food.y;
    st.snake = [head, ...st.snake];
    if (ate) {
      st.score++;
      st.food = randFood(st.snake);
      setScore(st.score);
    } else {
      st.snake.pop();
    }
    draw();
  }, [draw]);

  useEffect(() => {
    if (phase !== "playing") return;
    draw();
    const speed = Math.max(60, TICK_BASE - stateRef.current.score * 3);
    const id = setInterval(tick, speed);
    return () => clearInterval(id);
  }, [phase, score, tick, draw]);

  const steer = useCallback((next: Dir) => {
    const st = stateRef.current;
    if (!st.alive) return;
    if (next[0] === -st.dir[0] && next[1] === -st.dir[1]) return;
    st.nextDir = next;
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, Dir> = {
        ArrowUp: [0, -1], w: [0, -1], W: [0, -1],
        ArrowDown: [0, 1], s: [0, 1], S: [0, 1],
        ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0],
        ArrowRight: [1, 0], d: [1, 0], D: [1, 0],
      };
      const next = map[e.key];
      if (next) {
        e.preventDefault();
        steer(next);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [steer]);

  const start = () => {
    stateRef.current = initState();
    setScore(0);
    setPhase("playing");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.scorebar}>
        <span>
          <span className={s.scoreLabel}>Score </span>
          <span className={s.scoreValue}>{score}</span>
        </span>
        <span>
          <span className={s.scoreLabel}>Best </span>
          <span className={s.scoreValue}>{best}</span>
        </span>
      </div>

      <div className={s.canvasWrap}>
        <canvas ref={canvasRef} width={SIZE} height={SIZE} className={s.canvas} />

        {phase !== "playing" && (
          <div className={s.overlay}>
            <p className={s.overlayTitle}>
              {phase === "dead" ? "Game Over" : "Neon Snake"}
            </p>
            {phase === "dead" && (
              <p className={s.overlayScore}>
                Score: <span className={s.overlayScoreValue}>{score}</span>
              </p>
            )}
            <Btn variant="primary" size="md" onClick={start}>
              {phase === "dead" ? "Play Again" : "Start Game"}
            </Btn>
            <p className={s.hint}>
              Arrow keys / WASD to steer
            </p>
          </div>
        )}
      </div>

      {/* mobile d-pad */}
      <div className={s.dpad}>
        <div className={s.dpadEmpty} />
        <button className={s.dpadBtn} onClick={() => steer([0, -1])} aria-label="Up">
          <Icon name="chevronRight" size="sm" color="current" className="-rotate-90" aria-hidden />
        </button>
        <div className={s.dpadEmpty} />
        <button className={s.dpadBtn} onClick={() => steer([-1, 0])} aria-label="Left">
          <Icon name="chevronRight" size="sm" color="current" className="rotate-180" aria-hidden />
        </button>
        <div className={s.dpadEmpty} />
        <button className={s.dpadBtn} onClick={() => steer([1, 0])} aria-label="Right">
          <Icon name="chevronRight" size="sm" color="current" aria-hidden />
        </button>
        <div className={s.dpadEmpty} />
        <button className={s.dpadBtn} onClick={() => steer([0, 1])} aria-label="Down">
          <Icon name="chevronRight" size="sm" color="current" className="rotate-90" aria-hidden />
        </button>
        <div className={s.dpadEmpty} />
      </div>
    </div>
  );
};
