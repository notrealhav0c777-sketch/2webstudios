import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const title = "2WEBSTUDIOS — Websites autorais";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  openGraph: { title, description: site.description, type: "website", locale: "pt_BR", siteName: site.name, images: ["/images/logo.png"] },
  twitter: { card: "summary", title, description: site.description },
};
export const viewport: Viewport = { themeColor: "#050505" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
