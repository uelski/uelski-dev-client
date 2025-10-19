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

import ItemsList from "./ItemsList";

export default function Work() {
    return (
        <section id="work" className="py-10 bg-base-100">
            <h2 className="text-4xl font-bold text-center pb-2">Work Experience</h2>
            <div className="grid lg:grid-cols-[280px,1fr] gap-8 items-start">
                <ItemsList items={WORK_ITEMS} text="Production projects I have contributed to." theme="light" />
            </div>
        </section>
    );
}