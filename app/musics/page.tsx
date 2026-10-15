import Link from "next/link";
import { sql } from "../../lib/db";

export const dynamic = "force-dynamic";

type Musician = {
  id: number;
  name: string;
};

export default async function MusicsPage() {
  const musicians = (await sql`
    SELECT id, name
    FROM musicians
    ORDER BY name ASC
  `) as Musician[];

  const collator = new Intl.Collator("ca", { sensitivity: "base", numeric: true });
  musicians.sort((a, b) => collator.compare(a.name, b.name));

  return (
    <main className="min-h-screen bg-[#08090d] px-6 py-10 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-xs text-[#c9a55c] transition hover:text-white">
          ← Tornar a l&apos;arxiu
        </Link>

        <h1 className="mt-10 text-4xl font-light tracking-[-0.05em] md:text-6xl">
          Músics
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
          Els músics de Porreres, de la A a la Z.
        </p>

        <section className="mt-10 max-w-3xl" aria-label="Llistat alfabètic de músics">
          <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#c9a55c]/70">
            <span>Índex de músics</span><span>A — Z</span>
          </div>
          {musicians.length ? (
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {musicians.map((musician) => (
                <li key={musician.id}>
                  <Link href={`/musics/${musician.id}`} className="group flex min-h-16 items-center justify-between gap-5 py-5 text-[#c9a55c] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a55c]">
                    <span className="break-words font-[Georgia,serif] text-2xl tracking-tight md:text-3xl">{musician.name}</span>
                    <span aria-hidden="true" className="shrink-0 text-lg text-[#c9a55c]/50 transition group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : <p className="border-y border-white/10 py-6 text-sm text-white/45">Encara no hi ha músics a l’arxiu.</p>}
        </section>
      </div>
    </main>
  );
}
