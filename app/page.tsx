import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <section className="hero__panel">
        <h1>Encuentra experiencias fuera de lo común</h1>
        <p>
          Explora tours gastronómicos, rutas de aventura, sesiones de bienestar y escapadas culturales
          con filtros compartibles por URL.
        </p>
        <Link href="/experiences" className="btn-primary">
          Comenzar a explorar
        </Link>
      </section>
    </main>
  );
}
