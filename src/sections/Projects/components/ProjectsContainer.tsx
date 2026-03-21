import { projectsData, type Project } from "../../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer() {
    const projects: Project[] = projectsData;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
            {projects.map((proj) => (
                <ProjectCard project={proj} key={proj.id} />
            ))}
        </div>
    );
}
