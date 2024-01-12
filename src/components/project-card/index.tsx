import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import * as P from "./props";

export const ProjectCard = ({ project }: P.Props) => {
    return (
        <div className="flex flex-col rounded-md bg-secondary p-3 shadow-sm transition-all hover:bg-secondaryHover">
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
                            target="_blank"
                            href={project.site}
                            title="Preview do projeto"
                            className="rounded-full p-1 transition-all hover:bg-gray-700"
                        >
                            <FaGlobe size={16} />
                        </a>
                    )}

                    {project.github && (
                        <a
                            target="_blank"
                            href={project.github}
                            title="Projeto no GitHub"
                            className="rounded-full p-1 transition-all hover:bg-gray-700"
                        >
                            <FaGithub size={16} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
