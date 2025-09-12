export type StoryItem = {
    id: string;
    title: string;
    subtext: string;
    period: string;
    blurb: string;
    img: string;
    link?: string;
}

// have db driven eventually
export const STORY_ITEMS: StoryItem[] = [
    {
        id: "general_assembly",
        title: "General Assembly",
        subtext: "Web Development Immersive",
        period: "2015–2016",
        blurb:
            "Three month web development immersive bootcamp. Focus on HTML, CSS, JavaScript, and Ruby on Rails. Building the foundation of my coding skills.",
        img: "ga_logo.png",
        link: "https://generalassemb.ly/",
    },
    {
        id: "tsg_medical",
        title: "TSG Medical",
        subtext: "Web Developer",
        period: "2016–2017",
        blurb:
            "First experience with production code, building on existing repositories and creating new applications to expand e-commerce capabilities. Focus on AngularJS and Firebase.",
        img: "react_logo.jpeg",
    },
    {
        id: "aisle_rocket",
        title: "Aisle Rocket",
        subtext: "Full Stack Developer",
        period: "2017-2022",
        blurb:
            "Worked with cross-agency teams to develop and deliver web experiences for multiple Whirlpool brands using modern web technologies including AEM, Wordpress, React, Vue, Angular and NuxtJS.",
        img: "ars_logo.png",
        link: "https://www.aislerocket.com/",
    },
    {
      id: "homefile",
      title: "Homefile",
      subtext: "Full Stack Developer/Co-founder",
      period: "2022-2025",
      blurb:
        "Leading product development for Homefile, a home management platform providing homeowners and service partners with an AI-powered solution. Small team building with NestJS, MongoDB, and React.",
      img: "homefile_logo.png",
      link: "https://www.homefile.com/",
    },
    {
      id: "university_of_denver",
      title: "University of Denver",
      subtext: "Masters in Data Science",
      period: "2022-2025",
      blurb:
        "Masters in Data Science from the University of Denver. Focus on machine learning, data engineering, and MLOps.",
      img: "du_logo.webp",
      link: "https://www.du.edu/",
    },
];