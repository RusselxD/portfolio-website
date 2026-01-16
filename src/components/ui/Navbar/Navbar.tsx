import { useEffect, useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import SectionNavs from "./components/SectionNavs";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let scrollTimeout: number;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);

            scrollTimeout = window.setTimeout(() => {
                const scrolled = window.scrollY > 10;
                setIsScrolled(scrolled);
            }, 150);
        };

        // Check initial scroll position
        const scrolled = window.scrollY > 10;
        setIsScrolled(scrolled);

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <nav
            className={`hidden md:block fixed top-0 left-0 right-0 z-50 h-16 
                bg-prim-light-bg/60 dark:bg-prim-dark-bg/60
                backdrop-blur-sm transition-all border-b ${
                    isScrolled
                        ? "border-gray-300 dark:border-gray-800"
                        : "border-transparent"
                }`}
        >
            <div className="h-full flex items-center justify-between px-6 w-full mx-auto ">
                <div></div>
                <SectionNavs />
                <DarkModeToggle />
            </div>
        </nav>
    );
}
