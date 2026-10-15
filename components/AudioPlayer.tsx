export function AudioPlayer({ url, title }: { url: string; title: string }) {
  return (
    <div className="rounded-lg border border-[#c9a55c]/20 bg-white/[0.02] p-4 sm:p-5">
      <p className="mb-4 text-base text-white/80">{title}</p>
      <audio controls preload="metadata" src={url} className="w-full">
        El teu navegador no suporta la reproducció d’àudio.
      </audio>
    </div>
  );
}
