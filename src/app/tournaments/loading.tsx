import { TournamentGridSkeleton } from "@components/tournaments/TournamentSkeleton/TournamentSkeleton";
import { loadingStyles as s } from "./loading.styles";

export default function TournamentsLoading() {
  return (
    <div className={s.container}>
      <div className={s.heading}>
        <div className={s.titleBar} />
        <div className={s.subtitleBar} />
      </div>
      <div className={s.searchBar} />
      <TournamentGridSkeleton />
    </div>
  );
}
