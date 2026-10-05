import { sql } from "../../../lib/db";
import { MusicianText } from "../../../components/MusicianText";
import Link from "next/link";
import Image from "next/image";
import { losQuijotes } from "../../../lib/los-quijotes";
import { notFound } from "next/navigation";
import { orquestres } from "../../../lib/orquestres";

export default async function OrquestraPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const orquestra = orquestres.find((item) => item.slug === slug);
  if (!orquestra) notFound();
  const profiles = await sql.query("SELECT id, name FROM musicians");
  return (
    <main className="min-h-screen bg-[#08090d] px-6 py-10 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/orquestres" className="inline-flex min-h-11 items-center text-sm text-[#c9a55c] hover:text-white">← Tornar a les orquestres</Link>
        <h1 className="mt-8 break-words font-[Georgia,serif] text-4xl tracking-tight text-[#c9a55c] md:text-6xl">{orquestra.name}</h1>
        <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-7 text-white/60">{slug === "los-quijotes" ? "Porreres · Música de ball · Des de 1964" : orquestra.description || "La història d’aquesta orquestra encara està pendent d’incorporar."}</p>
        {slug === "los-quijotes" && (
          <article className="mt-8 max-w-4xl space-y-10 text-white/75">
            <p className="text-lg leading-8">{losQuijotes.introduction}</p>
            <figure><a href="/orquestres/los-quijotes/els-quijotes-1971.jpg" target="_blank" rel="noreferrer" aria-label="Ampliar fotografia de Los Quijotes de 1971"><Image src="/orquestres/los-quijotes/els-quijotes-1971.jpg" alt="Los Quijotes actuant, l’any 1971" width={870} height={586} sizes="(max-width: 768px) 100vw, 896px" priority className="h-auto w-full rounded-lg" /></a><figcaption className="mt-3 text-sm text-white/50">Los Quijotes · 1971</figcaption></figure>
            <section>
              <h2 className="mb-4 font-serif text-2xl text-[#c9a55c]">Primera formació · 1964</h2>
              <dl className="grid gap-x-8 sm:grid-cols-2">
                {losQuijotes.members.map(([name, instrument]) => <div key={name} className="flex justify-between gap-4 border-b border-white/10 py-3"><dt><MusicianText text={name} profiles={profiles as {id:number;name:string}[]} /></dt><dd className="text-white/50">{instrument}</dd></div>)}
              </dl>
            </section>
            {losQuijotes.history.map(section => <section key={section.title}><h2 className="mb-3 font-serif text-2xl text-[#c9a55c]">{section.title}</h2><p className="leading-8"><MusicianText text={section.text} profiles={profiles as {id:number;name:string}[]} /></p></section>)}
            <section><h2 className="mb-5 font-serif text-2xl text-[#c9a55c]">Canvis en la formació</h2><div className="space-y-5">{losQuijotes.changes.map(change => <div key={change.title}><h3 className="mb-2 text-lg text-white">{change.title}</h3><p className="leading-8"><MusicianText text={change.text} profiles={profiles as {id:number;name:string}[]} /></p></div>)}</div></section>
            <section><h2 className="mb-4 font-serif text-2xl text-[#c9a55c]">Actuacions documentades</h2><ol>{losQuijotes.performances.map(([date, name, source]) => <li key={date} className="border-b border-white/10 py-4"><p className="text-sm text-[#c9a55c]">{date}</p><p className="mt-1 text-lg">{name}</p><p className="mt-1 text-sm text-white/45">Font: {source}</p></li>)}</ol></section>
            <section><h2 className="mb-5 font-serif text-2xl text-[#c9a55c]">Fotografies de l’arxiu</h2><div className="grid items-start gap-6 sm:grid-cols-2">
              <figure><a href="/orquestres/los-quijotes/els-quijotes-1970.jpg" target="_blank" rel="noreferrer" aria-label="Ampliar fotografia de Los Quijotes de 1970"><Image src="/orquestres/los-quijotes/els-quijotes-1970.jpg" alt="Retrat de Los Quijotes en unes escales, l’any 1970" width={563} height={719} sizes="(max-width: 640px) 100vw, 448px" className="h-auto w-full rounded-lg" /></a><figcaption className="mt-3 text-sm text-white/50">Los Quijotes · 1970</figcaption></figure>
              <figure><a href="/orquestres/los-quijotes/els-quijotes.jpg" target="_blank" rel="noreferrer" aria-label="Ampliar fotografia de Los Quijotes en una actuació"><Image src="/orquestres/los-quijotes/els-quijotes.jpg" alt="Los Quijotes en una actuació a l’aire lliure" width={772} height={535} sizes="(max-width: 640px) 100vw, 448px" className="h-auto w-full rounded-lg" /></a><figcaption className="mt-3 text-sm text-white/50">Los Quijotes en una actuació · Data no indicada</figcaption></figure>
            </div></section>
            <p className="border-t border-white/10 pt-5 text-sm leading-6 text-white/45">Contingut elaborat a partir dels documents «Los Quijotes -historial-» i «Los Quijotes -actuacions-» aportats a l’arxiu. La data de dissolució i algunes dates dels canvis de formació resten per concretar.</p>
          </article>
        )}
      </div>
    </main>
  );
}
