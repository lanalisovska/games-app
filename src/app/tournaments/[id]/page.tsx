import { notFound } from "next/navigation";
import { getTournament } from "@lib/data";
import { Client } from "./Client";

interface IPageProps {
  params: Promise<{ id: string }>;
}

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
