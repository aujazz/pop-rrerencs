export type Orquestra = {
  slug: string;
  name: string;
  description?: string;
};

export const orquestres: Orquestra[] = [{ slug: "los-quijotes", name: "Los Quijotes" }];

const alphabet = new Intl.Collator("ca", { sensitivity: "base", numeric: true });
export function sortedOrquestres() {
  return [...orquestres].sort((a, b) => alphabet.compare(a.name, b.name));
}
