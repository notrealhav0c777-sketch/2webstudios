import { site } from "@/config/site";

const digits = site.whatsapp.replace(/\D/g, "");
export const whatsappHref =
  digits.length >= 10 && digits.length <= 15
    ? `https://wa.me/${digits}?text=${encodeURIComponent(site.whatsappMessage)}`
    : null;

export const instagramHref = /^https:\/\/(www\.)?instagram\.com\/[\w.]+/.test(site.instagram) ? site.instagram : null;

const emailHref = /^\S+@\S+\.\S+$/.test(site.email) ? `mailto:${site.email}` : null;

/** Destino do CTA principal. Sem dados configurados, cai na seção de contato. */
export const contactLink = whatsappHref
  ? { href: whatsappHref, external: true, ready: true }
  : emailHref
    ? { href: emailHref, external: false, ready: true }
    : { href: "#contato", external: false, ready: false };

export const linkProps = (l: { external: boolean }) =>
  l.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
