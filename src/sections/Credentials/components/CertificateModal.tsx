import type { Dispatch, SetStateAction } from "react";
import type { Certification } from "../../../data/credentials";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

interface CertificateModalProps {
    setShowCertificate: Dispatch<SetStateAction<boolean>>;
    certificate: Certification;
}

export default function CertificateModal({
    setShowCertificate,
    certificate,
}: CertificateModalProps) {
    return (
        <>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={() => setShowCertificate(false)}
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            >
                <div
                    className="relative overflow-hidden bg-white dark:bg-gray-900 rounded-md shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={() => setShowCertificate(false)}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors z-10"
                    >
                        <Icon icon="iconamoon:close-bold" className="w-5 h-5" />
                    </button>

                    <img
                        src={certificate.img_path}
                        alt={certificate.title}
                        className="max-h-[70vh] w-auto object-cover"
                    />
                </div>
            </motion.div>
        </>
    );
}
