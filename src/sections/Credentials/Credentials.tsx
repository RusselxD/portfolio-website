import Section from "../../components/common/Section";
import CertificatesContainer from "./components/CertificatesContainer";

export default function Credentials() {
    return (
        <Section
            id="credentials-section"
            idx={4}
            title="Certifications"
            subTitle="Relevant certifications and credentials I've earned"
        >
            <div className="mt-16">
                <CertificatesContainer />
            </div>
        </Section>
    );
}
