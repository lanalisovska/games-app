import { Icon } from "@uikit/index";
import { TournamentCard } from "@components/tournaments/TournamentCard/TournamentCard";
import { gridStyles as s } from "./tournamentGrid.styles";
import type { ITournamentGridProps } from "./config/tournamentGrid.types";

export const TournamentGrid = ({ tournaments, query }: ITournamentGridProps) => {
  if (tournaments.length === 0) {
    return (
      <div className={s.grid}>
        <div className={s.empty}>
          <Icon name="trophy" size="xl" color="muted" aria-hidden />
          <p className={s.emptyTitle}>No tournaments found</p>
          <p className={s.emptyText}>
            {query
              ? `No results for "${query}". Try a different search term.`
              : "Check back later for upcoming tournaments."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul className={s.grid} role="list">
      {tournaments.map((t) => (
        <li key={t.id}>
          <TournamentCard tournament={t} />
        </li>
      ))}
    </ul>
  );
};
