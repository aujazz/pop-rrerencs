import Link from "next/link";
import { Fragment } from "react";
type Profile = { id: number; name: string };
export function MusicianText({ text, profiles }: { text: string; profiles: Profile[] }) {
  const names = profiles.flatMap(profile => [{label:profile.name,id:profile.id}, ...(profile.name === "Tomeu Salleras Lladó" ? [{label:"Tomeu Salleras",id:profile.id}] : [])]);
  const parts = []; let rest = text;
  while (rest) {
    const matches = names.map(name => ({...name,position:rest.indexOf(name.label)})).filter(match => match.position >= 0).sort((a,b) => a.position-b.position || b.label.length-a.label.length);
    const match=matches[0];
    if(!match){parts.push(rest);break;}
    parts.push(rest.slice(0,match.position));
    parts.push(<Link key={parts.length} href={"/musics/"+match.id} className="text-[#c9a55c] underline decoration-[#c9a55c]/40 underline-offset-4 hover:text-white">{match.label}</Link>);
    rest=rest.slice(match.position+match.label.length);
  }
  return <>{parts.map((part,index)=><Fragment key={index}>{part}</Fragment>)}</>;
}
