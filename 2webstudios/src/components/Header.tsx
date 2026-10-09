"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { contactLink, linkProps } from "@/lib/links";

const nav = [{ href: "#servicos", label: "Serviços" }, { href: "#projetos", label: "Projetos" }];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const items = () => Array.from(menu.current?.querySelectorAll<HTMLElement>("a,button") ?? []);
    items()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return setOpen(false);
      if (e.key !== "Tab") return;
      const f = items(), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); toggle.current?.focus(); };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink">
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        <a href="#top" aria-label="2WEBSTUDIOS — início">
          <Image src="/images/logo.png" alt="2WEBSTUDIOS" width={1122} height={871} priority className="h-9 w-auto md:h-11" />
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-10 text-sm md:flex">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-mute transition-opacity hover:opacity-60 hover:text-fg">{n.label}</a>)}
          <a href={contactLink.href} {...linkProps(contactLink)} className="rounded-full border border-line px-4 py-2 transition-colors hover:border-fg/50">Contato</a>
        </nav>
        <button ref={toggle} onClick={() => setOpen(true)} aria-label="Abrir menu" aria-expanded={open} className="-mr-2 p-2 md:hidden"><Menu size={22} /></button>
      </div>
      {open && (
        <div ref={menu} role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col bg-ink">
          <div className="wrap flex h-16 items-center justify-end">
            <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="-mr-2 p-2"><X size={22} /></button>
          </div>
          <nav aria-label="Menu móvel" className="wrap flex flex-1 flex-col justify-center gap-6 pb-24 text-4xl font-medium tracking-tight">
            {[...nav, { href: contactLink.href, label: "Contato" }].map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} {...(n.label === "Contato" ? linkProps(contactLink) : {})} className="py-2">{n.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
