"use client";
import { useRef } from "react";
export function AudioPlayer({ url, title }: { url: string; title: string }) {
  const player = useRef<HTMLAudioElement>(null);
  return <div className="rounded-lg border border-[#c9a55c]/20 bg-white/[0.02] p-4 sm:p-5">
    <p className="mb-4 text-base text-white/80">{title}</p>
    <audio ref={player} controls preload="metadata" src={url} className="w-full">El teu navegador no suporta la reproducció d’àudio.</audio>
    <label className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/55">Velocitat
      <select defaultValue="1" onChange={event => {if(player.current) player.current.playbackRate=Number(event.target.value);}} className="min-h-11 rounded border border-white/15 bg-[#101116] px-3 text-white" aria-label="Velocitat de reproducció">
        {[0.75,1,1.25,1.5,2].map(speed => <option key={speed} value={speed}>{speed}×</option>)}
      </select>
    </label>
  </div>;
}
