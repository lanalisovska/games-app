import "server-only";
import path from "path";
import fs from "fs";
import type { ITournament } from "@src/types";

const API_BASE = process.env.API_BASE_URL;

// ── Remote ───────────────────────────────────────────────────────────────────

const fetchTournaments = async (query?: string, game?: string): Promise<ITournament[]> => {
  const params = new URLSearchParams();
  if (query?.trim()) params.set("title_like", query.trim());
  if (game) params.set("game", game);
  const qs = params.toString();
  const res = await fetch(`${API_BASE}/tournaments${qs ? `?${qs}` : ""}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch tournaments");
  return res.json();
};

const fetchTournament = async (id: string | number): Promise<ITournament> => {
  const res = await fetch(`${API_BASE}/tournaments/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Tournament ${id} not found`);
  return res.json();
};

// ── Local fallback (db.json) ─────────────────────────────────────────────────

interface IDb {
  tournaments: ITournament[];
}

const readLocalDb = (): ITournament[] => {
  const raw = fs.readFileSync(path.join(process.cwd(), "db.json"), "utf-8");
  return (JSON.parse(raw) as IDb).tournaments;
};

// ── Public API ───────────────────────────────────────────────────────────────

export const getTournaments = async (query?: string, game?: string): Promise<ITournament[]> => {
  if (API_BASE) return fetchTournaments(query, game);

  let results = readLocalDb();
  if (query?.trim()) {
    const q = query.toLowerCase();
    results = results.filter((t) => t.title.toLowerCase().includes(q));
  }
  if (game) {
    results = results.filter((t) => t.game === game);
  }
  return results;
};

export const getTournament = async (id: string | number): Promise<ITournament> => {
  if (API_BASE) return fetchTournament(id);

  const tournament = readLocalDb().find((t) => t.id === Number(id));
  if (!tournament) throw new Error(`Tournament ${id} not found`);
  return tournament;
};
