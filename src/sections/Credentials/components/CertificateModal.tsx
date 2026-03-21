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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={() => setShowCertificate(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
            <div
                className="relative overflow-hidden bg-white rounded-[0.75rem] shadow-[0_24px_48px_-12px_rgba(74,64,224,0.15)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setShowCertificate(false)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-surface-container-low hover:bg-surface-container transition-colors z-10"
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
    );
}
