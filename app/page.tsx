const sections = [
  {
    number: "01",
    title: "MÚSICS",
    description:
      "Persones, històries i veus que han format part de la música de Porreres.",
    symbol: "♬",
  },
  {
    number: "02",
    title: "ORQUESTRES",
    description:
      "Les agrupacions que varen posar música a les festes i als balls del poble.",
    symbol: "♫",
  },
  {
    number: "03",
    title: "LLOCS DE BALL",
    description:
      "Espais on la música, el ball i la gent de Porreres es varen trobar.",
    symbol: "✦",
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

      {/* Navigation */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/[0.07] px-6 py-5 md:px-12">
        <div>
          <div className="text-[11px] uppercase tracking-[0.38em] text-[#c9a55c]">
            Arxiu musical
          </div>

          <div className="mt-1 text-xl font-medium tracking-[-0.03em]">
            POP-RRERENCS
          </div>
        </div>

        <div className="hidden text-[10px] uppercase tracking-[0.3em] text-white/30 md:block">
          Porreres · Mallorca
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-6 py-24 md:px-12">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-[#c9a55c]/60" />
            <span className="text-[10px] uppercase tracking-[0.38em] text-[#c9a55c]/80">
              La memòria musical de Porreres
            </span>
          </div>

          <h1 className="text-[clamp(4rem,11vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]">
            POP-
            <br />
            RRERENCS
          </h1>

          <p className="mt-10 max-w-xl text-base leading-7 text-white/45 md:text-lg">
            Un arxiu viu de músics, orquestres i llocs de ball que formen part
            de la història musical de Porreres.
          </p>

          <button className="mt-10 rounded-full border border-[#c9a55c]/40 px-7 py-3 text-[10px] uppercase tracking-[0.28em] text-[#c9a55c] transition hover:bg-[#c9a55c] hover:text-[#08090d]">
            Explorar l&apos;arxiu
          </button>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-right md:block">
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            Memòria · Música · Porreres
          </div>
          <div className="mt-2 text-3xl font-light text-white/[0.08]">
            ♫
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-12">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-[#c9a55c]/70">
                Explora
              </div>
              <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-4xl">
                Tres maneres d&apos;entrar a la història
              </h2>
            </div>

            <div className="hidden text-4xl font-light text-white/10 md:block">
              03
            </div>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            {sections.map((section) => (
              <button
                key={section.number}
                className="group min-h-[320px] bg-[#0b0c11] p-8 text-left transition duration-500 hover:bg-[#101116] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.25em] text-white/20">
                    {section.number}
                  </span>

                  <span className="text-3xl font-light text-[#c9a55c]/40 transition duration-500 group-hover:scale-110 group-hover:text-[#c9a55c]">
                    {section.symbol}
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="text-xl font-medium tracking-[0.08em]">
                    {section.title}
                  </h3>

                  <p className="mt-4 max-w-xs text-sm leading-6 text-white/35">
                    {section.description}
                  </p>

                  <div className="mt-7 text-[9px] uppercase tracking-[0.3em] text-[#c9a55c]/50 transition group-hover:text-[#c9a55c]">
                    Explorar →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-12">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#c9a55c]/60">
              Un projecte de memòria
            </div>

            <p className="mt-6 text-2xl font-light leading-relaxed tracking-[-0.02em] text-white/65 md:text-3xl">
              Cada músic té una història.
              <br />
              Cada orquestra, una època.
              <br />
              Cada lloc, una memòria.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.07] px-6 py-6 md:px-12">
        <div className="flex flex-col justify-between gap-3 text-[9px] uppercase tracking-[0.25em] text-white/20 md:flex-row">
          <span>POP-RRERENCS</span>
          <span>Arxiu musical de Porreres</span>
          <span>BETA · Estam en proves</span>
        </div>
      </footer>
    </main>
  );
}