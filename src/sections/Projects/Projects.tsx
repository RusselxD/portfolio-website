import Section from "../../components/common/Section";
import SectionHeader from "../../components/common/SectionHeader";
import ProjectsContainer from "./components/ProjectsContainer";

export default function Projects() {
    return (
        <Section id="projects-section" idx={2}>
            <div className="section-wrapper">
                <SectionHeader
                    title="Featured Projects"
                    subTitle="A selection of projects I've worked on, showcasing my skills in development."
                />

                <ProjectsContainer />
            </div>
        </Section>
    );
}
