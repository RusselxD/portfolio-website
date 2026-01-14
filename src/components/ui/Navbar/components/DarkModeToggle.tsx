import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        return (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white relative bg-gray-200 dark:bg-gray-900 rounded-full w-14 h-7"
        >
            {
                <div
                    className={`rounded-full p-1 bg-white text-gray-800 absolute top-1 bottom-1 transition-all duration-300 ${
                        darkMode ? "left-8 rotate-0" : "left-1 rotate-180"
                    }`}
                >
                    {darkMode ? (
                        <LuMoonStar className="w-3 h-3" />
                    ) : (
                        <MdOutlineWbSunny className="w-3 h-3" />
                    )}
                </div>
            }
        </button>
    );
}
