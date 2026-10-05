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
          Llocs de ball
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
          Espais on la música, el ball i la gent de Porreres es varen trobar.
        </p>

        <div className="mt-10 rounded-lg border border-white/10 p-8 text-sm text-white/40">
          Encara no hi ha contingut disponible.
        </div>
      </div>
    </main>
  );
}
