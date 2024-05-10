import Image from "next/image";
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import { projects } from "./utils";

export default function Home() {
  return (
    <main className="py-6 bg-white dark:bg-black min-h-screen w-full flex justify-center">
      <div className="flex flex-col items-center gap-4 w-full">
        <Image
          width={140}
          height={140}
          alt="Foto de perfil"
          className="rounded-full"
          src="/images/profile.jpg"
        />

        <section className="grid justify-items-center grid-cols-3 gap-4">
          <a
            target="_blank"
            href="https://linkedin.com/in/edusdorneles"
            aria-label="Link que redireciona para o LinkedIn"
            className="bg-slate-300 transition-all dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer w-full p-3 rounded-lg flex flex-row items-center justify-between"
          >
            <FaLinkedin className="text-zinc-800 dark:text-white text-3xl" />
          </a>

          <a
            target="_blank"
            href="https://github.com/edusdorneles"
            aria-label="Link que redireciona para o GitHub"
            className="bg-slate-300 transition-all dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer w-full p-3 rounded-lg flex flex-row items-center justify-between"
          >
            <FaGithub className="text-zinc-800 dark:text-white text-3xl" />
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/edusdorneles/"
            aria-label="Link que redireciona para o Instagram"
            className="bg-slate-300 transition-all dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer w-full p-3 rounded-lg flex flex-row items-center justify-between"
          >
            <FaInstagram className="text-zinc-800 dark:text-white text-3xl" />
          </a>
        </section>

        <section className="max-w-96 px-4 md:px-0 flex flex-col items-center justify-center gap-2">
          <h1 className="text-zinc-800 dark:text-white text-xl text-medium">Eduardo Dorneles</h1>

          <p className="text-zinc-500 dark:text-slate-400 text-sm">Tech Lead</p>

          <p className="text-justify text-zinc-800 dark:text-white">
            Na área há mais de 5 anos, trabalhei em projetos nos quais impactam mais de 2 milhões de
            clientes.
          </p>
        </section>

        <section className="max-w-[560px] px-4 md:px-0 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-300 transition-all rounded-lg dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 w-full h-full flex flex-col gap-2 p-2"
            >
              <Image
                width={300}
                height={158}
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="rounded-lg h-full w-full object-fill"
              />

              <p className="font-medium text-zinc-800 dark:text-white">{project.title}</p>

              <p className="md:min-h-10 text-zinc-800 text-sm dark:text-white text-justify">
                Stack: {project.stack}
              </p>

              <div className="flex gap-2 items-center">
                {project.site ? (
                  <a
                    target="_blank"
                    href={project.site}
                    aria-label={`Link para o site - ${project.site}`}
                  >
                    <FaGlobe className=" cursor-pointer text-2xl transition-all hover:bg-slate-100 dark:hover:bg-zinc-700 p-1 rounded-full text-zinc-800 dark:text-slate-300" />
                  </a>
                ) : null}

                {project.github ? (
                  <a
                    target="_blank"
                    href={project.github}
                    aria-label={`Link para o GitHub - ${project.title}`}
                  >
                    <FaGithub className=" cursor-pointer text-2xl transition-all hover:bg-slate-100 dark:hover:bg-zinc-700 p-1 rounded-full text-zinc-800 dark:text-slate-300" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
