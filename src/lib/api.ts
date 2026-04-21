// Client-side API calls only — used in Client Components ("use client").
// Server Components should use src/lib/data.ts instead.

export const joinTournament = async (id: number): Promise<{ success: boolean }> => {
  const res = await fetch(`/api/tournaments/${id}/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to join tournament");
  return res.json();
};
