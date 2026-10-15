import Image from "next/image";
import Link from "next/link";
import { sql } from "../../lib/db";

export const dynamic = "force-dynamic";

type Musician = {
  id: number;
  name: string;
  instrument: string | null;
  portrait_url: string | null;
};

export default async function MusicsPage() {
  const musicians = (await sql`
    SELECT m.id, m.name, m.instrument,
      (SELECT mi.url FROM musician_images mi
       WHERE mi.musician_id = m.id
       ORDER BY mi.sort_order ASC, mi.id ASC LIMIT 1) AS portrait_url
    FROM musicians m
    ORDER BY m.name ASC
  `) as Musician[];

  const collator = new Intl.Collator("ca", { sensitivity: "base", numeric: true });
  musicians.sort((a, b) => collator.compare(a.name, b.name));

  return (
    <main className="min-h-screen bg-[#08090d] px-6 py-8 text-white md:px-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-8 inline-flex min-h-11 items-center text-sm text-[#c9a55c] transition hover:text-white">
          ← Tornar a l&apos;arxiu
        </Link>
        <div className="mb-12">
          <div className="text-[10px] uppercase tracking-[0.35em] text-[#c9a55c]">POP-RRERENCS</div>
          <h1 className="mt-4 text-5xl font-light tracking-[-0.05em]">Músics</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
            Persones que han format part de la història musical de Porreres.
          </p>
        </div>

        {musicians.length === 0 ? (
          <p className="border border-white/[0.08] p-8 text-sm text-white/40">
            Encara no hi ha músics registrats.
          </p>
        ) : (
          <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {musicians.map((musician) => (
              <Link key={musician.id} href={`/musics/${musician.id}`}
                className="flex items-center gap-4 bg-[#0b0c11] p-5 transition hover:bg-[#101116]">
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-white/[0.06]">
                  {musician.portrait_url ? (
                    <Image src={musician.portrait_url} alt={musician.name} fill unoptimized
                      sizes="80px" className="object-cover object-top" />
                  ) : (
                    <span aria-hidden="true" className="flex h-full items-center justify-center text-3xl text-white/30">♬</span>
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="font-serif text-lg leading-snug text-[#c9a55c]">{musician.name}</h2>
                  {musician.instrument && (
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/50">{musician.instrument}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
