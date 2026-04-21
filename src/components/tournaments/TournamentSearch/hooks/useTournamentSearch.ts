"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { ITournamentSearchHook } from "../config/tournamentSearch.types";

const DEBOUNCE_MS = 400;

export const useTournamentSearch = (): ITournamentSearchHook => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const urlQuery = searchParams.get("q") ?? "";
  const [value, setValue] = useState(urlQuery);

  // keep input in sync when navigating back/forward
  useEffect(() => {
    setValue(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const handleSearch = (newValue: string) => {
    setValue(newValue);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (newValue.trim()) params.set("q", newValue.trim());
      else params.delete("q");
      startTransition(() => router.push(`/tournaments?${params.toString()}`));
    }, DEBOUNCE_MS);
  };

  return { value, handleSearch };
};
