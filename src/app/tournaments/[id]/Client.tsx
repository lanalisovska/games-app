"use client";

import { useRouter } from "next/navigation";
import { TournamentModal } from "@components/tournaments/TournamentModal/TournamentModal";
import type { ITournament } from "@src/types";

export const Client = ({ tournament }: { tournament: ITournament }) => {
  const router = useRouter();
  return (
    <TournamentModal
      tournament={tournament}
      onClose={() => router.back()}
    />
  );
};
