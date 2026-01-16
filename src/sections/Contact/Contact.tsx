import { LuConstruction } from "react-icons/lu";
import Section from "../../components/common/Section";
import SectionHeader from "../../components/common/SectionHeader";

export default function Contact() {
    return (
        <Section id="contact-section" idx={5}>
            <div className="section-wrapper">
                <SectionHeader
                    title="Let's Connect"
                    subTitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                />

                <div>
                    <div className="flex flex-col items-center justify-center ">
                        <LuConstruction className="text-6xl md:text-8xl text-gray-400 animate-pulse" />
                        <p className="mt-4 text-gray-500 text-lg md:text-xl">
                            Contacts section is under construction.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
