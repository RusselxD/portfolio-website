import { type Certification, certificates } from "../../../data/credentials";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CertificateModal from "./CertificateModal";

const getBadge = (cert: Certification) => {
    if (cert.gold_medal)
        return { label: "Gold Medal", color: "bg-amber-500", icon: "ri:medal-line" };
    if (cert.bronze_medal)
        return { label: "Bronze Medal", color: "bg-orange-600", icon: "ri:medal-line" };
    if (cert.representative)
        return { label: "Representative", color: "bg-primary", icon: "dashicons:awards" };
    return null;
};

const getMedalIcon = (cert: Certification) => {
    if (cert.gold_medal) return "noto:1st-place-medal";
    if (cert.bronze_medal) return "noto:3rd-place-medal";
    if (cert.representative) return "dashicons:awards";
    return null;
};

const CertificateCard = ({
    certificate,
    index,
}: {
    certificate: Certification;
    index: number;
}) => {
    const [showCertificate, setShowCertificate] = useState(false);
    const badge = getBadge(certificate);
    const medalIcon = getMedalIcon(certificate);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
            className="glass-panel rounded-[0.75rem] p-5 relative overflow-hidden group"
        >
            {/* Background icon */}
            {medalIcon && (
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon icon={medalIcon} className="w-14 h-14" />
                </div>
            )}

            <div className="relative z-10">
                {/* Medal icon */}
                {medalIcon && (
                    <div className="w-12 h-12 rounded-[0.5rem] bg-surface-container-low flex items-center justify-center mb-6">
                        <Icon icon={medalIcon} className="w-6 h-6" />
                    </div>
                )}

                <h3 className="text-xl font-bold text-on-surface tracking-tight mb-2">
                    {certificate.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-1">
                    {certificate.issuer}
                </p>
                <p className="text-on-surface-variant text-xs mb-6">
                    {certificate.date}
                </p>

                {/* Badge */}
                {badge && (
                    <div className="flex items-center gap-2 mb-6">
                        <span
                            className={`w-2 h-2 rounded-full ${badge.color}`}
                        ></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                            {badge.label}
                        </span>
                    </div>
                )}

                <button
                    onClick={() => setShowCertificate(true)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-3 transition-all"
                >
                    <span>View Certificate</span>
                    <Icon icon="line-md:chevron-right" className="w-4 h-4" />
                </button>
            </div>

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
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
            {certificates.map((cert, i) => (
                <CertificateCard certificate={cert} index={i} key={i} />
            ))}
        </div>
    );
}
