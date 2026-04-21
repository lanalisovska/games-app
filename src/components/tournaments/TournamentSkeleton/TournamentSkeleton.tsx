import { skeletonStyles as s } from "./tournamentSkeleton.styles";

const CardSkeleton = () => (
  <div className={s.card}>
    <div className={s.image} />
    <div className={s.body}>
      <div className={s.title} />
      <div className={s.metaRow}>
        <div className={s.metaChip1} />
        <div className={s.metaChip2} />
      </div>
      <div className={s.footer}>
        <div className={s.footerPrize} />
        <div className={s.footerGame} />
      </div>
    </div>
  </div>
);

export const TournamentGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className={s.grid} aria-busy="true" aria-label="Loading tournaments">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);
