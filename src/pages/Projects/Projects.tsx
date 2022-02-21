import { useState, useEffect } from "react";
import TitleDesc from "components/TitleDesc/TitleDesc";
import ProjectCard from "components/ProjectCard/ProjectCard";

// Styles
import { ProjectsStyle } from "./styles";
import { Container } from "styles/Global";

import { db } from "Firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[] | any>([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "projects"), (document) => {
        setProjects(document.docs.map((doc) => doc.data()));
      }),
    []
  );

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
              editable={true}
            />
          ))}
        </div>
      </Container>
    </ProjectsStyle>
  );
};

export default Projects;
