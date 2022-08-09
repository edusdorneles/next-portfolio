import Head from "next/head";
import { Contact as ContactTemplate } from "components/templates/Contact";

const Contato = () => {
    return (
        <main>
            <Head>
                <title>Eduardo Dorneles - Contato</title>
                <meta
                    name="description"
                    content="Meu portófilio, para demonstrar os meus projetos pessoais e profissionais. Atualmente, estou focado em desenvolvimento utilizando JavaScript, TypeScript, ReactJS, Styled-Components, dentre outras tecnologias que utilizo para criar aplicações web!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContactTemplate />
        </main>
    );
};

export default Contato;
