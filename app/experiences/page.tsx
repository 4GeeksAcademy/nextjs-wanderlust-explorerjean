"use client";

import { Suspense } from "react";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { useFavorites } from "@/context/FavoritesContext";
import { uniqueCategories, uniqueDestinations } from "@/src/data/experiences";
import { useExperienceFilters } from "@/hooks/useExperienceFilters";

function ExperiencesContent() {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { search, category, destination, filteredExperiences, setSearch, setCategory, setDestination } =
    useExperienceFilters();

  return (
    <main>
      <h1 className="section-title">Explorador de experiencias</h1>
      <p className="section-subtitle">
        Filtra por texto, categoría o destino. El estado de búsqueda vive en la URL para compartir
        vistas prefiltradas.
      </p>

      <section className="filters" aria-label="Controles de búsqueda y filtros">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          categories={uniqueCategories}
          destinations={uniqueDestinations}
          categoryValue={category}
          destinationValue={destination}
          onCategoryChange={setCategory}
          onDestinationChange={setDestination}
        />
      </section>

      {filteredExperiences.length > 0 ? (
        <section className="cards-grid" aria-live="polite">
          {filteredExperiences.map((experience) => (
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
          <p>No se encontraron resultados.</p>
        </section>
      )}
    </main>
  );
}

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <main>
          <p className="section-subtitle">Cargando experiencias...</p>
        </main>
      }
    >
      <ExperiencesContent />
    </Suspense>
  );
}
