"use client";

import { useFavorites } from "@/context/FavoritesContext";

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <main>
      <h1 className="section-title">Perfil</h1>
      <p className="section-subtitle">Vista estática de usuario para el MVP.</p>

      <section className="detail">
        <article className="detail__panel">
          <p className="pill">Traveler Profile</p>
          <h2 className="detail__title" style={{ marginTop: "0.7rem" }}>
            Lea Moreau
          </h2>
          <p className="meta" style={{ marginBottom: "0.7rem" }}>
            Product Manager at Wanderlust Labs
          </p>
          <p>
            Curiosa por los viajes con enfoque local, experiencias de comida de barrio y destinos
            costeros con rutas de aventura suave.
          </p>
        </article>

        <aside className="counter-card">
          <p className="meta" style={{ marginBottom: "0.4rem" }}>
            Favoritos guardados
          </p>
          <strong>{favorites.length}</strong>
          <p className="meta">Este valor se actualiza en tiempo real con el estado global de la app.</p>
        </aside>
      </section>
    </main>
  );
}
