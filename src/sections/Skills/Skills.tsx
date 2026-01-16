import Section from "../../components/common/Section";
import SectionHeader from "../../components/common/SectionHeader";
import { type SkillGroup, techStackData } from "../../data/techStackData";
import SkillGroupContainer from "./components/SkillGroupContainer";

export default function Skills() {
    const skillGroups: SkillGroup[] = techStackData;

    return (
        <Section id="skills-section" idx={3}>
            <div className="section-wrapper">
                <SectionHeader
                    title="Skills & Technologies"
                    subTitle="Technologies and tools I use to bring ideas to life"
                />
                <div className="px-3 md:px-5 xl:px-20 columns-1 md:columns-2 lg:columns-3 gap-3">
                    {skillGroups.map((group, i) => {
                        return (
                            <SkillGroupContainer skillGroup={group} key={i} />
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
