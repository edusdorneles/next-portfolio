import TitleDesc from "components/TitleDesc/TitleDesc";
import ProjetoCard from "components/ProjetoCard/ProjetoCard";

// Styles
import { ProjetosStyle } from "./styles";
import { Container } from "styles/Global";

// Intercaces
interface Projeto {
  id: number;
  title: string;
  dataInicio: string;
  image: string;
  desc: string;
  differential: string;
  linkGithub: string;
  linkPreview: string;
}

const Projetos: React.FC = () => {
  const projetos = require("services/projetos.json");

  return (
    <ProjetosStyle>
      <Container className="projetos__container">
        <TitleDesc
          title="projetos"
          firstDesc="Aqui estão os meus projetos pessoais e profissionais"
          secondDesc="Disponibilizo tanto o live preview do site, quanto o código, hospedado no GitHub"
        />

        <div className="projetos-card__container">
          {projetos.map((projeto: Projeto) => (
            <ProjetoCard
              key={projeto.id}
              id={projeto.id}
              title={projeto.title}
              dataInicio={projeto.dataInicio}
              image={projeto.image}
              desc={projeto.desc}
              differential={projeto.differential}
              linkGithub={projeto.linkGithub}
              linkPreview={projeto.linkPreview}
            />
          ))}
        </div>
      </Container>
    </ProjetosStyle>
  );
};

export default Projetos;
