export type LinkItem = {
    id: string;
    title: string;
    url: string;
    icon: string;
}

export const LINK_ITEMS: LinkItem[] = [
    { id: "github", title: "GitHub", url: "https://github.com/uelski", icon: "/links/github-mark-white.png" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/sam-vredenburgh-b5936641/", icon: "/links/InBug-White.png" },
    { id: "blue-cypher", title: "Blue Cypher", url: "https://bluecypher.ai/", icon: "building" },
    { id: "resume", title: "Resume", url: "/sam_vredenburgh.pdf", icon: "download" },
]
