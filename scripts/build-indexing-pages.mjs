import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const shell = await readFile("dist/index.html", "utf8");
const sitemap = await readFile("dist/sitemap.xml", "utf8");

async function writePage(file, tag) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, shell.replace("</head>", `  ${tag}\n  </head>`));
}

await mkdir("dist/_indexing", { recursive: true });
await writeFile("dist/_indexing/fallback.html", shell);
for (const [, address] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const { pathname } = new URL(address);
  const file = pathname === "/" ? "dist/index.html" : `dist/_indexing${pathname}.html`;
  await writePage(file, `<link data-initial-indexing rel="canonical" href="${address}" />`);
}
await writePage("dist/_indexing/thank-you.html", '<meta data-initial-indexing name="robots" content="noindex" />');
