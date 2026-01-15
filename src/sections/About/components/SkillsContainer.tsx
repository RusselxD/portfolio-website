import { skillsData, type Skill } from "../../../data/skillsData";

const SkillContainer = ({ skill }: { skill: Skill }) => {
    return (
        <div className="container p-5 rounded-lg">
            <skill.icon style={{color: skill.color}} className="w-5 h-5"/>
            <h2 className="font-semibold mt-2">{skill.title}</h2>
            <p className="text-sm sec-text mt-1">
                {skill.subTitle}
            </p>
        </div>
    );
};

export default function SkillsContainer() {
    const skills: Skill[] = skillsData;

    return (
        <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => {
                return <SkillContainer skill={skill} key={skill.title} />;
            })}
        </div>
    );
}
