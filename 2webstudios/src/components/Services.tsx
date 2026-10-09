import Reveal from "./Reveal";

const services = [
  { name: "Web Design", text: "Interfaces personalizadas, identidade visual digital e experiências intuitivas." },
  { name: "Desenvolvimento Web", text: "Sites responsivos, rápidos, acessíveis e desenvolvidos para funcionar bem em diferentes dispositivos." },
  { name: "Presença Digital", text: "Páginas institucionais, landing pages e experiências digitais para marcas e empresas." },
];

export default function Services() {
  return (
    <section id="servicos" className="wrap border-t border-line py-28 md:py-40">
      <Reveal>
        <h2 className="max-w-3xl text-[clamp(2.5rem,7vw,6rem)] font-medium leading-[1] tracking-[-0.04em]">Do conceito ao lançamento.</h2>
      </Reveal>
      <ul className="mt-20 border-t border-line">
        {services.map((s) => (
          <li key={s.name} className="border-b border-line">
            <Reveal className="grid gap-4 py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <h3 className="text-2xl font-medium tracking-tight md:col-span-6 md:text-4xl">{s.name}</h3>
              <p className="max-w-md text-mute md:col-span-5 md:col-start-8 md:text-lg">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
