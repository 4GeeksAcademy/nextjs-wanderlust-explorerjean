"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="field">
      <label htmlFor="search">Buscar por título</label>
      <input
        id="search"
        type="text"
        placeholder="Ej: vela"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
