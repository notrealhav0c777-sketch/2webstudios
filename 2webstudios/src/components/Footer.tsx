import Image from "next/image";
import SocialLinks from "./SocialLinks";

const links = [{ href: "#projetos", label: "Projetos" }, { href: "#servicos", label: "Serviços" }, { href: "#contato", label: "Contato" }];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-12 py-16 md:flex-row md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="" width={1122} height={871} className="h-8 w-auto" />
            <span className="font-medium tracking-tight">2WEBSTUDIOS</span>
          </div>
          <p className="mt-5 max-w-xs text-sm text-mute">Built with intention. Designed for the web.</p>
        </div>
        <nav aria-label="Rodapé" className="flex flex-col gap-3 text-sm md:items-start">
          {links.map((l) => <a key={l.href} href={l.href} className="text-mute transition-opacity hover:opacity-60 hover:text-fg">{l.label}</a>)}
        </nav>
        <SocialLinks quiet />
      </div>
      <p className="wrap pb-10 text-xs text-mute">© {new Date().getFullYear()} 2WEBSTUDIOS</p>
    </footer>
  );
}
