import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { instagramHref, whatsappHref } from "@/lib/links";

const items = [
  { label: "Instagram", Icon: SiInstagram, href: instagramHref, optional: false },
  { label: "WhatsApp", Icon: SiWhatsapp, href: whatsappHref, optional: true },
];

/** quiet: oculta itens opcionais (WhatsApp) enquanto não configurados. */
export default function SocialLinks({ quiet = false }: { quiet?: boolean }) {
  return (
    <ul className="flex items-center gap-6">
      {items.filter((i) => i.href || !(quiet && i.optional)).map(({ label, Icon, href }) => (
        <li key={label}>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-opacity hover:opacity-60">
              <Icon aria-hidden size={18} />{label}
            </a>
          ) : (
            <span aria-disabled="true" className="flex items-center gap-2 text-sm text-mute/60">
              <Icon aria-hidden size={18} />{label}<span className="sr-only"> (indisponível no momento)</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
