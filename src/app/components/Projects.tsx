import { PROJECT_ITEMS } from "@/data/project_items";
import ItemsList from "./ItemsList";

export default function Project() {
    return (
        <section id="projects" className="py-10">
            <h2 className="text-4xl font-bold text-center pb-2">Projects</h2>
            <div className="grid lg:grid-cols-[280px,1fr] gap-8 items-start">
                <ItemsList items={PROJECT_ITEMS} text="Personal projects I have worked on." theme="dark" />
            </div>
        </section>
    );
}