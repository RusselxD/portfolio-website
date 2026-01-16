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
            </div>
        </Section>
    );
}
