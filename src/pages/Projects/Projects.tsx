import TitleDesc from "components/TitleDesc/TitleDesc";
import ProjetoCard from "components/ProjectCard/ProjectCard";

// Styles
import { ProjectsStyle } from "./styles";
import { Container } from "styles/Global";

// Intercaces
interface Project {
  id: number;
  title: string;
  dataInicio: string;
  image: string;
  desc: string;
  differential: string;
  linkGithub: string;
  linkPreview: string;
}

const Projects: React.FC = () => {
  const projects = require("services/projects.json");

  return (
    <ProjectsStyle>
      <Container className="projects__container">
        <TitleDesc
          title="projetos"
          firstDesc="Aqui estão os meus projetos pessoais e profissionais"
          secondDesc="Disponibilizo tanto o live preview do site, quanto o código, hospedado no GitHub"
        />

        <div className="projects-card__container">
          {projects.map((project: Project) => (
            <ProjetoCard
              key={project.id}
              id={project.id}
              title={project.title}
              dataInicio={project.dataInicio}
              image={project.image}
              desc={project.desc}
              differential={project.differential}
              linkGithub={project.linkGithub}
              linkPreview={project.linkPreview}
            />
          ))}
        </div>
      </Container>
    </ProjectsStyle>
  );
};

export default Projects;
