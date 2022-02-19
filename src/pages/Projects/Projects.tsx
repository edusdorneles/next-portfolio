import TitleDesc from "components/TitleDesc/TitleDesc";
import ProjectCard from "components/ProjectCard/ProjectCard";
import projects from "services/projects.json";

// Styles
import { ProjectsStyle } from "./styles";
import { Container } from "styles/Global";

const Projects: React.FC = () => {
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
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              initialDate={project.initialDate}
              image={project.image}
              desc={project.desc}
              differential={project.differential}
              linkGithub={project.linkGithub}
              linkPreview={project.linkPreview}
              editable={false}
            />
          ))}
        </div>
      </Container>
    </ProjectsStyle>
  );
};

export default Projects;
