import type { Dispatch, SetStateAction } from "react";
import { getProjectById, type Project } from "../../../data/projects";
import { motion } from "framer-motion";

interface ProjectModalProps {
    projectIdx: number;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function ProjectModal({
    projectIdx,
    setOpenModal,
}: ProjectModalProps) {
    const project: Project = getProjectById(projectIdx);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setOpenModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
            <div
                className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-md shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                Wait Lang
                <p>{project.title}</p>
            </div>
        </motion.div>
    );
}
