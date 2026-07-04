# Wanderlust Explorer

MVP multipagina construido con Next.js para descubrir, filtrar y guardar experiencias de viaje.

## Features

- Home en `/` con hero y CTA al explorador.
- Explorador en `/experiences` con:
  - busqueda por titulo usando regex case-insensitive,
  - filtro por categoria,
  - filtro por destino,
  - sincronizacion de estado en query params (`search`, `category`, `destination`).
- Detalle en `/experiences/[id]` resolviendo por dataset local.
- Favoritos en `/favorites` con estado global de cliente (`useState` en un provider).
- Perfil en `/profile` con resumen dinamico de favoritos guardados.
- Dataset local de 100 experiencias tipadas en TypeScript en `src/data/experiences.ts`.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS + estilos globales complementarios

## Design References

1. Airbnb Experiences
   - URL: https://www.airbnb.com/experiences
   - Referencia tomada: exploracion visual con tarjetas grandes, metadatos compactos y enfoque en descubrimiento.

2. GetYourGuide
   - URL: https://www.getyourguide.com/
   - Referencia tomada: patron de busqueda + filtros visibles, densidad de informacion equilibrada y legibilidad de resultados.

3. Atlas Obscura Trips
   - URL: https://www.atlasobscura.com/trips
   - Referencia tomada: narrativa visual editorial, identidad fuerte y sensacion de exploracion no generica.

## Run Locally

```bash
npm install
npm run dev
```

Abrir en `http://localhost:3000`.

## Shareable URL Example

`/experiences?search=vela&category=Adventure&destination=Dubrovnik,%20Croatia`
