import Head from "next/head";
import { Projects as ProjectsTemplate } from "components/templates";

const Projetos = () => {
    return (
        <>
            <Head>
                <title>Eduardo Dorneles - Projetos</title>
                <meta
                    name="description"
                    content="Meu portófilio, para demonstrar os meus projetos pessoais e profissionais. Atualmente, estou trabalhando com foco em desenvolvimento utilizando JavaScript, TypeScript, ReactJS, Styled-Components, dentre outras tecnologias que utilizo para criar aplicações web!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ProjectsTemplate />
        </>
    );
};

export default Projetos;
