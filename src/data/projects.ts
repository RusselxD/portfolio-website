import type { TechStack } from "./techStackData";

const dstImages = import.meta.glob(
    "../assets/projects/dst/*.{png,jpg,jpeg,svg}",
    {
        eager: true,
    },
);
const dstImagePaths = Object.values(dstImages).map((mod: any) => mod.default);

const surveySystemImages = import.meta.glob(
    "../assets/projects/survey_system/*.{png,jpg,jpeg,svg}",
    {
        eager: true,
    },
);
const surveySystemImagePaths = Object.values(surveySystemImages).map(
    (mod: any) => mod.default,
);

const plvCloudImages = import.meta.glob(
    "../assets/projects/plv_cloud/*.{png,jpg,jpeg,svg}",
    {
        eager: true,
    },
);

const plvCloudImagePaths = Object.values(plvCloudImages).map(
    (mod: any) => mod.default,
);

export interface Project {
    id: number;
    title: string;
    desc: string;
    overview: string;
    techStack: TechStack[];
    keyFeatures: string[];
    imgUrls: string[];
    gitHubUrl: string;
}

export const getProjectById = (id: number): Project => {
    const project = projectsData.find((proj) => proj.id === id);
    if (!project) {
        throw new Error(`Project with id ${id} not found`);
    }
    return project;
};

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Drake Sugary Treats' Website",
        desc: "A MERN-based menu and order management platform for small food and beverage businesses, enabling flexible menu configuration and a real-time, mobile-friendly customer ordering experience.",
        overview:
            "A dynamic menu and order management platform built with the MERN stack for small food and beverage businesses. It provides an admin panel with a modular menu editor supporting multi-size pricing, flavor sets, grouped pricing rules, availability toggles, and inline editing with optimistic updates. The backend validates and stores structured product data via RESTful APIs, while the customer interface delivers real-time price calculation, cart aggregation, a synced floating cart, and a shareable order summary. The UI is built with Tailwind CSS for fast, responsive, and mobile-first interactions.",
        techStack: [
            {
                name: "React",
                icon: "devicon:react",
            },
            {
                name: "Express.js",
                icon: "skill-icons:expressjs-light",
            },
            {
                name: "Node.js",
                icon: "logos:nodejs-icon",
            },
            {
                name: "MongoDB",
                icon: "devicon:mongodb",
            },
            {
                name: "Tailwind CSS",
                icon: "logos:tailwindcss-icon",
            },
            {
                name: "Axios",
                icon: "simple-icons:axios",
            },

            { name: "Vercel", icon: "logos:vercel-icon" },
            { name: "Render", icon: "simple-icons:render" },
        ],
        keyFeatures: [
            "Dynamic menu builder",
            "Price group system",
            "RESTful API integration",
            "Real-time cart system",
            "Order summary modal",
            "Copy-to-message generator",
            "Admin authentication",
            "Responsive layout",
            "Structured database schema",
        ],
        imgUrls: dstImagePaths,
        gitHubUrl: "https://github.com/RusselxD/dst-frontend",
    },
    {
        id: 2,
        title: "Survey Management with Data Analysis",
        desc: "An enterprise-grade survey platform that enables secure survey creation, large-scale response handling, and advanced analytics through a dual admin and respondent interface.",
        overview:
            "An enterprise-grade survey platform built with React/TypeScript, ASP.NET Core, and SQL Server, focused on scalable survey creation and analytics. It implements JWT-based authentication and RBAC across an admin portal and a public respondent interface. Administrators design surveys using a modular builder with 10+ question types, validation, and conditional logic. A multi-dimensional analytics engine provides Chart.js visualizations for trends, engagement, completion metrics, and survey performance, with backend optimizations for handling millions of responses, QR code access, and PDF/Excel exports.",
        techStack: [
            {
                name: "React",
                icon: "devicon:react",
            },
            {
                name: "TypeScript",
                icon: "logos:typescript-icon",
            },
            {
                name: "ASP.NET",
                icon: "logos:dotnet",
            },
            {
                name: "SQL Server",
                icon: "devicon:microsoftsqlserver",
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
            {
                name: "Axios",
                icon: "simple-icons:axios",
            },
            { name: "JWT", icon: "devicon:jwt" },
        ],
        keyFeatures: [
            "Multi-dimensional analytics engine",
            "Multi-type survey builder",
            "High-volume data handling",
            "JWT-based RBAC system",
            "Survey performance metrics",
            "Multi-format exports",
            "QR code generation",
            "Protected routing",
            "RESTful API architecture",
        ],
        imgUrls: surveySystemImagePaths,
        gitHubUrl: "https://github.com/RusselxD/survey-system-frontend",
    },
    {
        id: 3,
        title: "PLV Cloud",
        desc: "A production-ready Laravel/Livewire file-sharing platform for Pamantasan ng Lungsod ng Valenzuela that delivers secure, role-based cloud storage, collaboration, and scalable deployment.",
        overview:
            "A production-ready file-sharing web application built with Laravel/Livewire and PostgreSQL, designed for Pamantasan ng Lungsod ng Valenzuela. It features secure authentication with role-based access control, hierarchical folder management with unlimited nesting, and Cloudinary-backed storage with automatic optimization. The platform supports public and private collaboration with granular permissions, real-time search, detailed activity logging, notifications, and course-linked file organization. Background jobs are handled through queue-based processing, with deployment via Docker, Nginx, Vite, and Tailwind CSS with Alpine.js for scalable CI/CD.",
        techStack: [
            {
                name: "Laravel",
                icon: "logos:laravel",
            },
            {
                name: "Livewire",
                icon: "devicon:livewire",
            },
            {
                name: "Alpine JS",
                icon: "devicon:alpinejs",
            },
            {
                name: "Tailwind CSS",
                icon: "logos:tailwindcss-icon",
            },
            {
                name: "PostgreSQL",
                icon: "logos:postgresql",
            },
            { name: "Render", icon: "simple-icons:render" },
        ],
        keyFeatures: [
            "Hierarchical folder management",
            "Cloudinary CDN integration",
            "Real-time collaboration",
            "Comprehensive activity logging",
            "In-app notification center",
            "Responsive interface",
            "Compatible across devices",
            "Docker production deployment",
            "Admin dashboard interface",
            "Content reporting system",
            "Advanced search and filtering",
        ],
        imgUrls: plvCloudImagePaths,
        gitHubUrl: "https://github.com/RusselxD/plv-cloud",
    },
];

console.log(surveySystemImagePaths);
