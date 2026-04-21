"use client";

import { useEffect, useRef, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { ITournamentSearchHook } from "../config/tournamentSearch.types";

const DEBOUNCE_MS = 350;

export const useTournamentSearch = (): ITournamentSearchHook => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleSearch = (value: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set("q", value);
      else params.delete("q");
      startTransition(() => router.push(`/tournaments?${params.toString()}`));
    }, DEBOUNCE_MS);
  };

  return {
    defaultValue: searchParams.get("q") ?? "",
    handleSearch,
  };
};
