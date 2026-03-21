import Section from "../../components/common/Section";
import { techStackData } from "../../data/techStackData";
import SkillGroupCard from "./components/SkillGroupCard";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <Section id="skills-section" idx={3}>
            <div className="section-wrapper max-w-7xl mx-auto px-4 md:px-8">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-12 lg:mb-16 max-w-xl"
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">
                        Tech Stack
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-3">
                        Skills & Technologies
                    </h1>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </motion.header>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
                    {/* Languages — wide */}
                    <div className="md:col-span-8">
                        <SkillGroupCard group={techStackData[0]} index={0} />
                    </div>
                    {/* Cloud & DevOps — narrow */}
                    <div className="md:col-span-4">
                        <SkillGroupCard group={techStackData[2]} index={1} />
                    </div>
                    {/* Frameworks & Libraries — half */}
                    <div className="md:col-span-6">
                        <SkillGroupCard group={techStackData[3]} index={2} />
                    </div>
                    {/* Databases — half */}
                    <div className="md:col-span-6">
                        <SkillGroupCard group={techStackData[1]} index={3} />
                    </div>
                    {/* Tools & Platforms — wide */}
                    <div className="md:col-span-8">
                        <SkillGroupCard group={techStackData[4]} index={4} />
                    </div>
                    {/* AI & ML — narrow */}
                    <div className="md:col-span-4">
                        <SkillGroupCard group={techStackData[5]} index={5} />
                    </div>
                </div>
            </div>
        </Section>
    );
}
