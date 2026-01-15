import type { SkillGroup, Technology } from "../../../data/techStackData";
import { motion } from "framer-motion";

const SkillCapsule = ({ tech }: { tech: Technology }) => {
    return (
        <div className="flex items-center gap-2 rounded-full py-2 px-3 bg-slate-200 dark:bg-gray-800">
            <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
            <p className="text-sm font-medium">{tech.name}</p>
        </div>
    );
};

export default function SkillGroupContainer({
    skillGroup,
}: {
    skillGroup: SkillGroup;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-5 rounded-lg container"
        >
            <p className="text-lg font-semibold">{skillGroup.title}</p>

            <div className="flex flex-wrap gap-2 mt-3">
                {skillGroup.technologies.map((tech) => {
                    return <SkillCapsule tech={tech} key={tech.name} />;
                })}
            </div>
        </motion.div>
    );
}
