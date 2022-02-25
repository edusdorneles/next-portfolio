import { useState } from "react";
import Modal from "components/Modal/Modal";
import { useProjectsContext } from "providers/ProjectsContext";

// Styles
import { ProjectCardStyle } from "./styles";

// Icons
import { FaGithub } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

const ProjectCard: React.FC<Project> = (props: Project) => {
  const [activeDeleteModal, setActiveDeleteModal] = useState(false);
  const { deleteProject } = useProjectsContext();

  return (
    <ProjectCardStyle>
      <div className="project-card__text">
        <h2 className="project-card__text__title">{props.title}</h2>
        <p className="project-card__text__initial-data">{props.initialDate}</p>
      </div>

      <div className="project-card__image">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="project-card__text">
        <p className="project-card__text__desc">{props.description}</p>
        <p className="project-card__text__differential">{props.techs}</p>
      </div>

      <div className="project-card__link-buttons">
        <div className="link-buttons__preview">
          <div className="link-buttons__preview__link">
            <a
              href={props.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          <div className="link-buttons__preview__link">
            <a
              href={props.preview}
              aria-label="Site"
              target="_blank"
              rel="noreferrer"
            >
              <VscGlobe />
            </a>
          </div>
        </div>

        {props.editable && (
          <div className="link-buttons__preview__edit">
            <button
              onClick={() => {
                setActiveDeleteModal(true);
              }}
            >
              <IoClose />
            </button>
          </div>
        )}
      </div>

      <Modal
        title="Deletar projeto"
        modalActive={activeDeleteModal}
        setModalActive={setActiveDeleteModal}
      >
        <p>Você tem certeza q deseja deletar este projeto?</p>

        <button
          onClick={() => {
            deleteProject(props.id);
          }}
        >
          Deletar
        </button>
      </Modal>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
