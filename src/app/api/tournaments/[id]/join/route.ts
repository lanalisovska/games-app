import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const apiBase = process.env.API_BASE_URL;

  if (apiBase) {
    const res = await fetch(`${apiBase}/tournaments/${id}/join`, { method: "POST" });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  }

  // Local fallback — read db.json at runtime, not import-time
  const { readFileSync } = await import("fs");
  const { join } = await import("path");
  const db = JSON.parse(readFileSync(join(process.cwd(), "db.json"), "utf-8"));
  const exists = db.tournaments.some((t: { id: number }) => t.id === Number(id));
  if (!exists) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true, tournamentId: Number(id) });
};
