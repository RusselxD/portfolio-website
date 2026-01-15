import type { IconType } from "react-icons";
import {
    SiJavascript,
    SiPython,
    SiTypescript,
    SiNodedotjs,
    SiDotnet,
    SiExpress,
    SiFastapi,
    SiTailwindcss,
    SiDaisyui,
    SiLivewire,
    SiLaravel,
    SiPhp,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiSqlalchemy,
    SiGit,
    SiGithub,
    SiPostman,
    SiVercel,
    SiRender,
    SiPycharm,
    SiVite,
    SiSwagger,
    SiOpencv,
    SiRoboflow,
} from "react-icons/si";
import { FaFigma, FaJava, FaUbuntu } from "react-icons/fa6";
import { FaNpm, FaReact } from "react-icons/fa";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { LuScanEye } from "react-icons/lu";

export interface Technology {
    name: string;
    icon: IconType;
    color: string;
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
                icon: SiJavascript,
                color: "#F7DF1E",
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
                color: "#3178C6",
            },
            {
                name: "Python",
                icon: SiPython,
                color: "#3776AB",
            },
            {
                name: "Java",
                icon: FaJava,
                color: "#007396",
            },
            {
                name: "PHP",
                icon: SiPhp,
                color: "#777BB4",
            },
        ],
    },
    {
        title: "Databases",
        technologies: [
            {
                name: "MySQL",
                icon: SiMysql,
                color: "#4479A1",
            },
            {
                name: "PostgreSQL",
                icon: SiPostgresql,
                color: "#4169E1",
            },
            {
                name: "MongoDB",
                icon: SiMongodb,
                color: "#47A248",
            },
            {
                name: "SQL Server",
                icon: DiMsqlServer,
                color: "#CC2927",
            },
            {
                name: "SQL Alchemy",
                icon: SiSqlalchemy,
                color: "#D71F00",
            },
        ],
    },
    {
        title: "Cloud & DevOps",
        technologies: [
            {
                name: "Vercel",
                icon: SiVercel,
                color: "#000000",
            },
            {
                name: "Render",
                icon: SiRender,
                color: "#46E3B7",
            },
        ],
    },
    {
        title: "Frameworks & Libraries",
        technologies: [
            {
                name: "React",
                icon: FaReact,
                color: "#61DAFB",
            },
            {
                name: "Node.js",
                icon: SiNodedotjs,
                color: "#339933",
            },
            {
                name: "Express.js",
                icon: SiExpress,
                color: "#339933",
            },
            {
                name: ".NET",
                icon: SiDotnet,
                color: "#512BD4",
            },
            {
                name: "FastAPI",
                icon: SiFastapi,
                color: "#009688",
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                color: "#06B6D4",
            },
            {
                name: "daisyUI",
                icon: SiDaisyui,
                color: "#5A0EF8",
            },
            {
                name: "Livewire",
                icon: SiLivewire,
                color: "#FB70A9",
            },
            {
                name: "Laravel",
                icon: SiLaravel,
                color: "#FF2D20",
            },
            {
                name: "Vite",
                icon: SiVite,
                color: "#646CFF",
            },
        ],
    },

    {
        title: "Tools & Platforms",
        technologies: [
            {
                name: "Git",
                icon: SiGit,
                color: "#F05032",
            },
            {
                name: "Github",
                icon: SiGithub,
                color: "#181717",
            },
            {
                name: "VS Code",
                icon: VscVscode,
                color: "#007ACC",
            },
            {
                name: "Visual Studio",
                icon: DiVisualstudio,
                color: "#5C2D91",
            },
            {
                name: "PyCharm",
                icon: SiPycharm,
                color: "#00bde2",
            },
            {
                name: "Postman",
                icon: SiPostman,
                color: "#FF6C37",
            },
            {
                name: "Ubuntu",
                icon: FaUbuntu,
                color: "#E95420",
            },
            {
                name: "NPM",
                icon: FaNpm,
                color: "#CB3837",
            },
            {
                name: "Swagger",
                icon: SiSwagger,
                color: "#85EA2D",
            },
            {
                name: "Figma",
                icon: FaFigma,
                color: "#F24E1E",
            },
        ],
    },
    {
        title: "AI & Machine Learning",
        technologies: [
            {
                name: "OpenCV",
                icon: SiOpencv,
                color: "#5C3EE8",
            },
            {
                name: "Ultralytics",
                icon: LuScanEye,
                color: "#0060FF",
            },
            {
                name: "Roboflow",
                icon: SiRoboflow,
                color: "#A351FB",
            },
        ],
    },
    // {
    //     title: "API & Architecture",
    //     technologies: [
    //         {
    //             name: "RESTful APIs",
    //         },
    //         {
    //             name: "Websockets",
    //         },
    //         {
    //             name: "JWT",
    //         },
    //     ],
    // },
];
