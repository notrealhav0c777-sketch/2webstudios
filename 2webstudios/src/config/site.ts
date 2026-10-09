// ============================================================
// ÚNICO ARQUIVO A EDITAR para dados reais da 2WEBSTUDIOS.
// Campos vazios ("") ficam em estado "indisponível" no site,
// sem gerar links quebrados.
// ============================================================
export type Project = {
  name: string;
  category: string;
  description: string;
  image?: string; // ex.: "/images/projects/meu-site.png" (arquivo em public/)
  url?: string; // ex.: "https://cliente.com.br"
  concept?: boolean; // true = estudo de conceito (sem cliente real)
};

export const site = {
  name: "2WEBSTUDIOS",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Estúdio independente de design e desenvolvimento de sites. Criamos sites autorais, rápidos e responsivos para marcas e empresas.",
  // Instagram: URL completa do perfil. Ex.: "https://www.instagram.com/seu_perfil"
  instagram: "",
  // WhatsApp: número comercial com DDI+DDD, só dígitos. Ex.: "5547999999999"
  whatsapp: "",
  whatsappMessage: "Olá! Vim pelo site da 2WEBSTUDIOS e gostaria de falar sobre um projeto.",
  // E-mail comercial (opcional). Usado como contato se não houver WhatsApp.
  email: "",
  // Substitua os estudos de conceito por projetos reais quando tiver.
  projects: [
    { name: "Site institucional", category: "Estudo de conceito", description: "Estrutura e direção visual para um negócio de serviços locais.", concept: true },
    { name: "Landing page", category: "Estudo de conceito", description: "Página única focada em uma ação, com hierarquia tipográfica forte.", concept: true },
    { name: "Portfólio pessoal", category: "Estudo de conceito", description: "Site editorial para profissional autônomo apresentar seu trabalho.", concept: true },
  ] satisfies Project[],
};
