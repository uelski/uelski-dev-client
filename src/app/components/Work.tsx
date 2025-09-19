import { WORK_ITEMS } from "@/data/work_items";

const badgeClasses = {
    primary: "badge badge-primary flex-shrink-0",
    secondary: "badge badge-secondary flex-shrink-0", 
    accent: "badge badge-accent flex-shrink-0",
    neutral: "badge badge-neutral flex-shrink-0",
    info: "badge badge-info flex-shrink-0",
    success: "badge badge-success",
    warning: "badge badge-warning flex-shrink-0",
    error: "badge badge-error flex-shrink-0"
} as const;

export default function Work() {
    return (
        <section id="work" className="py-10 bg-base-100">
            <h2 className="text-4xl font-bold text-center pb-10">Work Experience</h2>
            <div className="grid lg:grid-cols-[280px,1fr] gap-8 items-start">
                <ul className="list bg-base-100 rounded-box shadow-md bg-white m-4 sm:m-10 mt-0">
                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Production projects I have contributed to.</li>
                    {WORK_ITEMS.map((item) => (
                        <li className="flex lg:grid flex-col items-start list-row" key={item.id}>
                            <div>
                                <img className="rounded-box w-full sm:max-w-[200px]" src={`/${item.img}`}/></div>
                            <div>
                            <div>
                                {item.title}
                                <div className="text-xs uppercase font-semibold opacity-60">{item.role} ({item.period})</div>
                                <p className="list-col-wrap text-sm">
                                    {item.subtext}
                                </p>
                            </div>
                            </div>
                            <div className="text-xs flex flex-wrap gap-2 justify-start lg:justify-end items-center max-w-[500px]">
                                {item.tech.map((tech) => (
                                    <div key={tech.name} className={badgeClasses[tech.badge as keyof typeof badgeClasses]}>{tech.name}</div>
                                ))}
                            </div>
                            {
                                item.link && (
                                    <a className="btn btn-square btn-ghost" href={item.link} target="_blank">
                                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"/>
                                            <path d="M12 5l7 7-7 7"/>
                                        </svg>
                                    </a>
                                )
                            }  
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}