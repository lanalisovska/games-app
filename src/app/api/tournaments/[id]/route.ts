import { NextRequest, NextResponse } from "next/server";
import db from "../../../../../db.json";

export const GET = (
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) =>
  params.then(({ id }) => {
    const tournament = db.tournaments.find((t) => t.id === Number(id));
    if (!tournament) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(tournament);
  });
