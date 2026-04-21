import Link from "next/link";
import Image from "next/image";
import { Icon } from "@uikit/index";
import { formatDate } from "@lib/formatDate";
import { cardStyles as s } from "./tournamentCard.styles";
import type { ITournamentCardProps } from "./config/tournamentCard.types";

export const TournamentCard = ({ tournament }: ITournamentCardProps) => {
  const { id, title, image, game, participants, maxParticipants, prize, startDate, status } =
    tournament;

  const formattedDate = formatDate(startDate);

  return (
    <Link href={`/tournaments/${id}`} className={s.link} prefetch>
      <div className={s.imageWrap}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={s.image}
        />
        <span className={s.badge(status)}>
          {status === "open" ? "Open" : "Full"}
        </span>
      </div>

      <div className={s.body}>
        <h2 className={s.title}>{title}</h2>

        <div className={s.meta}>
          <span className={s.metaItem}>
            <Icon name="users" size="xs" color="current" aria-hidden />
            {participants}/{maxParticipants}
          </span>
          <span className={s.metaItem}>
            <Icon name="calendar" size="xs" color="current" aria-hidden />
            {formattedDate}
          </span>
        </div>

        <div className={s.footer}>
          <span className={s.prize}>{prize}</span>
          <span className={s.game}>{game}</span>
        </div>
      </div>
    </Link>
  );
};
