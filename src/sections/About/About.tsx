import Section from "../../components/common/Section";
import EducationalBackground from "./components/EducationalBackground";
import Introduction from "./components/Introduction";
import MainDetails from "./components/MainDetails";
import SkillsContainer from "./components/SkillsContainer";

import { motion } from "framer-motion";

export default function About() {
    return (
        <Section id="about-section" idx={1}>
            <div className="px-10 grid lg:grid-cols-2 gap-8 mt-10">
                <div className="absolute inset-0 blur-3xl opacity-70">
                    <div className="absolute top-1/4 right-2/4 w-[35rem] h-[35rem] rounded-full opacity-15 bg-[#686eff]"></div>
                    <div className="absolute bottom-1/4 left-2/4 w-[35rem] h-[35rem] rounded-full opacity-15 bg-[#00df9b]"></div>
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
