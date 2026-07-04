"use client";

import Image from "next/image";
import Link from "next/link";
import { Experience } from "@/src/types/experience";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (experienceId: number) => void;
}

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="card">
      <Link href={`/experiences/${experience.id}`}>
        <Image
          className="card__image"
          src={experience.imageUrl}
          alt={experience.title}
          width={900}
          height={620}
        />
      </Link>

      <div className="card__content">
        <div className="card__header">
          <h3 className="card__title">
            <Link href={`/experiences/${experience.id}`}>{experience.title}</Link>
          </h3>
          <button
            type="button"
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            className={`heart-btn ${isFavorite ? "is-favorite" : ""}`}
            onClick={() => onToggleFavorite(experience.id)}
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>

        <span className="pill">{experience.category}</span>
        <p className="meta">{experience.destination}</p>
        <p className="meta">{experience.description.slice(0, 92)}...</p>

        <div className="price-rating">
          <strong>${experience.price}</strong>
          <span>★ {experience.rating.toFixed(1)}</span>
        </div>
      </div>
    </article>
  );
}
