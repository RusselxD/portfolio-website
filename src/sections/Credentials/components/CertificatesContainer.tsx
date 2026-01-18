import { type Certification, certificates } from "../../../data/credentials";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CertificateModal from "./CertificateModal";

const CertificateCard = ({ certificate }: { certificate: Certification }) => {
    const [showCertificate, setShowCertificate] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative rounded-lg custom-container w-full p-5 md:p-6"
        >
            {/* Main Content */}
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="lg:text-lg font-bold mb-2">
                        {certificate.title}
                    </h2>
                    <p className="sec-text text-sm mb-1">
                        {certificate.issuer}
                    </p>
                    <p className="sec-text text-xs mb-5">{certificate.date}</p>
                </div>

                {/* Badges */}
                {certificate.gold_medal && (
                    <span
                        className="cert-badge bg-gradient-to-r from-yellow-500 to-amber-600 
                                    rounded-full shadow-lg shadow-yellow-500/40"
                    >
                        <Icon icon="ri:medal-line" className="w-3 h-3" />
                        <span>Gold Medal</span>
                    </span>
                )}
                {certificate.bronze_medal && (
                    <span
                        className="cert-badge bg-gradient-to-r from-orange-600 to-orange-800 
                                    rounded-full shadow-lg shadow-orange-600/40"
                    >
                        <Icon icon="ri:medal-line" className="w-3 h-3" />
                        <span>Bronze Medal</span>
                    </span>
                )}
                {certificate.representative && (
                    <span
                        className="cert-badge bg-gradient-to-r from-purple-600 to-blue-600 
                                    rounded-full shadow-lg shadow-purple-500/30"
                    >
                        <Icon icon="dashicons:awards" width="20" height="20" />
                        <span>University Representative</span>
                    </span>
                )}
            </div>

            <button
                onClick={() => setShowCertificate(!showCertificate)}
                className="flex items-center gap-2 text-sm sec-text absolute bottom-5 right-5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
                <Icon icon="mdi:eye-outline" className="w-4 h-4" />
                <span>View</span>
            </button>

            {/* Medals */}
            {certificate.gold_medal && (
                <Icon
                    icon="noto:1st-place-medal"
                    className="cert-icon text-yellow-600 dark:text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                />
            )}
            {certificate.bronze_medal && (
                <Icon
                    icon="noto:3rd-place-medal"
                    className="cert-icon text-orange-600 drop-shadow-[0_0_20px_rgba(194,65,12,0.5)]"
                />
            )}
            {certificate.representative && (
                <Icon
                    icon="dashicons:awards"
                    className="cert-icon text-purple-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] "
                />
            )}

            {showCertificate && (
                <CertificateModal
                    setShowCertificate={setShowCertificate}
                    certificate={certificate}
                />
            )}
        </motion.div>
    );
};
export default function CertificatesContainer() {
    const certifications: Certification[] = certificates;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-3 xl:gap-7">
            {certifications.map((cert) => {
                return <CertificateCard certificate={cert} key={cert.title} />;
            })}
        </div>
    );
}
