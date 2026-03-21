import Section from "../../components/common/Section";
import { projectsData } from "../../data/projects";
import ProjectRow from "./components/ProjectRow";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <Section id="projects-section" idx={2}>
            <div className="section-wrapper max-w-7xl mx-auto px-4 md:px-8">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-12 lg:mb-16 max-w-xl"
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">
                        Featured Work
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-3">
                        Featured Work
                    </h1>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                        A curated selection of high-precision architectural solutions.
                    </p>
                </motion.header>

                <div className="space-y-10 lg:space-y-14">
                    {projectsData.map((project, i) => (
                        <ProjectRow
                            key={project.id}
                            project={project}
                            reverse={i % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
