import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { readFileSync } from "fs";
import { join } from "path";

interface Tournament {
  id: number;
  title: string;
  description: string;
  image: string;
  game: string;
  participants: number;
  maxParticipants: number;
  prize: string;
  startDate: string;
  status: "open" | "full";
  organizer: string;
}

// db.json lives next to this service's root (backend/db.json)
const db: { tournaments: Tournament[] } = JSON.parse(
  readFileSync(join(process.cwd(), "db.json"), "utf-8")
);

const app = new Hono();

app.use("*", cors());

app.get("/tournaments", (c) => {
  const q = (c.req.query("title_like") ?? c.req.query("q") ?? "").toLowerCase().trim();
  const game = c.req.query("game") ?? "";

  let results = db.tournaments;
  if (q) results = results.filter((t) => t.title.toLowerCase().includes(q));
  if (game) results = results.filter((t) => t.game === game);

  return c.json(results);
});

app.get("/tournaments/:id", (c) => {
  const tournament = db.tournaments.find((t) => t.id === Number(c.req.param("id")));
  if (!tournament) return c.json({ error: "Not found" }, 404);
  return c.json(tournament);
});

app.post("/tournaments/:id/join", async (c) => {
  const exists = db.tournaments.some((t) => t.id === Number(c.req.param("id")));
  if (!exists) return c.json({ error: "Not found" }, 404);
  return c.json({ success: true, tournamentId: Number(c.req.param("id")) });
});

const PORT = Number(process.env.PORT ?? 3001);

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
