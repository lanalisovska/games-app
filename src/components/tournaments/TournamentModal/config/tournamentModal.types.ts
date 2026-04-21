import type { ITournament } from "@src/types";

export type TJoinState = "idle" | "loading" | "success" | "error";

export interface ITournamentModalProps {
  tournament: ITournament;
  onClose: () => void;
}
