"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Icon, Btn } from "@uikit/index";
import { joinTournament } from "@lib/api";
import { formatDate } from "@lib/formatDate";
import { modalStyles as s } from "./tournamentModal.styles";
import type { ITournamentModalProps, TJoinState } from "./config/tournamentModal.types";

export const TournamentModal = ({ tournament, onClose }: ITournamentModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [joinState, setJoinState] = useState<TJoinState>("idle");

  const { title, image, description, game, participants, maxParticipants, prize, startDate, status } =
    tournament;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    dialog.showModal();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === dialogRef.current) onClose();
    },
    [onClose]
  );

  const handleJoin = async () => {
    if (status === "full" || joinState !== "idle") return;
    setJoinState("loading");
    try {
      await joinTournament(tournament.id);
      setJoinState("success");
    } catch {
      setJoinState("error");
      setTimeout(() => setJoinState("idle"), 2500);
    }
  };

  const joinLabel =
    status === "full"
      ? "Tournament Full"
      : joinState === "error"
        ? "Something went wrong — try again"
        : "Join Tournament";

  return (
    <dialog
      ref={dialogRef}
      className={s.dialog}
      onClick={handleBackdropClick}
      aria-label={`Tournament: ${title}`}
      aria-modal="true"
    >
      <div className={s.panel} role="document">
        <button className={s.closeBtn} onClick={onClose} aria-label="Close modal">
          <Icon name="close" size="sm" color="current" aria-hidden />
        </button>

        <div className={s.imageWrap}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 580px"
            className={s.image}
            priority
          />
        </div>

        <div className={s.scrollable}>
          <div className={s.body}>
            <div className={s.header}>
              <span className={s.badge(status)}>{status === "open" ? "Open" : "Full"}</span>
              <h1 className={s.title}>{title}</h1>
            </div>

            <p className={s.description}>{description}</p>

            <div className={s.metaGrid}>
              {[
                { icon: "gift", label: "Prize Pool", value: prize },
                { icon: "users", label: "Players", value: `${participants}/${maxParticipants}` },
                { icon: "calendar", label: "Starts", value: formatDate(startDate, { month: "long", day: "numeric", year: "numeric" }) },
                { icon: "gamepad", label: "Game", value: game },
              ].map(({ icon, label, value }) => (
                <div key={label} className={s.metaCard}>
                  <span className={s.metaIcon}>
                    <Icon name={icon as Parameters<typeof Icon>[0]["name"]} size="sm" color="accent" aria-hidden />
                  </span>
                  <div>
                    <p className={s.metaLabel}>{label}</p>
                    <p className={s.metaValue}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.footer}>
          {joinState === "success" ? (
            <div className={s.joinSuccess}>
              <Icon name="check" size="sm" color="current" aria-hidden />
              You&apos;ve joined the tournament!
            </div>
          ) : (
            <Btn
              variant="primary"
              size="lg"
              fullWidth
              loading={joinState === "loading"}
              disabled={status === "full" || joinState === "error"}
              onClick={handleJoin}
            >
              {joinLabel}
            </Btn>
          )}
        </div>
      </div>
    </dialog>
  );
};
