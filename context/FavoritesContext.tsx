"use client";

import { createContext, useContext, useMemo, useState } from "react";

interface FavoritesContextValue {
  favorites: number[];
  isFavorite: (experienceId: number) => boolean;
  toggleFavorite: (experienceId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const contextValue = useMemo<FavoritesContextValue>(
    () => ({
      favorites,
      isFavorite: (experienceId: number) => favorites.includes(experienceId),
      toggleFavorite: (experienceId: number) => {
        setFavorites((current) =>
          current.includes(experienceId)
            ? current.filter((id) => id !== experienceId)
            : [...current, experienceId],
        );
      },
    }),
    [favorites],
  );

  return <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }

  return context;
}
