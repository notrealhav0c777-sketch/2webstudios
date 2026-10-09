import { contactLink, linkProps } from "@/lib/links";

const lines = ["Sua marca.", "Seu espaço.", "Na web."];

export default function Hero() {
  return (
    <section id="top" className="flex min-h-svh flex-col justify-end pb-10 pt-32 wrap md:pb-14">
      <p className="rise mb-8 text-xs tracking-[0.25em] text-mute" style={{ animationDelay: "100ms" }}>INDEPENDENT DIGITAL STUDIO</p>
      <h1 className="text-[clamp(3.1rem,12.5vw,11rem)] font-medium leading-[0.92] tracking-[-0.045em]">
        {lines.map((l, i) => (
          <span key={l} className="block overflow-hidden pb-[0.08em]">
            <span className="rise block" style={{ animationDelay: `${250 + i * 140}ms` }}>{l}</span>
          </span>
        ))}
      </h1>
      <div className="rise mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between" style={{ animationDelay: "800ms" }}>
        <p className="max-w-md text-base text-mute md:text-lg">
          Desenvolvemos sites autorais, rápidos e cuidadosamente projetados para empresas que querem se destacar no digital.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={contactLink.href} {...linkProps(contactLink)} className="btn btn-primary">Vamos conversar ↗</a>
          <a href="#projetos" className="btn btn-ghost">Explorar projetos ↓</a>
        </div>
      </div>
      <div className="sweep mt-12 md:mt-14" aria-hidden="true" />
    </section>
  );
}
