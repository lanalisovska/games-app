"use client";

import { Input } from "@uikit/index";
import { searchStyles as s } from "./tournamentSearch.styles";
import { useTournamentSearch } from "./hooks/useTournamentSearch";

export const TournamentSearch = () => {
  const { defaultValue, handleSearch } = useTournamentSearch();

  return (
    <Input
      icon="search"
      type="search"
      placeholder="Search tournaments…"
      defaultValue={defaultValue}
      onChange={(e) => handleSearch(e.target.value)}
      aria-label="Search tournaments"
      className={s.input}
    />
  );
};
