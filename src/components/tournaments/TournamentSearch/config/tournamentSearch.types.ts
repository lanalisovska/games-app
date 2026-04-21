export interface ITournamentSearchHook {
  defaultValue: string;
  handleSearch: (value: string) => void;
}
