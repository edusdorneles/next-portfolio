import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components";

const Home: NextPage = () => {
    return (
        <main>
            <Head>
                <title>Eduardo Dorneles - Portfólio</title>
                <meta
                    name="description"
                    content="Meu portófilio, para demonstrar os meus projetos pessoais e profissionais. Atualmente, estou focado em desenvolvimento utilizando JavaScript, TypeScript, ReactJS, Styled-Components, dentre outras tecnologias que utilizo para criar aplicações web!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <p>Home!</p>
        </main>
    );
};

export default Home;
