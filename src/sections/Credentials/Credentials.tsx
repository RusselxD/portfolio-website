import Section from "../../components/common/Section";
import SectionHeader from "../../components/common/SectionHeader";
import CertificatesContainer from "./components/CertificatesContainer";

export default function Credentials() {
    return (
        <Section id="credentials-section" idx={4}>
            <div className="section-wrapper px-3 md:px-5 xl:px-20 relative">
                <div className="absolute inset-0 blur-2xl opacity-100 overflow-hidden">
                    <div className="hidden md:block -top-1/4 right-2/4 aurora-sphere-lg bg-[#8B8FFF]"></div>
                    <div className="hidden md:block bottom-1/4 left-2/4 aurora-sphere-lg bg-[#00df9b]"></div>
                    <div className="hidden md:block top-3/4 right-2/4 aurora-sphere-lg bg-[#be6eff]"></div>

                    <div className="md:hidden top-3/4 right-2/4 aurora-sphere-lg bg-[#be6eff]"></div>
                    <div className="md:hidden top-0 left-2/4 aurora-sphere-lg bg-[#8B8FFF]"></div>
                    <div className="md:hidden top-2/4 left-2/4 aurora-sphere-lg bg-[#00df9b]"></div>
                </div>

                <SectionHeader
                    title="Certifications"
                    subTitle="Relevant certifications and achievements"
                />
                <CertificatesContainer />
            </div>
        </Section>
    );
}
