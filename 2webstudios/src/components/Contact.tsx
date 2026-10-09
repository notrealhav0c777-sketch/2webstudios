import { contactLink, linkProps } from "@/lib/links";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contato" className="wrap border-t border-line py-28 md:py-44">
      <Reveal>
        <h2 className="max-w-5xl text-[clamp(2.75rem,9vw,8rem)] font-medium leading-[0.98] tracking-[-0.045em]">Sua próxima ideia começa aqui.</h2>
        <p className="mt-8 max-w-md text-mute md:text-lg">Tem um projeto em mente? Vamos transformar sua presença digital.</p>
        <div className="mt-12 flex flex-col items-start gap-10 md:flex-row md:items-center">
          {contactLink.ready ? (
            <a href={contactLink.href} {...linkProps(contactLink)} className="btn btn-primary">Iniciar um projeto ↗</a>
          ) : (
            // Habilita sozinho quando houver WhatsApp ou e-mail em src/config/site.ts
            <span aria-disabled="true" className="btn btn-off">Iniciar um projeto ↗<span className="sr-only"> (indisponível no momento)</span></span>
          )}
          <SocialLinks />
        </div>
      </Reveal>
    </section>
  );
}
