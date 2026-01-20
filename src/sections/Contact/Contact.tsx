import Section from "../../components/common/Section";
import SectionHeader from "../../components/common/SectionHeader";
import ContactsContainer from "./components/ContactsContainer";

export default function Contact() {
    return (
        <Section id="contact-section" idx={5}>
            <div className="section-wrapper">
                <SectionHeader
                    title="Let's Connect"
                    subTitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                />
                <ContactsContainer />
            </div>
        </Section>
    );
}
