This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Àudio de les orquestres

Les fitxes d’orquestres fan servir el mateix `AudioPlayer` que les de músics,
amb controls de reproducció i selector de velocitat. Per afegir enregistraments,
incorpora el camp opcional `audio` a l’orquestra de `lib/orquestres.ts`:

```ts
{
  slug: "los-quijotes",
  name: "Los Quijotes",
  audio: [
    { url: "/orquestres/los-quijotes/enregistrament.mp3", title: "Títol de l’enregistrament" },
  ],
}
```

Desa el fitxer d’àudio a `public/orquestres/los-quijotes/enregistrament.mp3`
o utilitza una URL HTTPS que apunti directament al fitxer d’àudio.
L’ordre dels elements de `audio` determina l’ordre dels reproductors.
Si no hi ha enregistraments, la secció «Arxiu sonor» no es mostra.
L’exemple és orientatiu: cal aportar el fitxer abans d’afegir-ne la ruta.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
