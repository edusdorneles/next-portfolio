import Head from "next/head";
import { Inter } from "@next/font/google";
import { HomeText, TitleCard, ProjectCard, TechCard, ContactButtons } from "components";
import { projects, techs } from "services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Eduardo Dorneles - Desenvolvedor Front-End</title>
                <link rel="icon" href="/favicon.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content="Veja meu trabalho! Sou um desenvolvedor front-end e aqui você encontra meus projetos online. Desfrute de designs modernos e sites interativos!"
                />
            </Head>

            <main className={`container mx-auto max-w-2xl px-6 lg:px-0 ${inter.className}`}>
                <HomeText />

                <TitleCard title="Projetos" />
                <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {projects.map((project: Project, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </section>

                <TitleCard title="Techs" />
                <section className="mb-10 grid grid-cols-3 gap-5 md:grid-cols-6">
                    {techs.map((tech: Tech, index: number) => (
                        <TechCard key={index} tech={tech} />
                    ))}
                </section>

                <TitleCard title="Contato" />
                <section className="mb-10">
                    <ContactButtons />
                </section>
            </main>
        </>
    );
}
