import Image from "next/image";
import { Text, ProjectIcon } from "components/atoms";
import { formatTechs } from "helpers";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

type Props = {
    project: Project;
};

export const ProjectCard = ({ project }: Props) => {
    return (
        <div className="rounded-lg bg-primary border-2 border-gray h-full">
            <Text className="text-start pt-2 pl-3">{project.title}</Text>
            <Text className="text-start pl-3 pb-1 text-sm">{project.createdAt}</Text>
            <Image src={project.image} alt={project.title} width={300} height={175} layout="responsive" />
            <Text className="text-justify text-sm px-3 py-2">{project.description}</Text>
            <Text className="text-start text-sm px-3 pb-2">{formatTechs(project.techs)}</Text>

            <div className="flex items-center p-3 pt-0">
                <ProjectIcon icon={<FaGithub fontSize={18} />} href={project.github} />
                {project.website && <ProjectIcon icon={<BsGlobe2 fontSize={18} />} href={project.website} />}
            </div>
        </div>
    );
};
