export type LinkItem = {
    id: string;
    title: string;
    url: string;
    icon: string;
}

export const LINK_ITEMS: LinkItem[] = [
    { id: "github", title: "GitHub", url: "https://github.com/uelski", icon: "/links/github-mark-white.png" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/sam-vredenburgh-b5936641/", icon: "/links/InBug-White.png" },
    { id: "resume", title: "Resume", url: "/Sam_Vredenburgh_VisualCV_Resume_CO-updated.pdf", icon: "download" },
]
