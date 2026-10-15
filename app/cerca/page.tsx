import Link from "next/link";
import { sql } from "../../lib/db";
import { orquestres } from "../../lib/orquestres";

export const dynamic = "force-dynamic";

type MusicianResult = { id: number; name: string; instrument: string | null };

export default async function CercaPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const term = q.trim().slice(0, 120);
  const pattern = "%" + term.replace(/[\\%_]/g, "\\$&") + "%";
  const musicians = term
    ? (await sql`
        SELECT id, name, instrument
        FROM musicians
        WHERE name ILIKE ${pattern} OR instrument ILIKE ${pattern} OR biography ILIKE ${pattern}
        ORDER BY name
        LIMIT 100
      `) as MusicianResult[]
    : [];
  const orchestras = term
    ? orquestres.filter(o =>
        [o.name, o.description ?? ""].some(value =>
          value.toLocaleLowerCase("ca").includes(term.toLocaleLowerCase("ca"))
        )
      )
    : [];

  return (
    <main className="min-h-screen bg-[#08090d] px-6 py-10 text-white md:px-12">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-[#c9a55c] hover:text-white">← Tornar a l&apos;arxiu</Link>
        <h1 className="mt-9 text-4xl font-light tracking-tight md:text-5xl">Cerca</h1>
        {!term ? (
          <p className="mt-6 text-white/55">Escriu un nom, llinatge, instrument o orquestra al cercador de dalt.</p>
        ) : (
          <>
            <p className="mt-4 text-sm text-white/50">Resultats per a «{term}»</p>
            <section className="mt-10">
              <h2 className="mb-4 font-serif text-2xl text-[#c9a55c]">Músics</h2>
              {musicians.length ? (
                <ul className="divide-y divide-white/10 border-y border-white/10">
                  {musicians.map(m => (
                    <li key={m.id}>
                      <Link href={`/musics/${m.id}`} className="flex items-center justify-between gap-4 py-4 hover:text-[#c9a55c]">
                        <span>{m.name}{m.instrument ? <span className="ml-3 text-sm text-white/45">· {m.instrument}</span> : null}</span>
                        <span aria-hidden="true" className="text-[#c9a55c]">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-sm text-white/45">Cap músic trobat.</p>}
            </section>
            <section className="mt-10">
              <h2 className="mb-4 font-serif text-2xl text-[#c9a55c]">Orquestres</h2>
              {orchestras.length ? (
                <ul className="divide-y divide-white/10 border-y border-white/10">
                  {orchestras.map(o => (
                    <li key={o.slug}>
                      <Link href={`/orquestres/${o.slug}`} className="flex items-center justify-between gap-4 py-4 hover:text-[#c9a55c]">
                        <span>{o.name}</span>
                        <span aria-hidden="true" className="text-[#c9a55c]">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : <p className="text-sm text-white/45">Cap orquestra trobada.</p>}
            </section>
          </>
        )}
      </div>
    </main>
  );
}
