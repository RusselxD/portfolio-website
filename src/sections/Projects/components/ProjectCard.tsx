import { Icon } from "@iconify/react";
import type { Project } from "../../../data/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
    const [openModal, setOpenModal] = useState(false);
    const primaryImage = project.imgUrls[0];

    const handleOpenLink = (url: string) => {
        window.open(url, "_blank");
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-lg w-full overflow-hidden glass-panel glass-panel-hover"
        >
            {primaryImage ? (
                <img
                    src={primaryImage}
                    alt={project.title}
                    className="object-cover w-full"
                />
            ) : (
                <div className="w-full h-48 bg-surface-container-low flex items-center justify-center">
                    <Icon
                        icon="solar:gallery-minimalistic-bold"
                        className="text-primary/50"
                        width={40}
                        height={40}
                    />
                </div>
            )}
            <div className="p-5 md:p-6 flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-on-surface md:text-lg">
                        {project.title}
                    </h3>
                    {project.role && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                            <Icon
                                icon="solar:medal-ribbons-star-bold"
                                width={14}
                                height={14}
                            />
                            {project.role}
                        </span>
                    )}
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                    {project.desc}
                </p>
                <div className="flex items-center gap-2">
                    {project.techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="p-2 bg-surface-container-low rounded-full"
                        >
                            <Icon
                                icon={tech.icon}
                                width={18}
                                height={18}
                                style={{ color: tech.color }}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 mt-1">
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
        </motion.div>
    );
}
