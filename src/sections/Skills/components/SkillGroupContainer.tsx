import type { SkillGroup, Technology } from "../../../data/techStackData";

const SkillCapsule = ({ tech }: { tech: Technology }) => {
    return (
        <div className="flex items-center gap-2 rounded-full py-2 px-3 bg-slate-100 dark:bg-gray-800">
            {tech.icon && (
                <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
            )}
            <p className="dark:text-white text-sm font-medium">{tech.name}</p>
        </div>
    );
};

export default function SkillGroupContainer({
    skillGroup,
}: {
    skillGroup: SkillGroup;
}) {
    return (
        <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border-2 border-gray-200 dark:border-gray-800">
            <p className="dark:text-white text-lg font-semibold">
                {skillGroup.title}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
                {skillGroup.technologies.map((tech) => {
                    return <SkillCapsule tech={tech} key={tech.name} />;
                })}
            </div>
        </div>
    );
}
