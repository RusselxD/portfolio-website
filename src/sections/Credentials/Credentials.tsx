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
            <div className="px-3 md:px-5 xl:px-20">
                <CertificatesContainer />
            </div>
        </Section>
    );
}
