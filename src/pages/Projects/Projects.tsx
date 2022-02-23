import { useState, useEffect } from "react";
import TitleDesc from "components/TitleDesc/TitleDesc";
import ProjectCard from "components/ProjectCard/ProjectCard";
import { useProjectsContext } from "providers/ProjectsContext";

// Styles
import { ProjectsStyle } from "./styles";
import { Container } from "styles/Global";

const Projects: React.FC = () => {
  const { projects, fetchProjects } = useProjectsContext();

  useEffect(() => fetchProjects(), [fetchProjects]);

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
              description={project.description}
              techs={project.techs}
              github={project.github}
              preview={project.preview}
            />
          ))}
        </div>
      </Container>
    </ProjectsStyle>
  );
};

export default Projects;
