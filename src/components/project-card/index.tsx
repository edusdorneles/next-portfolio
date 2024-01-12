import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import * as P from "./props";

export const ProjectCard = ({ project }: P.Props) => {
    return (
        <div className="flex flex-col rounded-md bg-secondary p-3 shadow-sm">
            <div className="rounded-t-md">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="mb-2 rounded-md"
                    width={500}
                    height={282}
                    loading="lazy"
                />

                <p className="mb-2 font-semibold text-cyan-100">{project.title}</p>
                <p className="mb-2 text-sm">Stack: {project.techs}</p>

                <div className="flex items-center gap-1">
                    {project.site && (
                        <a
                            href={project.site}
                            target="_blank"
                            className="rounded-full p-1 transition-all hover:bg-secondaryHover"
                            title="Preview do projeto"
                        >
                            <FaGlobe size={16} />
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            className="rounded-full p-1 transition-all hover:bg-secondaryHover"
                            title="Projeto no GitHub"
                        >
                            <FaGithub size={16} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
