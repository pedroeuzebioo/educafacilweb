import Link from "next/link";

interface VideoSectionProps {
  title: string;
  videoUrl: string;
  description: string;
  slidesLink?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  videoUrl,
  description,
  slidesLink,
}) => {
  return (
    <main>
      <section className="max-w-96 m-auto flex w-full flex-col gap-4 p-5 md:w-[60%] md:max-w-[1200px]">
        <h2 className="mb-4 text-justify text-2xl font-bold">{title}</h2>

        <div className="max-w-96">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>

        <p className="text-justify text-base text-muted-foreground">
          {description}
        </p>

        {slidesLink && (
          <>
            <h3 className="mt-4 text-justify text-xl font-bold">
              Material de apoio
            </h3>
            <p className="text-sm">
              Slides sobre o tema da aula:{" "}
              <Link
                className="text-xs text-primary underline"
                href={slidesLink}
                target="_blank"
              >
                Clique aqui para acessar
              </Link>
            </p>
          </>
        )}
      </section>
    </main>
  );
};

export default VideoSection;
