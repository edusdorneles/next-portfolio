import Head from "next/head";
import { Inter } from "@next/font/google";
import { HomeText, TitleCard, ProjectCard, TechCard, ContactButtons } from "components";
import { projects, techs } from "services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Eduardo Dorneles - Portfólio</title>
                <link rel="icon" href="/favicon.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="description"
                    content="Meu portófilio, para demonstrar os meus projetos pessoais e profissionais. Atualmente, estou focado em desenvolvimento utilizando JavaScript, TypeScript, ReactJS, Styled-Components, dentre outras tecnologias que utilizo para criar aplicações web!"
                />
            </Head>

            <main className={`container mx-auto max-w-2xl px-6 lg:px-0 ${inter.className}`}>
                <HomeText />

                <TitleCard title="Projetos" />
                <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
                    {projects.map((project: Project, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </section>

                <TitleCard title="Techs" />
                <section className="grid grid-cols-3 md:grid-cols-6 gap-5 mb-10">
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
