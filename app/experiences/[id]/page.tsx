"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/src/data/experiences";

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const numericId = Number(params.id);
  const experience = experiences.find((item) => item.id === numericId);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!experience) {
      document.title = "Experiencia no encontrada | Wanderlust Explorer";
      return;
    }

    document.title = `${experience.title} | Wanderlust Explorer`;
  }, [experience]);

  if (!experience) {
    return (
      <main>
        <section className="empty-state">
          <h1 className="section-title">Experiencia no encontrada</h1>
          <p className="section-subtitle">No existe un registro con ese id.</p>
          <Link href="/experiences" className="btn-secondary">
            Volver al explorador
          </Link>
        </section>
      </main>
    );
  }

  const favorite = isFavorite(experience.id);

  return (
    <main>
      <div className="detail">
        <section className="detail__panel">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            width={1200}
            height={800}
            className="card__image"
          />

          <span className="pill" style={{ marginTop: "0.8rem" }}>
            {experience.category}
          </span>
          <h1 className="detail__title">{experience.title}</h1>
          <p className="meta" style={{ marginBottom: "0.7rem" }}>
            {experience.destination}
          </p>
          <p>{experience.description}</p>
        </section>

        <aside className="detail__panel">
          <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
            Resumen
          </h2>
          <p className="meta" style={{ marginBottom: "0.7rem" }}>
            Precio por persona
          </p>
          <p style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.65rem" }}>
            ${experience.price}
          </p>
          <p style={{ marginBottom: "0.9rem" }}>Valoración promedio: ★ {experience.rating.toFixed(1)}</p>

          <button
            type="button"
            className="btn-primary"
            onClick={() => toggleFavorite(experience.id)}
            style={{ width: "100%", marginBottom: "0.7rem" }}
          >
            {favorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          </button>

          <Link href="/experiences" className="btn-secondary" style={{ width: "100%" }}>
            Seguir explorando
          </Link>
        </aside>
      </div>
    </main>
  );
}
