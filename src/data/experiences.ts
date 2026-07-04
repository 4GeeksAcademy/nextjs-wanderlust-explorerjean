import { Experience, ExperienceCategory } from "@/src/types/experience";

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Bangkok, Thailand",
  "Dubrovnik, Croatia",
  "Kyoto, Japan",
  "Lisbon, Portugal",
  "Marrakesh, Morocco",
  "Reykjavik, Iceland",
  "Cusco, Peru",
  "Cape Town, South Africa",
  "Hoi An, Vietnam",
  "Split, Croatia",
  "Tbilisi, Georgia",
  "Auckland, New Zealand",
  "Chefchaouen, Morocco",
  "Naples, Italy",
  "Medellin, Colombia",
  "Seville, Spain",
  "Valparaiso, Chile",
  "Tallinn, Estonia",
  "Bali, Indonesia",
  "Quebec City, Canada",
];

const titleStems = [
  "Sunrise Trail",
  "Street Stories",
  "Spice Route",
  "Harbor Escape",
  "River Ritual",
  "Hidden Markets",
  "Coastal Trek",
  "Night Bites",
  "Forest Reset",
  "Crafted Evenings",
];

const categoryDescriptions: Record<ExperienceCategory, string> = {
  Adventure:
    "A high-energy outing with local experts, scenic routes, and small groups.",
  Culture:
    "An immersion into local traditions, neighborhoods, and stories you rarely hear.",
  Food:
    "A flavor-focused journey featuring signature dishes, market stops, and tastings.",
  Wellness:
    "A calming experience designed to restore focus with mindful movement and nature.",
  Nature:
    "An outdoor experience connecting landscapes, wildlife, and slow exploration.",
};

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const titleStem = titleStems[index % titleStems.length];
  const title = `${titleStem} #${id}`;
  const description = `${categoryDescriptions[category]} Includes curated stops, a host-led itinerary, and practical tips to continue exploring ${destination.split(",")[0]}.`;
  const price = 35 + (index % 13) * 9;
  const rating = Number((4 + ((index % 10) * 0.09)).toFixed(1));
  const imageUrl = `https://picsum.photos/seed/wanderlust-${id}/900/620`;

  return {
    id,
    title,
    description,
    category,
    destination,
    price,
    rating,
    imageUrl,
  };
});

export const uniqueCategories = categories;
export const uniqueDestinations = Array.from(
  new Set(experiences.map((item) => item.destination)),
);
