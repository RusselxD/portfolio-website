import Section from "../../components/common/Section";
import MainDetails from "./components/MainDetails";
import SkillsContainer from "./components/SkillsContainer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Section id="about-section" idx={1} variant="aurora">
            <div className="section-wrapper max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start">
                    {/* Left: Personal Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="w-full lg:w-5/12"
                    >
                        <MainDetails />
                    </motion.div>

                    {/* Right: Skill Cards */}
                    <div className="w-full lg:w-7/12">
                        <SkillsContainer />
                    </div>
                </div>
            </div>
        </Section>
    );
}
