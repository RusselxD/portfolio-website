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
        title: "Drake Sugary Treat's Website",
        desc: "A full-stack menu management and ordering platform that enables administrators to configure drinks, pricing, and categories while providing customers with a responsive ordering interface and real-time cart functionality.",
        overview:
            "This system is a dynamic menu and order management platform built with MERN (MongoDB, Express, React, Node.js) stack, designed specifically for small food and beverage businesses needing centralized control of products and customer ordering interactions. The admin panel includes a fully modular menu editor with support for multi-size pricing, nested price groups, dynamic flavor sets, conditional availability toggles, and inline editing with optimistic UI updates. Each menu item supports multiple size tiers (e.g., Small/Large), flavor lists, seasonal availability, and grouped pricing rules that can be added, removed, or reordered on demand. Admin actions trigger Axios-based REST calls to the backend, which performs validation and persists structured product configurations into the database. On the customer-facing side, the interactive ordering UI supports quantity selection, live price computation, cart aggregation, and a floating cart preview synced across page sections. The order summary modal consolidates items into a formatted list with computed totals and provides a one-click “Copy Order” function that serializes the cart into a shareable text format for messaging platforms. The interface is built with Tailwind CSS for performance and consistent styling, supporting smooth transitions, instant re-rendering, and mobile-first usability.",
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
        desc: "A full-stack enterprise survey management platform that enables administrators to create, distribute, and analyze surveys with advanced analytics, role-based access control, and reporting capabilities.",
        overview:
            "This system is an enterprise-grade web application built with React/TypeScript frontend, ASP.NET Core backend, and SQL Server database, delivering a scalable solution for survey management and analytics. The platform implements JWT-based authentication and RBAC across a dual-interface architecture: an administrative portal and public respondent interface. Administrators leverage a modular survey builder with 10+ question types, featuring validation and conditional logic. The core multi-dimensional analytics engine provides Chart.js-powered visualizations tracking response trends, completion time distributions, engagement funnels, geographical heatmaps, question type usage, scatter plot for survey length and completion rate correlation, and survey performance rankings. Optimized backend queries with pagination and data aggregation efficiently handle millions of response records. RESTful API integration via Axios connects the frontend to robust ASP.NET Core services for efficient end-to-end communication. The system features client-side QR code generation with backend persistence, and data exports via jsPDF (PDF reports) and SheetJS (Excel dumps). The application uses React Router v7 for protected routing and Tailwind CSS with daisyUI for intuitive and user-friendly interface.",
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
                name: "ASP.NET Core",
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
        desc: "A full-stack educational cloud storage platform that enables students to store, organize, share, and collaborate on academic files with role-based access control, in-app notifications, and comprehensive activity tracking.",
        overview:
            "This system is a production-ready web application built with Laravel/Livewire and PostgreSQL, delivering a comprehensive cloud storage solution optimized for Pamantasan ng Lungsod ng Valenzuela. The platform implements Laravel's authentication with Brevo API email verification, and role-based access control. Users interact with a hierarchical folder structure supporting unlimited nesting, file uploads, and bulk operations for files stored on Cloudinary's CDN with automatic optimization. The core collaboration engine enables public folder sharing with automatic contributor assignment—users uploading to public folders gain contributor status—alongside private folders with granular permissions. Real-time search filters content across files, folders, courses, dates, and types through optimized queries. Comprehensive activity logging tracks all operations (uploads, downloads, shares, deletions) with user dashboards. An integrated notification center delivers real-time alerts for shares, access requests, and announcements. Course management links files to academic courses, while favorites and recent files provide quick access. Queue-based job processing handles asynchronous tasks via Supervisor. The application uses Vite 7, Tailwind CSS 3 with Alpine.js for reactive components, and Docker containerization with Nginx for scalable Render.com deployment with automated CI/CD.",
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
            "Responsive PWA design",
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
