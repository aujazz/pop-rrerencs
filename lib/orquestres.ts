export type OrquestraAudio = {
  url: string;
  title?: string;
};

export type Orquestra = {
  slug: string;
  name: string;
  description?: string;
  audio?: OrquestraAudio[];
};

export const orquestres: Orquestra[] = [
  {
    slug: "los-castigadores",
    name: "Los Castigadores",
    description: "Porreres · Grup musical · 1964",
    audio: [{ url: "/orquestres/los-castigadores/Castigadores.mp3", title: "Enregistrament de Los Castigadores" }],
  },
  {
    slug: "los-quijotes",
    name: "Los Quijotes",
    audio: [
      { url: "/orquestres/los-quijotes/Quijotes.mp3", title: "Enregistrament de Los Quijotes" },
    ],
  },
];

const alphabet = new Intl.Collator("ca", { sensitivity: "base", numeric: true });
export function sortedOrquestres() {
  return [...orquestres].sort((a, b) => alphabet.compare(a.name, b.name));
}
