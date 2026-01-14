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
            className={`py-2 px-4 rounded-lg transition-colors ${
                isActive
                    ? "text-primary bg-primary/20 font-bold"
                    : "text-gray-500 hover:font-semibold hover:bg-gray-200 hover:text-gray-900 hover:dark:text-white hover:dark:bg-gray-800"
            }`}
        >
            {name}
        </button>
    );
};

export default function SectionNavs() {
    const [activeSection, setActiveSection] = useState("home-section");

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
        <div className="flex gap-5 text-sm">
            <SectionNavigator
                name="Home"
                elementId="home-section"
                isActive={activeSection === "home-section"}
            />
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
