import { skillsData, type Skill } from "../../../data/skillsData";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            className="glass-panel glass-panel-hover p-5 md:p-5 rounded-[0.6rem]"
        >
            <div
                className="w-10 h-10 rounded-[0.75rem] flex items-center justify-center mb-3"
                style={{ backgroundColor: skill.bgColor }}
            >
                <Icon
                    icon={skill.icon}
                    className="w-5 h-5"
                    style={{ color: skill.color }}
                />
            </div>
            <h3 className="text-lg font-bold text-on-surface mb-1">
                {skill.title}
            </h3>
            <p className="text-on-surface-variant text-sm">
                {skill.subTitle}
            </p>
        </motion.div>
    );
};

export default function SkillsContainer() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {skillsData.map((skill, i) => (
                <SkillCard skill={skill} index={i} key={skill.title} />
            ))}
        </div>
    );
}
