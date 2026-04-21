"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { filterStyles as s } from "./gameFilter.styles";
import type { IGameFilterProps } from "./config/gameFilter.types";

export const GameFilter = ({ games, selected }: IGameFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const navigate = (game: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (game) params.set("game", game);
    else params.delete("game");
    router.push(`/tournaments?${params.toString()}`);
  };

  return (
    <div className={s.wrapper} role="group" aria-label="Filter by game">
      {["All", ...games].map((g) => {
        const value = g === "All" ? "" : g;
        return (
          <button
            key={g}
            onClick={() => navigate(value)}
            className={s.chip(selected === value)}
            aria-pressed={selected === value}
          >
            {g}
          </button>
        );
      })}
    </div>
  );
};
