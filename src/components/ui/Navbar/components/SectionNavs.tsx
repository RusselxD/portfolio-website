import { useEffect, useState } from "react";

interface SectionNavigatorProps {
    name: string;
    elementId: string;
    isActive: boolean;
}

const SectionNavigator = ({
    name,
    elementId,
    isActive,
}: SectionNavigatorProps) => {
    return (
        <button
            onClick={() =>
                document
                    .getElementById(elementId)
                    ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`py-2.5 pr-10 pl-3 md:py-2 md:px-4 text-left md:text-center md:rounded-lg transition-colors ${
                isActive
                    ? "text-primary bg-primary/20 font-bold"
                    : "nav-text-inactive"
            }`}
        >
            {name}
        </button>
    );
};

export default function SectionNavs() {
    const [activeSection, setActiveSection] = useState("about-section");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6,
            }
        );

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="gap-0 md:gap-5 text-sm flex flex-col md:flex-row">
            <SectionNavigator
                name="About"
                elementId="about-section"
                isActive={activeSection === "about-section"}
            />
            <SectionNavigator
                name="Projects"
                elementId="projects-section"
                isActive={activeSection === "projects-section"}
            />
            <SectionNavigator
                name="Skills"
                elementId="skills-section"
                isActive={activeSection === "skills-section"}
            />
            <SectionNavigator
                name="Credentials"
                elementId="credentials-section"
                isActive={activeSection === "credentials-section"}
            />
            <SectionNavigator
                name="Contact"
                elementId="contact-section"
                isActive={activeSection === "contact-section"}
            />
        </div>
    );
}
