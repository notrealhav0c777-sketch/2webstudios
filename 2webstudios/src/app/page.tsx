import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const revalidate = 86400; // mantém o ano do rodapé atualizado

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
