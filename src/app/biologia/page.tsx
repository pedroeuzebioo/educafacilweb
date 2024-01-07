import Link from "next/link";

const BiologiaRoute = () => {
  return (
    <main className="flex-1">
      <section className="max-w-96 m-auto flex w-full flex-col gap-4 p-5 md:w-[60%] md:max-w-[1200px]">
        <h2 className="mb-4 text-justify text-2xl font-bold">
          Aula de Biologia: Compreendendo os Vírus com o Professor Wagner
          Germano
        </h2>

        <div className="max-w-96">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rDr1uqxgLH0?si=Ncbi881T0p8zyufB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>

        <p className="text-justify text-base text-muted-foreground">
          Explore o fascinante mundo dos vírus nesta aula de Biologia conduzida
          pelo Professor Wagner Germano, renomado educador e diretor da EEEP
          Clemente Olintho Távora Arruda. A aula proporciona uma visão detalhada
          sobre a estrutura, características e importância dos vírus.
          <br />
          Durante a exploração do tema, o Professor Wagner aborda aspectos
          fundamentais, como a interação dos vírus com as células hospedeiras,
          os diferentes tipos de vírus e seu impacto em diversos contextos,
          incluindo a saúde humana e ambiental.
          <br />
          Não perca a oportunidade de aprimorar seus conhecimentos em Biologia e
          compreender melhor a relevância dos vírus no contexto científico
          atual. Esta aula oferece insights valiosos para estudantes e
          entusiastas da biologia interessados em desvendar os mistérios desse
          micromundo fascinante.
        </p>
      </section>

      <section className="max-w-96 m-auto flex w-full flex-col gap-4 p-5 md:w-[60%] md:max-w-[1200px]">
        <h2
          className="mb-4 text-justify text-2xl font-bold"
          id="materiais_extras"
        >
          Material Extra
        </h2>

        <p className="text-sm">
          Material de biologia sobre genética para estudar sistema AOB:{" "}
          <Link
            className="text-xs text-primary underline"
            href="https://drive.google.com/drive/folders/1f-jUTk0piXp1cFac22tfJuCpog766jzF?usp=sharing"
            target="_blank"
          >
            Clique aqui para acessar
          </Link>
        </p>
      </section>
    </main>
  );
};

export default BiologiaRoute;
