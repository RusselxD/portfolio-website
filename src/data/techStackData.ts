export interface Technology {
    name: string;
    icon: string;
    color?: string;
}

export interface SkillGroup {
    title: string;
    technologies: Technology[];
}

export const techStackData: SkillGroup[] = [
    {
        title: "Languages",
        technologies: [
            {
                name: "JavaScript",
                icon: "logos:javascript",
            },
            {
                name: "TypeScript",
                icon: "logos:typescript-icon",
            },
            {
                name: "Python",
                icon: "logos:python",
            },
            {
                name: "Java",
                icon: "logos:java",
            },
            {
                name: "C#",
                icon: "devicon:csharp",
            },
            {
                name: "C",
                icon: "skill-icons:c",
            },
            {
                name: "PHP",
                icon: "logos:php",
            },
        ],
    },
    {
        title: "Databases",
        technologies: [
            {
                name: "MySQL",
                icon: "logos:mysql",
            },
            {
                name: "PostgreSQL",
                icon: "logos:postgresql",
            },
            {
                name: "MongoDB",
                icon: "logos:mongodb-icon",
            },
            {
                name: "SQL Server",
                icon: "devicon:microsoftsqlserver",
            },
            {
                name: "SQL Alchemy",
                icon: "devicon-plain:sqlalchemy",
            },
        ],
    },
    {
        title: "Cloud & DevOps",
        technologies: [
            {
                name: "Vercel",
                icon: "logos:vercel-icon",
            },
            {
                name: "Render",
                icon: "simple-icons:render",
            },
        ],
    },
    {
        title: "Frameworks & Libraries",
        technologies: [
            {
                name: "React",
                icon: "logos:react",
            },
            {
                name: "Node.js",
                icon: "logos:nodejs-icon",
            },
            {
                name: "Express.js",
                icon: "skill-icons:expressjs-light",
            },
            {
                name: ".NET",
                icon: "logos:dotnet",
            },
            {
                name: "FastAPI",
                icon: "devicon:fastapi",
            },
            {
                name: "Livewire",
                icon: "devicon:livewire",
            },
            {
                name: "Laravel",
                icon: "logos:laravel",
            },
            {
                name: "Alpine JS",
                icon: "devicon:alpinejs",
            },
            {
                name: "Axios",
                icon: "simple-icons:axios",
            },
            {
                name: "Tailwind CSS",
                icon: "logos:tailwindcss-icon",
            },
            {
                name: "daisyUI",
                icon: "simple-icons:daisyui",
                color: "#5A0EF8",
            },
        ],
    },

    {
        title: "Tools & Platforms",
        technologies: [
            {
                name: "Git",
                icon: "logos:git-icon",
            },
            {
                name: "Github",
                icon: "logos:github-icon",
            },
            {
                name: "VS Code",
                icon: "logos:visual-studio-code",
            },
            {
                name: "Visual Studio",
                icon: "logos:visual-studio",
            },
            {
                name: "PyCharm",
                icon: "logos:pycharm",
            },
            {
                name: "Postman",
                icon: "logos:postman-icon",
            },
            {
                name: "Ubuntu",
                icon: "logos:ubuntu",
            },
            {
                name: "NPM",
                icon: "logos:npm-icon",
            },
            {
                name: "Swagger",
                icon: "logos:swagger",
            },
            {
                name: "Vite",
                icon: "logos:vitejs",
            },
            {
                name: "Figma",
                icon: "logos:figma",
            },
        ],
    },
    {
        title: "AI & Machine Learning",
        technologies: [
            {
                name: "OpenCV",
                icon: "logos:opencv",
            },
            {
                name: "Ultralytics",
                icon: "simple-icons:ultralytics",
                color: "#0060FF",
            },
            {
                name: "Roboflow",
                icon: "simple-icons:roboflow",
                color: "#A351FB",
            },
        ],
    },
];
