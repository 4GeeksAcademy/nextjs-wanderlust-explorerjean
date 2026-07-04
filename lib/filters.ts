import { Experience } from "@/src/types/experience";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function filterExperiences(
  collection: Experience[],
  searchTerm: string,
  category: string,
  destination: string,
): Experience[] {
  const normalizedSearch = searchTerm.trim();
  const normalizedDestination = destination.trim();
  const searchRegex = normalizedSearch ? new RegExp(escapeRegExp(normalizedSearch), "i") : null;
  const destinationRegex = normalizedDestination
    ? new RegExp(escapeRegExp(normalizedDestination), "i")
    : null;

  return collection.filter((experience) => {
    const matchesSearch = searchRegex ? searchRegex.test(experience.title) : true;
    const matchesCategory = category ? experience.category === category : true;
    const matchesDestination = destinationRegex
      ? destinationRegex.test(experience.destination)
      : true;

    return matchesSearch && matchesCategory && matchesDestination;
  });
}
