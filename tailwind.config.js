/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Plus Jakarta Sans", "sans-serif"],
            },
            colors: {
                primary: "#4a40e0",
                "primary-dim": "#3d30d4",
                "primary-container": "#9795ff",
                "primary-fixed-dim": "#8885ff",
                secondary: "#6a37d4",
                "secondary-dim": "#5e26c7",
                "secondary-container": "#dac9ff",
                tertiary: "#815100",
                "tertiary-fixed": "#f8a010",
                surface: "#f5f7f9",
                "surface-dim": "#d0d5d8",
                "surface-container-lowest": "#ffffff",
                "surface-container-low": "#e8ebee",
                "surface-container": "#e5e9eb",
                "surface-container-high": "#dfe3e6",
                "on-surface": "#2c2f31",
                "on-surface-variant": "#595c5e",
                "on-primary": "#f4f1ff",
                "outline-variant": "#abadaf",
                error: "#b41340",
                "error-container": "#f74b6d",
            },
            borderRadius: {
                DEFAULT: "1rem",
                lg: "2rem",
                xl: "3rem",
                full: "9999px",
            },
            keyframes: {
                bob: {
                    "0%, 100%": { transform: "translateY(-50px) scale(1.05)" },
                    "50%": { transform: "translateY(50px) scale(0.95)" },
                },
            },
            animation: {
                "slow-bob": "bob 6s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
