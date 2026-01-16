import Section from "../../components/common/Section";
import SectionHeader from "../../components/common/SectionHeader";
import { LuConstruction } from "react-icons/lu";


export default function Projects() {
    return (
        <Section id="projects-section" idx={2}>
            <div className="section-wrapper">
                <SectionHeader
                    title="Featured Projects"
                    subTitle="A selection of projects I've worked on, showcasing my skills in development."
                />

                <div>
                    <div className="flex flex-col items-center justify-center ">
                        <LuConstruction className="text-6xl md:text-8xl text-gray-400 animate-pulse" />
                        <p className="mt-4 text-gray-500 text-lg md:text-xl">
                            Projects section is under construction.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
