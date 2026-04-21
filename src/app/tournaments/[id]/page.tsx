import { notFound } from "next/navigation";
import { getTournament } from "@lib/data";
import { Client } from "./Client";
import type { IPageProps } from "./config/page.types";

export default async function TournamentPage({ params }: IPageProps) {
  const { id } = await params;

  let tournament;
  try {
    tournament = await getTournament(id);
  } catch {
    notFound();
  }

  return <Client tournament={tournament} />;
}
