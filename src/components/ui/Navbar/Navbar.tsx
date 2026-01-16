import { useEffect, useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import SectionNavs from "./components/SectionNavs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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
        <>
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
            {/* Backdrop filter for when mobile menu is open */}

            <nav
                className={`fixed top-0 left-0 right-0 z-50 h-12 md:h-14 
                bg-prim-light-bg/60 dark:bg-prim-dark-bg/60
                backdrop-blur-sm transition-all border-b ${
                    isScrolled
                        ? "border-gray-300 dark:border-gray-800"
                        : "border-transparent"
                }`}
            >
                {/* Nav Bar for Mobile*/}
                <div className="flex items-center h-full justify-between md:hidden px-6 w-full mx-auto relative">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-2xl cursor-pointer"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
                    </button>
                    <DarkModeToggle />

                    {/* Mobile Menu Dropdown */}
                    {isMobileMenuOpen && (
                        <div
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute custom-container border-none rounded-md bg-gray-100 overflow-hidden w-fit top-full left-3 mt-1"
                        >
                            <SectionNavs />
                        </div>
                    )}
                </div>

                {/* Nav Bar for Desktop */}
                <div className="hidden md:flex h-full items-center justify-between px-6 w-full mx-auto ">
                    <div></div>
                    <SectionNavs />
                    <DarkModeToggle />
                </div>
            </nav>
        </>
    );
}
