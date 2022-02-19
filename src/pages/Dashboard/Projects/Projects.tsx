import TitleDesc from "components/TitleDesc/TitleDesc";
import ProjectCard from "components/ProjectCard/ProjectCard";
import projects from "services/projects.json";

// Styles
import { ProjectsStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { HiPlus } from "react-icons/hi";

function Projects() {
  return (
    <ProjectsStyle>
      <Container className="projects__container">
        <TitleDesc
          title="projetos"
          firstDesc="Aqui você pode editar os projetos"
          secondDesc="que ficam na rota de projetos do portfólio"
        />

        <div className="projects__project-card">
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
              editable={true}
            />
          ))}

          <div className="projects_projects-card--new">
            <HiPlus />
          </div>
        </div>
      </Container>
    </ProjectsStyle>
  );
}

export default Projects;
