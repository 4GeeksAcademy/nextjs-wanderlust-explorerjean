"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { experiences } from "@/src/data/experiences";
import { filterExperiences } from "@/lib/filters";

interface UpdateFiltersInput {
  search?: string;
  category?: string;
  destination?: string;
}

export function useExperienceFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  const filteredExperiences = useMemo(
    () => filterExperiences(experiences, search, category, destination),
    [search, category, destination],
  );

  const updateFilters = (next: UpdateFiltersInput) => {
    const params = new URLSearchParams(searchParams.toString());

    const nextSearch = next.search ?? search;
    const nextCategory = next.category ?? category;
    const nextDestination = next.destination ?? destination;

    if (nextSearch) params.set("search", nextSearch);
    else params.delete("search");

    if (nextCategory) params.set("category", nextCategory);
    else params.delete("category");

    if (nextDestination) params.set("destination", nextDestination);
    else params.delete("destination");

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return {
    search,
    category,
    destination,
    filteredExperiences,
    setSearch: (value: string) => updateFilters({ search: value }),
    setCategory: (value: string) => updateFilters({ category: value }),
    setDestination: (value: string) => updateFilters({ destination: value }),
  };
}
