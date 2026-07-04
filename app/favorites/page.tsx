"use client";

import Link from "next/link";
import { ExperienceCard } from "@/components/ExperienceCard";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/src/data/experiences";

export default function FavoritesPage() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favorites.includes(experience.id));

  return (
    <main>
      <h1 className="section-title">Tus favoritos</h1>
      <p className="section-subtitle">Experiencias que marcaste con el icono de corazón.</p>

      {favoriteExperiences.length > 0 ? (
        <section className="cards-grid">
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <p style={{ marginBottom: "0.8rem" }}>Aún no has guardado experiencias.</p>
          <Link href="/experiences" className="btn-primary">
            Ir al explorador
          </Link>
        </section>
      )}
    </main>
  );
}
