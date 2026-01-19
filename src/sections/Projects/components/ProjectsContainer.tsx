import { projectsData, type Project } from "../../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer() {
    const projects: Project[] = projectsData;

    return (
        <div className="px-3 md:px-5 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-3 xl:gap-7">
            {projects.map((proj) => {
                return <ProjectCard project={proj} key={proj.id} />;
            })}
        </div>
    );
}
