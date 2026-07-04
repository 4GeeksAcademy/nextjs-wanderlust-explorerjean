"use client";

interface FilterBarProps {
  categories: string[];
  destinations: string[];
  categoryValue: string;
  destinationValue: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

export function FilterBar({
  categories,
  destinations,
  categoryValue,
  destinationValue,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <>
      <div className="field">
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          value={categoryValue}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="">Todas</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="destination">Destino</label>
        <input
          id="destination"
          type="text"
          list="destination-options"
          placeholder="Ej: Croatia o Bangkok"
          value={destinationValue}
          onChange={(event) => onDestinationChange(event.target.value)}
        />
        <datalist id="destination-options">
          {destinations.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </datalist>
      </div>
    </>
  );
}
