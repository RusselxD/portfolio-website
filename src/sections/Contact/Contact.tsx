import Section from "../../components/common/Section";
import ContactsContainer from "./components/ContactsContainer";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <Section id="contact-section" idx={5}>
            <div className="section-wrapper max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left: Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 block">
                            Let's Connect
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-4">
                            Start the Conversation.
                        </h1>
                        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                            I'm always open to discussing new projects,
                            creative ideas, or opportunities to be part of your
                            vision.
                        </p>
                    </motion.div>

                    {/* Right: Contact methods */}
                    <div className="lg:col-span-7">
                        <ContactsContainer />
                    </div>
                </div>
            </div>
        </Section>
    );
}
