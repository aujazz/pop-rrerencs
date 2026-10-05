import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#08090d] px-6 py-10 text-white md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-xs text-[#c9a55c] transition hover:text-white"
        >
          ← Tornar a l&apos;arxiu
        </Link>

        <h1 className="mt-10 text-4xl font-light tracking-[-0.05em] md:text-6xl">
          Història
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
          Músics, orquestres de ball i records dels escenaris de Porreres.
        </p>

        <article className="mt-8 border border-white/10 bg-white/[0.02] p-5 md:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-[#c9a55c]">1933 · Orquestres de ball</div>
          <h2 className="mt-3 text-3xl font-light tracking-tight text-[#c9a55c]">Dalmau Jazz: els primers balls</h2>
          <figure className="mt-6 max-w-[386px]">
            <Image src="/historia/dalmau-jazz-llum-doli.jpg" width={386} height={305} alt="Fotografia històrica dels músics publicada a l’article sobre Dalmau Jazz a Llum d’Oli" className="h-auto w-full border border-white/10" sizes="(max-width: 480px) 85vw, 386px" />
            <figcaption className="mt-3 text-xs leading-5 text-white/45">Fotografia publicada a l&apos;article sobre Dalmau Jazz. Llum d&apos;Oli, núm. 22 (1982), pàgina 7. Data de la fotografia no confirmada.</figcaption>
          </figure>
          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-white/65">
            <p>Segons el record publicat a Llum d&apos;Oli, l&apos;any 1933 un grup de joves músics de Porreres creà l&apos;orquestrina Dalmau Jazz, dirigida inicialment pel mestre Dalmau Coll.</p>
            <p>El relat situa la primera actuació per Nadal de 1933, al saló de Ca&apos;n Carrina, darrere el cafè de Ca&apos;n Xamena. Després actuaren a Porreres i a altres pobles de Mallorca.</p>
            <p>L&apos;article explica que el conjunt passà a anomenar-se New Boys Jazz i que es dissolgué arran dels esdeveniments de 1936.</p>
          </div>
          <h3 className="mt-6 text-lg font-medium">Els músics que recorda l&apos;article</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-white/65 md:grid-cols-2">
            <li>Josep Miró Pinya · violí</li>
            <li>Gabriel Barceló Mesquida · saxòfon i clarinet</li>
            <li>Joan Cerdà Nicolau · saxòfon i flauta</li>
            <li>Rafel Barceló Mesquida · trombó i trompeta</li>
            <li>Joan Barceló Bauçà · bateria</li>
            <li>Miquel Servera Vaquer · trompeta</li>
          </ul>
          <div className="mt-6 border-t border-white/10 pt-4 text-xs leading-6 text-white/40">
            <p>Font: Llum d&apos;Oli, núm. 22, octubre–novembre de 1982, pàgina 7.</p>
            <a href="https://agrupacioculturalporreres.cat/repositori/llum-doli-22.pdf#page=7" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-[#c9a55c] underline underline-offset-4 hover:text-white">Consultar l&apos;article original ↗</a>
            <p>Primera versió · pendent de revisió i ampliació.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
