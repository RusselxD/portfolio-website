import { useEffect } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { getProjectById, type Project } from "../../../data/projects";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import GalleryCarousel from "./GalleryCarousel";

interface ProjectModalProps {
    projectIdx: number;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const Container = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => {
    return (
        <>
            <h2 className="font-semibold text-sm md:text-base">{title}</h2>
            {children}
        </>
    );
};

const KeyFeaturesContainer = ({ project }: { project: Project }) => {
    return (
        <Container title="Key Features">
            <div className="sec-text columns-2 gap-2 space-y-2 text-xs md:text-sm">
                {project.keyFeatures.map((feat, i) => {
                    return (
                        <div className="flex items-center gap-2" key={i}>
                            <Icon
                                icon="iconamoon:check-bold"
                                className="text-emerald-500"
                            />
                            <span>{feat}</span>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

const TechStackContainer = ({ project }: { project: Project }) => {
    return (
        <Container title="Tech Stack">
            <div className="flex items-center gap-2 text-xs md:text-sm flex-wrap">
                {project.techStack.map((tech, i) => {
                    return (
                        <div
                            key={i}
                            className="flex items-center gap-1 rounded-full px-3 py-2 bg-gray-200 dark:bg-gray-800"
                        >
                            <Icon icon={tech.icon} className="w-4 h-4" />
                            <span>{tech.name}</span>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default function ProjectModal({
    projectIdx,
    setOpenModal,
}: ProjectModalProps) {
    const project: Project = getProjectById(projectIdx);

    useEffect(() => {
        // Disable scroll on mount
        document.body.style.overflow = "hidden";

        // Re-enable scroll on unmount
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setOpenModal(false)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 "
        >
            <div
                className="relative bg-white dark:bg-gray-900 rounded-md shadow-2xl md:w-4/5 lg:w-4/5 xl:w-3/5 overflow-auto max-h-[70dvh] lg:max-h-[85dvh] hide-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={project.imgUrls[0]}
                    alt={project.title}
                    className="w-full object-cover md:h-80"
                />
                <div className="p-4 md:p-5 flex flex-col gap-3">
                    <h2 className="font-black md:text-lg">
                        {project.title}
                    </h2>
                    <p className="sec-text text-xs md:text-sm leading-7 md:leading-7">
                        {project.overview}
                    </p>

                    <KeyFeaturesContainer project={project} />
                    <TechStackContainer project={project} />
                    <GalleryCarousel project={project} />
                </div>
            </div>
        </motion.div>
    );
}
