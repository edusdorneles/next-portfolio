import { PageTitle, Text } from "components/atoms";
import { ProjectsContainer } from "components/organisms";

export const Projects = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <PageTitle className="mb-3" title="projetos" />

            <div className="container">
                <Text>Ficou interessado e quer entrar em contato?</Text>
                <Text>Preencha o formulário abaixo, te responderei o mais rápido possível!</Text>
                <ProjectsContainer />
            </div>
        </div>
    );
};
