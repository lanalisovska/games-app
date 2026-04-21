export type TTheme = "dark" | "light";

export type TBtnVariant = "primary" | "outline" | "ghost";
export type TBtnSize = "sm" | "md" | "lg";

export type TIconSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TIconColor =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "white"
  | "current";

export type TIconName =
  | "search"
  | "close"
  | "sun"
  | "moon"
  | "trophy"
  | "users"
  | "calendar"
  | "gift"
  | "gamepad"
  | "arrowRight"
  | "chevronRight"
  | "check"
  | "loader"
  | "share";

export type TTournamentStatus = "open" | "full";

export interface ITournament {
  id: number;
  title: string;
  description: string;
  image: string;
  game: string;
  participants: number;
  maxParticipants: number;
  prize: string;
  startDate: string;
  status: TTournamentStatus;
  organizer: string;
}
