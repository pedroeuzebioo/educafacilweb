import Link from "next/link";

const ExtrasRoute = () => {
  return (
    <main className="flex-1">
      <section className="max-w-96 m-auto flex w-full flex-col gap-4 p-5 md:w-[60%] md:max-w-[1200px]">
        <h2 className="mb-4 text-justify text-2xl font-bold">
          Recursos Extras para Estudos
        </h2>
        <p className="text-justify text-base text-muted-foreground">
          Nesta seção, você terá acesso a valiosos materiais de estudo
          oferecidos gratuitamente pelo Professor Pedro Bernardino, especialista
          em Filosofia e Sociologia.
          <br />
          Disponibilizamos cadernos de cursinho da Unesp, cronogramas de estudo
          personalizados e uma seleção de links úteis para preparação nos
          vestibulares da UECE e ENEM. O Professor Pedro Bernardino elaborou
          esses recursos com o intuito de auxiliar estudantes em sua jornada
          educacional, proporcionando materiais de qualidade para aprimorar o
          conhecimento em diversas disciplinas.
          <br />
          Aproveite essa oportunidade para potencializar seus estudos e se
          preparar de maneira eficaz para os desafios acadêmicos que estão por
          vir. O conhecimento está ao seu alcance, e estamos aqui para ajudá-lo
          a alcançar seus objetivos educacionais.
        </p>

        <p className="text-sm">
          Segue o recurso extra:{" "}
          <Link
            className="text-xs text-primary underline"
            href="https://drive.google.com/drive/folders/1OUPL701wTWSpWzo0XNsj7XyVnVPV2jjl?usp=sharing"
            target="_blank"
          >
            Clique aqui para acessar
          </Link>
        </p>
      </section>
    </main>
  );
};

export default ExtrasRoute;
