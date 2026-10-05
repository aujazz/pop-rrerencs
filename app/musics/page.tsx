import Link from "next/link";
import { sql } from "../../lib/db";

export const dynamic = "force-dynamic";

type Musician = {
  id: number;
  name: string;
  birth_date: string | null;
  instrument: string | null;
  biography: string | null;
};

export default async function MusicsPage() {
  const musicians = (await sql`
    SELECT
      id,
      name,
      birth_date,
      instrument,
      biography
    FROM musicians
    ORDER BY name ASC
  `) as Musician[];

  return (
    <main className="min-h-screen bg-[#08090d] px-6 py-8 text-white md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-8 inline-flex min-h-11 items-center text-sm text-[#c9a55c] transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a55c]">
          ← Tornar a l&apos;arxiu
        </Link>
        <div className="mb-12">
          <div className="text-[10px] uppercase tracking-[0.35em] text-[#c9a55c]">
            POP-RRERENCS
          </div>

          <h1 className="mt-4 text-5xl font-light tracking-[-0.05em]">
            Músics
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
            Persones que han format part de la història musical de Porreres.
          </p>
        </div>

        {musicians.length === 0 ? (
          <div className="border border-white/[0.08] bg-white/[0.02] p-10 text-center">
            <div className="text-3xl text-[#c9a55c]/40">♬</div>

            <p className="mt-4 text-sm text-white/40">
              Encara no hi ha músics registrats.
            </p>
          </div>
        ) : (
          <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {musicians.map((musician) => (
             <Link
  key={musician.id}
  href={`/musics/${musician.id}`}
  className="block bg-[#0b0c11] p-7 transition hover:bg-[#101116]"
>
                <h2 className="text-lg font-medium">
                  {musician.name}
                </h2>

                {musician.instrument ? (
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#c9a55c]/70">
                    {musician.instrument}
                  </div>
                ) : null}

                {musician.birth_date ? (
                  <div className="mt-4 text-xs text-white/30">
                    {new Date(musician.birth_date).getFullYear()}
                  </div>
                ) : null}

                {musician.biography ? (
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-white/40">
                    {musician.biography}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
