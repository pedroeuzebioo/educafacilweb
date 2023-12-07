import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="max-w-96 flex w-full flex-col gap-4 p-10 md:flex-row">
        <div>
          <h2 className="mb-4 text-2xl font-bold">
            Bem-vindo ao EducaFacilWeb
          </h2>

          <p className="mb-6 text-justify text-lg text-muted-foreground">
            Explore uma experiência de aprendizado única com nossa aplicação
            web, o EducaFacilWeb. Oferecemos uma coleção abrangente de conteúdos
            em vídeo, focados principalmente em disciplinas-chave como Redação,
            Biologia e Matemática. Navegue por uma variedade de temas relevantes
            adaptados às suas necessidades acadêmicas e ao seu momento
            educacional.
          </p>

          <p className="mb-6 text-justify text-lg text-muted-foreground">
            Aprofunde seus conhecimentos com nossos materiais especialmente
            selecionados, preparados para estudantes que buscam aprimorar suas
            habilidades e se destacar em avaliações importantes, como o ENEM
            (Exame Nacional do Ensino Médio), vestibulares de instituições
            renomadas e concursos públicos. A Educação é a chave para
            oportunidades transformadoras, e estamos aqui para apoiar sua
            jornada.
          </p>

          <p className="text-justify text-lg text-muted-foreground">
            Junte-se a nós e embarque na jornada do conhecimento. EducaFacilWeb
            - Facilitando sua jornada acadêmica, inspirando o aprendizado
            contínuo.
          </p>
        </div>
        <Image
          src="/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-80 w-96"
        />
      </section>
    </main>
  );
}
