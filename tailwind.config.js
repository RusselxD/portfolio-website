/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                "prim-light-bg": "#f6f8fc",
                "sec-light-bg": "#f1f3f9",
                "prim-dark-bg": "#050610",
                "sec-dark-bg": "#0a0b16",
            },
        },
    },
    plugins: [],
};
