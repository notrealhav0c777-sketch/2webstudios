import Image from "next/image";
import { site } from "@/config/site";
import Reveal from "./Reveal";

// Composição assimétrica: cada projeto recebe colunas e proporção próprias.
const layout = [
  { col: "md:col-span-7", ratio: "aspect-[4/3]" },
  { col: "md:col-span-5 md:mt-40", ratio: "aspect-[4/5]" },
  { col: "md:col-span-6 md:col-start-4", ratio: "aspect-[16/10]" },
];

export default function Projects() {
  return (
    <section id="projetos" className="wrap border-t border-line py-28 md:py-40">
      <Reveal>
        <h2 className="max-w-3xl text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[1] tracking-[-0.04em]">Trabalho que fala por si.</h2>
        <p className="mt-6 max-w-md text-mute md:text-lg">Experiências digitais construídas para comunicar, conectar e converter.</p>
      </Reveal>
      <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-12">
        {site.projects.map((p, i) => {
          const l = layout[i % layout.length];
          return (
            <Reveal key={p.name} className={l.col}>
              <div className={`relative overflow-hidden ${l.ratio} ${p.image ? "bg-surface" : "cover border border-line"}`}>
                {p.image ? (
                  <Image src={p.image} alt={`Captura do site ${p.name}`} fill sizes="(min-width:768px) 55vw, 100vw" className="object-cover" />
                ) : (
                  <span className="absolute bottom-4 left-4 text-xs text-mute">Estudo de conceito</span>
                )}
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{p.name}</h3>
                  <p className="mt-1 text-sm text-mute">{p.category}</p>
                </div>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm transition-opacity hover:opacity-60">
                    Visitar site ↗<span className="sr-only"> {p.name}</span>
                  </a>
                )}
              </div>
              <p className="mt-3 max-w-sm text-sm text-mute">{p.description}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
