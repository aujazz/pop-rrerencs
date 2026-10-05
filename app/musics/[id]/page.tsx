import { AudioPlayer } from "../../../components/AudioPlayer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sql } from "../../../lib/db";

type Musician = {
  id: number;
  name: string;
  birth_date: string | null;
  instrument: string | null;
  biography: string | null;
};

type MusicianImage = {
  id: number;
  url: string;
  caption: string | null;
  sort_order: number;
};

type MusicianAudio = {
  id: number;
  url: string;
  title: string | null;
  sort_order: number;
};

export default async function MusicianPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!/^[0-9]+$/.test(id)) notFound();

  const musicians = await sql`
    SELECT
      id,
      name,
      birth_date,
      instrument,
      biography
    FROM musicians
    WHERE id = ${id}
    LIMIT 1
  `;

  const musician = musicians[0] as Musician | undefined;

  if (!musician) {
    notFound();
  }

  const images = (await sql`
    SELECT
      id,
      url,
      caption,
      sort_order
    FROM musician_images
    WHERE musician_id = ${id}
    ORDER BY sort_order ASC, id ASC
  `) as MusicianImage[];

  const audio = (await sql`
    SELECT
      id,
      url,
      title,
      sort_order
    FROM musician_audio
    WHERE musician_id = ${id}
    ORDER BY sort_order ASC, id ASC
  `) as MusicianAudio[];

  const portrait = images[0];
  const gallery = images.slice(1);
  const paragraphs = musician.biography?.split(String.fromCharCode(10,10)).filter(Boolean) || [];
  const isTomeu = musician.name === "Tomeu Salleras Lladó";
  const photo = (image: MusicianImage) => (
    <figure key={image.id} className="my-8">
      <a href={image.url} target="_blank" rel="noreferrer" aria-label={"Ampliar fotografia: " + (image.caption || musician.name)} className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a55c]">
        <Image src={image.url} alt={image.caption || musician.name} width={1200} height={1600} unoptimized className="mx-auto h-auto max-h-[650px] w-auto max-w-full rounded-lg object-contain" />
      </a>
      {image.caption && <figcaption className="mt-3 text-center text-sm text-white/45">{image.caption}</figcaption>}
    </figure>
  );
  return (
    <main className="min-h-screen bg-[#08090d] px-6 py-8 text-white md:px-12 md:py-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/musics" className="inline-flex min-h-11 items-center text-sm text-[#c9a55c] hover:text-white">← Tornar als músics</Link>
        <header className="mt-6 flex items-center gap-5 border-b border-white/10 pb-7 sm:gap-8">
          {portrait && <Image src={portrait.url} alt={musician.name} width={143} height={163} unoptimized priority className="h-auto w-24 shrink-0 rounded-md border border-[#c9a55c]/30 sm:w-32" />}
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">POP-RRERENCS · Músics</p>
            <h1 className="mt-3 font-serif text-3xl leading-tight text-[#c9a55c] sm:text-5xl">{musician.name}</h1>
            {musician.instrument && <p className="mt-3 text-sm text-[#c9a55c]/80">{musician.instrument}</p>}
            {musician.birth_date && <p className="mt-2 text-sm text-white/50">Naixement · {new Date(musician.birth_date).toLocaleDateString("ca-ES", {day:"numeric", month:"long", year:"numeric", timeZone:"UTC"})}</p>}
          </div>
        </header>
        {audio.length > 0 && <section className="mt-8" aria-label="Entrevista i arxiu sonor"><h2 className="mb-4 font-serif text-2xl text-[#c9a55c]">Arxiu sonor</h2>{isTomeu && <p className="mb-4 text-sm text-white/50">Entrevista del 31 de gener de 2023 · Durada aproximada: 1 h 9 min</p>}<div className="space-y-4">{audio.map(track => <AudioPlayer key={track.id} url={track.url} title={track.title || "Enregistrament"} />)}</div></section>}
        <article className="mt-8 text-base leading-8 text-white/75 sm:text-lg">
          {paragraphs.length ? paragraphs.map((paragraph, index) => <div key={index}>
            <p className="mb-6 whitespace-pre-line">{paragraph}</p>
            {isTomeu ? ([1,2,3].includes(index) && gallery[index-1] && photo(gallery[index-1])) : (gallery[index] && photo(gallery[index]))}
          </div>) : <p className="text-white/40">Biografia pendent d’incorporar.</p>}
          {!isTomeu && gallery.slice(paragraphs.length).map(photo)}
        </article>
        {isTomeu && <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-6 text-white/45">Font: document «Tomeu Salleras Lladó» i fotografies aportades a l’arxiu. <Link href="/orquestres/los-quijotes" className="text-[#c9a55c] underline underline-offset-4">Veure Los Quijotes</Link></p>}

      </div>
    </main>
  );
}
