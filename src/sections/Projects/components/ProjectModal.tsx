import { useEffect } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";
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
            <h2 className="font-semibold text-on-surface text-sm md:text-base">
                {title}
            </h2>
            {children}
        </>
    );
};

const KeyFeaturesContainer = ({ project }: { project: Project }) => {
    return (
        <Container title="Key Features">
            <div className="text-on-surface-variant columns-2 gap-2 space-y-2 text-xs md:text-sm">
                {project.keyFeatures.map((feat, i) => (
                    <div className="flex items-center gap-2" key={i}>
                        <Icon
                            icon="iconamoon:check-bold"
                            className="text-emerald-500"
                        />
                        <span>{feat}</span>
                    </div>
                ))}
            </div>
        </Container>
    );
};

const TechStackContainer = ({ project }: { project: Project }) => {
    return (
        <Container title="Tech Stack">
            <div className="flex items-center gap-2 text-xs md:text-sm flex-wrap">
                {project.techStack.map((tech, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-1 rounded-full px-3 py-2 bg-surface-container-low"
                    >
                        <Icon icon={tech.icon} className="w-4 h-4" />
                        <span className="text-on-surface-variant">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default function ProjectModal({
    projectIdx,
    setOpenModal,
}: ProjectModalProps) {
    const project: Project = getProjectById(projectIdx);
    const primaryImage = project.imgUrls[0];

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setOpenModal(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-2"
        >
            <div
                className="relative z-[10000] bg-white rounded-md shadow-[0_24px_48px_-12px_rgba(74,64,224,0.15)] md:w-4/5 lg:w-4/5 xl:w-3/5 overflow-auto max-h-[70dvh] lg:max-h-[85dvh] hide-scrollbar"
                onClick={(e) => e.stopPropagation()}
            >
                {primaryImage ? (
                    <img
                        src={primaryImage}
                        alt={project.title}
                        className="w-full object-cover md:h-80"
                    />
                ) : (
                    <div className="w-full h-56 md:h-80 bg-surface-container-low flex items-center justify-center">
                        <Icon
                            icon="solar:gallery-minimalistic-bold"
                            className="text-primary/50"
                            width={48}
                            height={48}
                        />
                    </div>
                )}
                <div className="p-5 md:p-6 flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-bold text-on-surface md:text-lg">
                            {project.title}
                        </h2>
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
                    <p className="text-on-surface-variant text-xs md:text-sm !leading-7">
                        {project.overview}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        {project.liveUrl && (
                            <button
                                onClick={() => window.open(project.liveUrl, "_blank")}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary text-xs md:text-sm font-bold transition-opacity hover:opacity-90"
                            >
                                <Icon icon="solar:global-bold" width={16} height={16} />
                                <span>Live Site</span>
                            </button>
                        )}
                        {project.gitHubUrl && (
                            <button
                                onClick={() => window.open(project.gitHubUrl, "_blank")}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface text-xs md:text-sm font-bold transition-colors"
                            >
                                <Icon icon="akar-icons:github-fill" width={16} height={16} />
                                <span>Source</span>
                            </button>
                        )}
                    </div>

                    <KeyFeaturesContainer project={project} />
                    <TechStackContainer project={project} />
                    {project.imgUrls.length > 0 && (
                        <GalleryCarousel project={project} />
                    )}
                </div>
            </div>
        </motion.div>,
        document.body,
    );
}
