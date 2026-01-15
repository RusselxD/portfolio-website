import Section from "../../components/common/Section";
import EducationalBackground from "./components/EducationalBackground";
import Introduction from "./components/Introduction";
import MainDetails from "./components/MainDetails";
import SkillsContainer from "./components/SkillsContainer";

import { motion } from "framer-motion";

export default function About() {
    return (
        <Section id="about-section" idx={1} title="About Me">
            <div className="px-10 grid lg:grid-cols-2 gap-8">
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
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col justify-between"
                >
                    <EducationalBackground />
                    <SkillsContainer />
                </motion.div>
            </div>
        </Section>
    );
}
