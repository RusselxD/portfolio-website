import { useEffect, useRef, useState } from "react";
import { skillsData, type Skill } from "../../../data/skillsData";
import TypingText from "./TypingText";

const SkillContainer = ({ skill }: { skill: Skill }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="custom-container p-4 xl:p-5 rounded-lg">
            <skill.icon style={{ color: skill.color }} className="w-5 h-5" />
            <TypingText showText={skill.title} startTyping={isVisible} />
            <p className="text-[0.800rem] md:text-sm sec-text mt-1">
                {skill.subTitle}
            </p>
        </div>
    );
};

export default function SkillsContainer() {
    const skills: Skill[] = skillsData;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-2 xl:gap-3 mt-3 lg:mt-4 xl:mt-5">
            {skills.map((skill) => {
                return <SkillContainer skill={skill} key={skill.title} />;
            })}
        </div>
    );
}
