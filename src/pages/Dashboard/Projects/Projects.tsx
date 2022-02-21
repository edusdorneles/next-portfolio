import React, { useState, useEffect } from "react";
import TitleDesc from "components/TitleDesc/TitleDesc";
import ProjectCard from "components/ProjectCard/ProjectCard";
import Modal from "components/Modal/Modal";
import { useProjectsContext } from "providers/ProjectsContext";

// Styles
import { ProjectsStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { HiPlus } from "react-icons/hi";

// Firebase
import { db } from "Firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Projects: React.FC = () => {
  const { error, createProject } = useProjectsContext();
  const [modalActive, setModalActive] = useState(false);
  const [projects, setProjects] = useState<Project[] | any>([]);

  // Project states
  const [title, setTitle] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [techs, setTechs] = useState("");
  const [github, setGithub] = useState("");
  const [preview, setPreview] = useState("");

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
              description={project.description}
              techs={project.techs}
              github={project.github}
              preview={project.preview}
              editable={true}
            />
          ))}

          <div
            className="projects_projects-card--new"
            onClick={() => {
              setModalActive(true);
            }}
          >
            <HiPlus />
          </div>
        </div>
      </Container>

      <Modal
        title="Adicionar projeto"
        modalActive={modalActive}
        setModalActive={setModalActive}
      >
        <input
          type="text"
          placeholder="Título:"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Data de início:"
          value={initialDate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInitialDate(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Descrição:"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Tecnologias:"
          value={techs}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTechs(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Github:"
          value={github}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setGithub(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Preview:"
          value={preview}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPreview(e.target.value);
          }}
        />

        <label htmlFor="image">Clique aqui e selecione uma imagem:</label>

        <input
          id="image"
          type="file"
          placeholder="Imagem"
          value={image}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setImage(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={() => {
            createProject({
              title,
              initialDate,
              image,
              description,
              techs,
              github,
              preview,
            });
          }}
        >
          Criar
        </button>

        <div
          className={
            error ? "modal__error modal__error--active" : "modal_error"
          }
        >
          <p>{error}</p>
        </div>
      </Modal>
    </ProjectsStyle>
  );
};

export default Projects;
