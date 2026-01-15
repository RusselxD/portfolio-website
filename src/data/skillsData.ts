import { FaCode } from "react-icons/fa";
import { TbRoute, TbBrain } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import type { IconType } from "react-icons";

export interface Skill {
    title: string;
    subTitle: string;
    icon: IconType;
    color: string;
}

export const skillsData: Skill[] = [
    {
        title: "Full-Stack Development",
        subTitle: "End-to-end web solutions",
        icon: FaCode,
        color: "#6366F1",
    },
    {
        title: "Data Structures & Algorithms",
        subTitle: "Optimized problem-solving techniques",
        icon: SiLeetcode,
        color: "#F59E0B",
    },
    {
        title: "Database Management",
        subTitle: "Efficient data storage and retrieval",
        icon: FaDatabase,
        color: "#3B82F6",
    },
    {
        title: "API Development",
        subTitle: "Robust and scalable APIs",
        icon: TbRoute,
        color: "#10B981",
    },
    {
        title: "UI/UX Design",
        subTitle: "Intuitive and interactive interfaces",
        icon: MdOutlineDashboard,
        color: "#8B5CF6",
    },
    {
        title: "AI & Machine Learning",
        subTitle: "Intelligent solutions",
        icon: TbBrain,
        color: "#EF4444",
    },
];
