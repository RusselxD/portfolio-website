import Section from "../../components/common/Section";
import { type SkillGroup, techStackData } from "../../data/techStackData";
import SkillGroupContainer from "./components/SkillGroupContainer";

export default function Skills() {
    const skillGroups: SkillGroup[] = techStackData;

    return (
        <Section
            id="skills-section"
            idx={3}
            title="Skills & Technologies"
            subTitle="Technologies and tools I use to bring ideas to life"
        >
            <div className="grid grid-cols-3 gap-5 mt-14">

                {skillGroups.map((group, i) => {
                    return <SkillGroupContainer skillGroup={group} key={i} />;
                })}
            </div>
        </Section>
    );
}
