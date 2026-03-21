import { useEffect, useState } from "react";
import SectionNavs from "./components/SectionNavs";
import { Icon } from "@iconify/react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let scrollTimeout: number;

        const handleScroll = () => {
            clearTimeout(scrollTimeout);

            scrollTimeout = window.setTimeout(() => {
                const scrolled = window.scrollY > 10;
                setIsScrolled(scrolled);
            }, 150);
        };

        const scrolled = window.scrollY > 10;
        setIsScrolled(scrolled);

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <>
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            <nav
                className={`fixed top-0 left-0 right-0 z-50 h-14 md:h-16
                bg-white/60 backdrop-blur-xl transition-all ${
                    isScrolled
                        ? "shadow-[0_8px_32px_0_rgba(74,64,224,0.08)]"
                        : ""
                }`}
            >
                {/* Mobile */}
                <div className="flex items-center h-full justify-end md:hidden px-6 w-full mx-auto relative">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-2xl cursor-pointer text-on-surface-variant"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <Icon icon="iconamoon:close-bold" />
                        ) : (
                            <Icon icon="pajamas:hamburger" />
                        )}
                    </button>

                    {isMobileMenuOpen && (
                        <div
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute glass-panel rounded-[1rem] overflow-hidden w-fit top-full right-3 mt-2"
                        >
                            <SectionNavs />
                        </div>
                    )}
                </div>

                {/* Desktop */}
                <div className="hidden md:flex h-full items-center justify-center px-8 w-full mx-auto">
                    <SectionNavs />
                </div>
            </nav>
        </>
    );
}
