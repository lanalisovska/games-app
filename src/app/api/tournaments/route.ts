import { NextRequest, NextResponse } from "next/server";
import db from "../../../../db.json";

export const dynamic = "force-dynamic";

export const GET = (req: NextRequest) => {
  const q = req.nextUrl.searchParams.get("q")?.toLowerCase().trim();

  const results = q
    ? db.tournaments.filter((t) => t.title.toLowerCase().includes(q))
    : db.tournaments;

  return NextResponse.json(results);
};
