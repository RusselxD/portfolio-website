import { Icon } from "@iconify/react";
import type { Project } from "../../../data/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

interface ProjectRowProps {
    project: Project;
    reverse?: boolean;
}

export default function ProjectRow({
    project,
    reverse = false,
}: ProjectRowProps) {
    const [openModal, setOpenModal] = useState(false);

    const imageBlock = (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-6 group overflow-hidden rounded-[1rem] luminous-shadow"
        >
            <img
                src={project.imgUrls[0]}
                alt={project.title}
                className="w-full h-52 md:h-60 lg:h-72 object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
        </motion.div>
    );

    const textBlock = (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-6 flex flex-col justify-center"
        >
            <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.slice(0, 4).map((tech) => (
                    <span
                        key={tech.name}
                        className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-xs font-medium"
                    >
                        {tech.name}
                    </span>
                ))}
            </div>

            <h2 className="text-xl lg:text-2xl font-bold text-on-surface tracking-tight mb-2">
                {project.title}
            </h2>

            <p className="text-on-surface-variant leading-relaxed text-sm mb-5 line-clamp-3">
                {project.desc}
            </p>

            <div className="flex items-center gap-6">
                <button
                    onClick={() => setOpenModal(true)}
                    className="flex items-center gap-2 text-primary font-bold group/btn text-sm"
                >
                    <span className="border-b-2 border-primary pb-0.5 group-hover/btn:pr-2 transition-all duration-300">
                        View Details
                    </span>
                    <Icon
                        icon="line-md:chevron-right"
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        width={16}
                        height={16}
                    />
                </button>

                <button
                    onClick={() => window.open(project.gitHubUrl, "_blank")}
                    className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface font-medium transition-colors text-sm"
                >
                    <Icon icon="akar-icons:github-fill" width={16} height={16} />
                    <span>Source</span>
                </button>
            </div>
        </motion.div>
    );

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {reverse ? (
                    <>
                        <div className="md:col-span-6 order-2 md:order-1">{textBlock}</div>
                        <div className="md:col-span-6 order-1 md:order-2">{imageBlock}</div>
                    </>
                ) : (
                    <>
                        {imageBlock}
                        {textBlock}
                    </>
                )}
            </div>

            {openModal && (
                <ProjectModal projectIdx={project.id} setOpenModal={setOpenModal} />
            )}
        </>
    );
}
