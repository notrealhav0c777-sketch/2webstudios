# 2WEBSTUDIOS

Next.js (App Router) + TypeScript + Tailwind CSS 3.

## Rodar localmente
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Dados reais
Edite apenas `src/config/site.ts`: Instagram (URL completa), WhatsApp (DDI+DDD+número, só dígitos, ex. `5547999999999`), e-mail e projetos.
Imagens de projetos: coloque em `public/images/projects/` e use `image: "/images/projects/arquivo.png"`.
Campos vazios aparecem como "indisponível" e não geram links.

## Publicar na Vercel
1. Suba a pasta para um repositório no GitHub.
2. Em vercel.com → **Add New → Project** → importe o repositório (framework Next.js é detectado sozinho).
3. Opcional: em *Settings → Environment Variables*, defina `NEXT_PUBLIC_SITE_URL` com o domínio final (usado nos metadados Open Graph).
4. **Deploy**.
