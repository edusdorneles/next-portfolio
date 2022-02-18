// Styles
import { ProjectCardStyle } from "./styles";

// Icons
import { FaGithub } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

const ProjectCard: React.FC<Project> = (props) => {
  return (
    <ProjectCardStyle>
      <div className="project-card__text">
        <h2 className="project-card__text__title">{props.title}</h2>
        <p className="project-card__text__data-inicio">{props.initialDate}</p>
      </div>

      <div className="project-card__image">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="project-card__text">
        <p className="project-card__text__desc">{props.desc}</p>
        <p className="project-card__text__differential">{props.differential}</p>
      </div>

      <div className="project-card__link-buttons">
        <div className="link-buttons__link">
          <a
            href={props.linkGithub}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <div className="link-buttons__link">
          <a
            href={props.linkPreview}
            aria-label="Site"
            target="_blank"
            rel="noreferrer"
          >
            <VscGlobe />
          </a>
        </div>
      </div>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
