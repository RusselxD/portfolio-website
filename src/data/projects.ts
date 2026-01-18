interface TechStack {
    name: string;
    icon: string;
    color: string;
}

interface Project {
    id: number;
    title: string;
    desc: string;
    overview: string;
    techStack: TechStack[];
    keyFeatures: string[];
    imgUrl: string;
    gitHubUrls: string[];
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
        title: "",
        desc: "",
        overview: "",
        techStack: [],
        keyFeatures: [],
        imgUrl: "",
        gitHubUrls: [],
    },
    {
        id: 2,
        title: "",
        desc: "",
        overview: "",
        techStack: [],
        keyFeatures: [],
        imgUrl: "",
        gitHubUrls: [],
    },
];
