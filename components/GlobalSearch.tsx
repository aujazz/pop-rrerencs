import Link from "next/link";

export function GlobalSearch() {
  return (
    <header className="relative z-20 border-b border-white/10 bg-[#08090d] px-6 py-3 text-white md:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 md:gap-5">
        <Link href="/" aria-label="Inici de Pop-rrerencs" title="Pop-rrerencs · Inici" className="flex shrink-0 items-center justify-center rounded-lg transition-opacity hover:opacity-80"><img src="/icons/escut-guitarra-192.png" alt="Escut de Pop-rrerencs" width={44} height={44} className="h-11 w-11 object-contain md:h-12 md:w-12" /></Link>
        <form action="/cerca" method="get" role="search" className="flex w-full max-w-lg items-center gap-2">
          <label htmlFor="global-search" className="sr-only">Cercar a Pop-rrerencs</label>
          <input id="global-search" name="q" type="search" placeholder="Cercar músics, orquestres..."
            className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/[0.05] px-4 py-2.5 text-sm text-white placeholder:text-white/45 focus:border-[#c9a55c] focus:outline-none" />
          <button type="submit" aria-label="Cercar" className="rounded-md border border-[#c9a55c]/40 px-4 py-2.5 text-sm text-[#c9a55c] hover:bg-[#c9a55c]/10">Cercar</button>
        </form>
      </div>
    </header>
  );
}
