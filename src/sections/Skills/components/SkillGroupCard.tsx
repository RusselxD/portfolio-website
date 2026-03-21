import type { SkillGroup, TechStack } from "../../../data/techStackData";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const groupMeta: Record<string, { icon: string; color: string; bg: string; subtitle: string }> = {
    Languages: {
        icon: "mingcute:code-line",
        color: "#4a40e0",
        bg: "bg-primary/10",
        subtitle: "Core Logic & Scripting",
    },
    Databases: {
        icon: "mdi:database",
        color: "#6a37d4",
        bg: "bg-secondary/10",
        subtitle: "Storage & Retrieval",
    },
    "Cloud & DevOps": {
        icon: "mdi:cloud-outline",
        color: "#815100",
        bg: "bg-[#f8a010]/15",
        subtitle: "Deployment & Infrastructure",
    },
    "Frameworks & Libraries": {
        icon: "mdi:layers-outline",
        color: "#6a37d4",
        bg: "bg-secondary/10",
        subtitle: "Modern Application Stacks",
    },
    "Tools & Platforms": {
        icon: "mdi:wrench-outline",
        color: "#595c5e",
        bg: "bg-surface-container",
        subtitle: "Development Environment",
    },
    "AI & Machine Learning": {
        icon: "fluent:brain-32-regular",
        color: "#b41340",
        bg: "bg-error/10",
        subtitle: "Intelligent Solutions",
    },
};

const SkillCapsule = ({ tech }: { tech: TechStack }) => (
    <div className="flex items-center gap-2 rounded-full py-2 px-3 bg-surface-container-low hover:bg-surface-container transition-colors">
        <Icon icon={tech.icon} className="w-4 h-4" style={{ color: tech.color }} />
        <span className="text-[0.8rem] md:text-sm font-medium text-on-surface">{tech.name}</span>
    </div>
);

export default function SkillGroupCard({
    group,
    index,
}: {
    group: SkillGroup;
    index: number;
}) {
    const meta = groupMeta[group.title] ?? {
        icon: "mdi:star-outline",
        color: "#4a40e0",
        bg: "bg-primary/10",
        subtitle: "",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
            className="glass-panel rounded-[0.6rem] p-4 h-full"
        >
            <div className="flex items-center gap-3 mb-5">
                <div
                    className={`w-10 h-10 rounded-[0.5rem] flex items-center justify-center ${meta.bg}`}
                >
                    <Icon icon={meta.icon} className="w-5 h-5" style={{ color: meta.color }} />
                </div>
                <div>
                    <h3 className="font-bold text-on-surface text-lg tracking-tight">
                        {group.title}
                    </h3>
                    {meta.subtitle && (
                        <p className="text-xs text-on-surface-variant">{meta.subtitle}</p>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                    <SkillCapsule tech={tech} key={tech.name} />
                ))}
            </div>
        </motion.div>
    );
}
