import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 px-6 py-4 md:w-[600px] mx-auto ">
      <h1 className="text-2xl text-zinc-50 font-bold">
        Desenvolvendo ideias, devaneios e experiências
      </h1>
      <p>
        Eai! Me chamo Anderson Vieira. Sou Desenvolvedor Front-end e acredito na
        web como um lugar para conhecer pessoas e compartilhar pensamentos.
      </p>
      <div className="flex gap-2 py-6">
        <IoLogoGithub className="text-3xl text-purple-700" />
        <IoLogoLinkedin className="text-3xl text-purple-700" />
      </div>
    </section>
  );
}
