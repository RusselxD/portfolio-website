export interface Skill {
    title: string;
    subTitle: string;
    icon: string;
    color: string;
}

export const skillsData: Skill[] = [
    {
        title: "Full-Stack Development",
        subTitle: "End-to-end web solutions",
        icon: "mingcute:code-line",
        color: "#6366F1",
    },
    {
        title: "Data Structures & Algorithms",
        subTitle: "Efficient problem solving",
        icon: "devicon-plain:leetcode",
        color: "#F59E0B",
    },
    {
        title: "Database Management",
        subTitle: "Efficient data storage and retrieval",
        icon: "mdi:database",
        color: "#3B82F6",
    },
    {
        title: "API Development",
        subTitle: "Robust and scalable APIs",
        icon: "tabler:route",
        color: "#10B981",
    },
    {
        title: "UI/UX Design",
        subTitle: "Intuitive digital experiences",
        icon: "material-symbols:dashboard-outline-rounded",
        color: "#8B5CF6",
    },
    {
        title: "AI & Machine Learning",
        subTitle: "Intelligent solutions",
        icon: "fluent:brain-32-regular",
        color: "#EF4444",
    },
];
