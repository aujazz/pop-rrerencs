import Link from "next/link";
const sections = [
  {
    number: "01",
    title: "HISTÒRIA",
    description:
      "Un recorregut per la història musical de Porreres, amb records i fotografies.",
    symbol: "blanca",
    href: "/historia",
  },
  {
    number: "02",
    title: "ORQUESTRES",
    description:
      "Les agrupacions que varen posar música a les festes i als balls del poble.",
    symbol: "negra",
    href: "/orquestres",
  },
  {
    number: "03",
    title: "MÚSICS",
    description:
      "Persones, històries i veus que han format part de la música de Porreres.",
    symbol: "corchea",
    href: "/musics",
  },

  {
    number: "04",
    title: "LLOCS DE BALL",
    description:
      "Espais on la música, el ball i la gent de Porreres es varen trobar.",
    symbol: "semicorchea",
    href: "/llocs",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      {/* Ambient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-20%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#c9a55c]/[0.07] blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#49366f]/[0.10] blur-[130px]" />
        <div className="absolute right-[-10%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#214c55]/[0.10] blur-[130px]" />
      </div>



      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-3 md:px-12 md:py-8">
        <div className="max-w-4xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-px w-12 bg-[#c9a55c]/60" />
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#c9a55c]/80">
              La memòria musical de Porreres
            </span>
          </div>

          <h1 className="text-[#c9a55c] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[0.95] tracking-[-0.06em]">
            POP-RRERENCS
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/45 md:text-lg">
            Un arxiu viu de músics, orquestres i llocs de ball que formen part
            de la història musical de Porreres.
          </p>


        </div>

        <div className="absolute bottom-8 right-8 hidden text-right md:block">

          <div className="mt-2 text-3xl font-light text-white/[0.08]">
            ♫
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-6 py-5 md:px-12">


          <div className="grid grid-flow-col auto-cols-[85%] gap-px overflow-x-auto overscroll-x-contain snap-x snap-mandatory border border-white/[0.08] bg-white/[0.08] md:grid-flow-row md:auto-cols-auto md:grid-cols-4">
            {sections.map((section) => (
              <Link
  key={section.number}
  href={section.href}
  className="group snap-start min-h-[200px] md:min-h-[240px] bg-[#0b0c11] p-5 text-left transition duration-500 hover:bg-[#101116] md:p-5 lg:p-6"
>
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.25em] text-white/20">
                    {section.number}
                  </span>

                  <span className="text-3xl font-light text-[#c9a55c]/40 transition duration-500 group-hover:scale-110 group-hover:text-[#c9a55c]">
                    <svg aria-hidden="true" viewBox="0 0 32 36" className="h-9 w-8" fill="none">
                      <ellipse cx="12" cy="28" rx="6" ry="4" transform="rotate(-20 12 28)" fill={section.symbol === "blanca" ? "none" : "currentColor"} stroke="currentColor" strokeWidth="2" />
                      <path d="M18 26V3" stroke="currentColor" strokeWidth="2" />
                      {section.symbol === "corchea" || section.symbol === "semicorchea" ? <path d="M18 3C20 8 29 9 24 17C26 11 19 10 18 7Z" fill="currentColor" /> : null}
                      {section.symbol === "semicorchea" ? <path d="M18 10C20 15 29 16 24 24C26 18 19 17 18 14Z" fill="currentColor" /> : null}
                    </svg>
                  </span>
                </div>

                <div className="mt-5 md:mt-6">
                  <h3 className="text-xl font-medium tracking-[0.08em]">
                    {section.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/35">
                    {section.description}
                  </p>

                  <div className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#c9a55c]/50 transition group-hover:text-[#c9a55c]">
                    Explorar →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-6 py-5 md:px-12 md:py-6">
          <div className="w-full">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#c9a55c]/60">
              Un projecte de memòria
            </div>

            <p className="mt-3 text-sm font-light leading-relaxed tracking-[-0.02em] text-white/65 md:text-lg">
  Cada músic té una història. — Cada orquestra, una època. — Cada lloc, una memòria.
</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07] px-6 py-3 md:px-12">
        <div className="flex flex-col justify-between gap-1 text-[9px] uppercase tracking-[0.25em] text-white/20 md:flex-row">
          <span>POP-RRERENCS</span>
          <span>Arxiu musical de Porreres</span>
          <span>BETA · Estam en proves</span>
        </div>
      </footer>
    </main>
  );
}
