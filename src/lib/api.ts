// Client-side only — used in "use client" components.
// When NEXT_PUBLIC_API_URL is set, calls the backend directly (CORS is enabled).
// Otherwise falls back to the Next.js API route at /api/tournaments/:id/join.

const API_PUB = process.env.NEXT_PUBLIC_API_URL;

export const joinTournament = async (id: number): Promise<{ success: boolean }> => {
  const url = API_PUB
    ? `${API_PUB}/tournaments/${id}/join`
    : `/api/tournaments/${id}/join`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to join tournament");
  return res.json();
};
