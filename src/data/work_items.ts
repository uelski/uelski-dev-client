export type Tech = {
    name: string;
    badge: string;
}

export type WorkItem = {
    id: string;
    title: string;
    role: string;
    subtext: string;
    tech: Tech[];
    period?: string;
    img: string;
    link?: string;
    old?: boolean;
}

export const WORK_ITEMS: WorkItem[] = [
    {
        id: "homefile",
        title: "Homefile",
        role: "Full Stack Developer/Co-founder",
        subtext: "Leading a small team of developers to create a new AI-powered platform for homeowners to manage their home.",
        tech: [{"name": "NestJS", "badge": "secondary"}, {"name": "MongoDB", "badge": "warning"}, {"name": "React", "badge": "primary"}, {"name": "Typescript", "badge": "accent"}, {"name": "Docker", "badge": "neutral"}, {"name": "GCP", "badge": "warning"}, {"name": "OpenAI", "badge": "success"}, {"name": "Gemini", "badge": "warning"}, {"name": "LLMs", "badge": "error"}],
        period: "2022-2025",
        img: "work/homefile-screenshot.jpg",
        link: "https://www.homefile.com/",
    },
    {
        id: "jennair",
        title: "JennAir",
        role: "Full Stack Developer",
        subtext: "Premium Appliance Brand. Built out a new website for the brand using React on Adobe Experience Manager.",
        tech: [{"name": "React", "badge": "primary"}, {"name": "TypeScript", "badge": "accent"}, {"name": "Sass", "badge": "info"}, {"name": "AEM", "badge": "error"}, {"name": "Figma", "badge": "warning"}],
        period: "2020-2022",
        img: "work/ja-site.jpg",
    },
    {
        id: "maytag",
        title: "Maytag",
        role: "Frontend Developer",
        subtext: "Reliable Home Appliances. Created site-wide May is Maytag Month drawer experience with AngularJS in AEM.",
        tech: [{"name": "Angular", "badge": "primary"}, {"name": "Docker", "badge": "neutral"}, {"name": "AEM", "badge": "error"}],
        period: "2018",
        img: "work/mimm-screenshot.jpg",
    },
    {
        id: "whirlpool",
        title: "Whirlpool",
        role: "Frontend Developer",
        subtext: "Global Appliance Manufacturer. Responsible for building landing pages and other immersive web experiences.",
        tech: [{"name": "JavaScript", "badge": "primary"}, {"name": "jQuery", "badge": "neutral"}, {"name": "CSS", "badge": "info"}, {"name": "HTML", "badge": "success"}, {"name": "AEM", "badge": "error"}],
        period: "2017-2020",
        img: "work/whirlpool-screenshot.jpg",
        old: true,
    },
    {
        id: "kitchenaid",
        title: "KitchenAid",
        role: "Frontend Developer",
        subtext: "Kitchen Appliance Specialist. Built out landing pages and special promotional pages for the brand.",
        tech: [{"name": "JavaScript", "badge": "primary"}, {"name": "jQuery", "badge": "neutral"}, {"name": "CSS", "badge": "info"}, {"name": "HTML", "badge": "success"}, {"name": "AEM", "badge": "error"}],
        period: "2018-2020",
        img: "work/kitchenaid-screenshot.jpg",
        old: true,
    }
]