import Link from "next/link";
import VideoSection from "./components/video-section";

const MatematicaRoute = () => {
  return (
    <main className="flex-1">
      <VideoSection
        title="Aula de Logaritmos e PA"
        videoUrl="https://www.youtube.com/embed/_PfXFeuqN2o?si=ZLBefi21T91RVLnC"
        description="Desvende os mistérios dos logaritmos e progressões aritméticas (PA) nesta aula ministrada pelo professor Paulo Ricardo, especialista em Matemática da EEEP de Baturité. Com uma didática única, o professor explora conceitos desafiadores de forma clara e envolvente, preparando os alunos para os desafios de vestibulares e do ENEM. Não perca a oportunidade de fortalecer sua compreensão nesses temas cruciais!"
        slidesLink="https://drive.google.com/drive/folders/18X5nly-8Qd2-OWcYppLK4u07-GYcnQMa?usp=sharing"
      />

      <VideoSection
        title="Aula de Poliedros e Relação de Euler"
        videoUrl="https://www.youtube.com/embed/_PfXFeuqN2o?si=ZLBefi21T91RVLnC"
        description="Explore os fundamentos dos poliedros e a fascinante Relação de Euler
          nesta aula conduzida pelo professor Paulo Ricardo, especialista em
          Matemática da EEEP de Baturité. Com abordagem cativante, o professor
          desmistifica conceitos complexos, preparando os alunos para desafios
          acadêmicos. Aproveite a chance de aprimorar sua compreensão desses
          temas essenciais!"
      />

      <VideoSection
        title="Aula de Combinatória, Probabilidade e Área de figuras planas"
        videoUrl="https://www.youtube.com/embed/MS_8HNEyyHs?si=J2MKkrODfHrqRCB6"
        description="Desvende os mistérios da Combinatória, Probabilidade e Área de figuras
          planas nesta aula envolvente com o professor Paulo Ricardo, renomado
          especialista em Matemática da EEEP de Baturité. Sua didática única
          torna esses tópicos desafiadores mais acessíveis, proporcionando uma
          valiosa oportunidade de aprimorar seus conhecimentos. Não perca essa
          chance de elevar sua compreensão nesses temas cruciais"
        slidesLink="https://drive.google.com/drive/folders/18X5nly-8Qd2-OWcYppLK4u07-GYcnQMa?usp=sharing"
      />

      <section className="max-w-96 m-auto flex w-full flex-col gap-4 p-5 md:w-[60%] md:max-w-[1200px]">
        <h2
          className="mb-4 text-justify text-2xl font-bold"
          id="materiais_extras"
        >
          Materiais Extras
        </h2>

        <p className="text-sm">
          Materiais de matemática de temas chaves para Enem, Spaece, Saeb e
          UECE:{" "}
          <Link
            className="text-xs text-primary underline"
            href="https://drive.google.com/drive/folders/1wfHaCiY74waV-dNqr7z5R248-pShpBt4?usp=sharing"
            target="_blank"
          >
            Clique aqui para acessar
          </Link>
        </p>
      </section>
    </main>
  );
};

export default MatematicaRoute;
