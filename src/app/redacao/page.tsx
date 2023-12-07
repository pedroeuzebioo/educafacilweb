import Link from "next/link";

const RedacaoRoute = () => {
  return (
    <main className="flex-1">
      <section className="max-w-96 m-auto flex w-full flex-col gap-4 p-5 md:w-[60%] md:max-w-[1200px]">
        <h2 className="mb-4 text-justify text-2xl font-bold">
          Aula de redação sobre as cinco competências e o uso do repertório
          sociocultural
        </h2>

        <div className="max-w-96">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SdiU3XgnPZM?si=Q23HidKBj6UEEjMb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>

        <p className="text-justify text-base text-muted-foreground">
          Aprofunde seus conhecimentos em redação para o ENEM nesta aula
          especial ministrada pelo professor Erivaldo Sales, coordenador
          pedagógico da EEEP Clemente Olintho Távora Arruda. O vídeo aborda de
          maneira detalhada as cinco competências exigidas na prova de redação
          do ENEM, oferecendo insights valiosos para aprimorar suas habilidades
          de escrita.
          <br />
          Além disso, o professor destaca a importância do repertório
          sociocultural na construção de argumentos sólidos e na elaboração de
          uma redação que atenda aos critérios de avaliação do exame. Não perca
          essa oportunidade de aprimorar suas técnicas de redação e se destacar
          na prova!
        </p>

        <h3 className="mt-4 text-justify text-xl font-bold">
          Material de apoio
        </h3>

        <p className="text-sm">
          Slides sobre o tema da aula:{" "}
          <Link
            className="text-xs text-primary underline"
            href="https://drive.google.com/drive/folders/18X5nly-8Qd2-OWcYppLK4u07-GYcnQMa?usp=sharing"
            target="_blank"
          >
            Clique aqui para acessar
          </Link>
        </p>
      </section>
    </main>
  );
};

export default RedacaoRoute;
