import { ProjectCard } from "components/molecules";
import { projects } from "services";

export const ProjectsContainer = () => {
    return (
        <div className="my-3 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: Project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};
