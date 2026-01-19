import { Icon } from "@iconify/react";
import type { Project } from "../../../data/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }: { project: Project }) {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenLink = (url: string) => {
        window.open(url, "_blank");
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <div className="rounded-xl w-full overflow-hidden custom-container">
            <img
                src={project.imgUrls[0]}
                alt={project.title}
                className="object-cover w-full"
            />
            <div className="p-5 flex flex-col gap-2">
                <h3 className="font-bold md:text-lg">{project.title}</h3>
                <p className="text-[0.800rem] md:text-sm sec-text !leading-7">
                    {project.desc}
                </p>
                <div className="flex items-center gap-2">
                    {project.techStack.map((tech) => {
                        return (
                            <div
                                key={tech.name}
                                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full"
                            >
                                <Icon
                                    icon={tech.icon}
                                    key={tech.name}
                                    width={18}
                                    height={18}
                                    style={{ color: tech.color }}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4 text-sm mt-2">
                    <button
                        className="github-btn"
                        onClick={() => handleOpenLink(project.gitHubUrl)}
                    >
                        <Icon
                            icon="akar-icons:github-fill"
                            width={18}
                            height={18}
                        />
                        <span>Github</span>
                    </button>
                    <button
                        className="view-details-btn group"
                        onClick={() => handleOpenModal()}
                    >
                        <span>View Details</span>
                        <Icon
                            icon="line-md:chevron-right"
                            width={18}
                            height={18}
                            className="group-active:translate-x-1 lg:group-hover:translate-x-1 transition-transform duration-200"
                        />
                    </button>
                </div>
            </div>

            {openModal && (
                <ProjectModal
                    projectIdx={project.id}
                    setOpenModal={setOpenModal}
                />
            )}
        </div>
    );
}
