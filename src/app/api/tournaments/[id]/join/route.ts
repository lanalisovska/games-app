import { NextRequest, NextResponse } from "next/server";
import db from "../../../../../../db.json";

export const POST = (
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) =>
  params.then(({ id }) => {
    const exists = db.tournaments.some((t) => t.id === Number(id));
    if (!exists) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    // In a real app: persist join, check capacity, validate auth token, etc.
    return NextResponse.json({ success: true, tournamentId: Number(id) });
  });
