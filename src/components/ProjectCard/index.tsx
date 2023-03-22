import Image from "next/image";
import { FaGithub, FaGlobe } from "react-icons/fa";
import * as P from "./props";

export const ProjectCard = ({ project }: P.Props) => {
    return (
        <div className="flex flex-col shadow-sm bg-secondary rounded-md p-3">
            <div className="rounded-t-md">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-md mb-2"
                    width={500}
                    height={282}
                    loading="lazy"
                />

                <p className="font-semibold mb-2 text-cyan-100">{project.title}</p>
                <p className="text-sm mb-2">Techs: {project.techs}</p>

                <div className="flex items-center gap-1">
                    {project.site && (
                        <a
                            href={project.site}
                            target="_blank"
                            className="transition-all p-1 rounded-full hover:bg-secondaryHover"
                            title="Preview do projeto"
                        >
                            <FaGlobe size={16} />
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            className="transition-all p-1 rounded-full hover:bg-secondaryHover"
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
