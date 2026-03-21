import Section from "../../components/common/Section";
import CertificatesContainer from "./components/CertificatesContainer";
import { motion } from "framer-motion";

export default function Credentials() {
    return (
        <Section id="credentials-section" idx={4}>
            <div className="section-wrapper max-w-7xl mx-auto px-4 md:px-8">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-12 lg:mb-16 max-w-xl"
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">
                        Validated Excellence
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-3">
                        Credentials
                    </h1>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                        A record of competitive achievements and certifications in programming.
                    </p>
                </motion.header>

                <CertificatesContainer />
            </div>
        </Section>
    );
}
