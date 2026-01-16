import Section from "../../components/common/Section";
import EducationalBackground from "./components/EducationalBackground";
import Introduction from "./components/Introduction";
import MainDetails from "./components/MainDetails";
import SkillsContainer from "./components/SkillsContainer";

import { motion } from "framer-motion";

export default function About() {
    return (
        <Section id="about-section" idx={1}>
            <div className="section-wrapper px-3 md:px-5 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-8 relative">

                <div className="absolute inset-0 blur-3xl opacity-100 overflow-hidden">
                    <div className="bottom-4/4 lg:bottom-1/4 left-1/3 md:left-2/4 aurora-sphere-lg bg-[#00df9b]"></div>
                    <div className="top-2/4 md:bottom-1/4 right-1/4 md:right-2/4 aurora-sphere-lg bg-[#8B8FFF]"></div>
                </div>

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col gap-8"
                >
                    <MainDetails />
                    <Introduction />
                </motion.div>

                {/* Right Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <EducationalBackground />
                    <SkillsContainer />
                </motion.div>
            </div>
        </Section>
    );
}
