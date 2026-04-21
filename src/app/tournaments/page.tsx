import { Suspense } from "react";
import { getTournaments } from "@lib/data";
import { TournamentGrid } from "@components/tournaments/TournamentGrid/TournamentGrid";
import { TournamentSearch } from "@components/tournaments/TournamentSearch/TournamentSearch";
import { TournamentGridSkeleton } from "@components/tournaments/TournamentSkeleton/TournamentSkeleton";
import { GameFilter } from "@components/tournaments/GameFilter/GameFilter";
import { pageStyles as s } from "./page.styles";
import type { IPageProps } from "./config/page.types";

const TournamentsContent = async ({ query, game }: { query?: string; game?: string }) => {
  const tournaments = await getTournaments(query, game);
  return <TournamentGrid tournaments={tournaments} query={query} />;
};

export default async function TournamentsPage({ searchParams }: IPageProps) {
  const { q, game } = await searchParams;

  const allTournaments = await getTournaments();
  const games = [...new Set(allTournaments.map((t) => t.game))].sort();

  return (
    <div className={s.container}>
      <div className={s.heading}>
        <h1 className={s.title}>Tournaments</h1>
        <p className={s.subtitle}>Find and join competitive esports tournaments</p>
      </div>

      <Suspense fallback={null} key={q ?? ""}>
        <TournamentSearch />
      </Suspense>

      <Suspense fallback={null}>
        <GameFilter games={games} selected={game ?? ""} />
      </Suspense>

      <Suspense
        fallback={<TournamentGridSkeleton />}
        key={`grid-${q ?? ""}-${game ?? ""}`}
      >
        <TournamentsContent query={q} game={game} />
      </Suspense>
    </div>
  );
}
