import ImageContainer from "./ImageContainer";
import { Icon } from "@iconify/react";

export default function MainDetails() {
    return (
        <div className="glass-panel p-8 md:p-8 rounded-[0.6rem]">
            <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-on-surface tracking-tighter leading-[1.15] mb-6">
                Building{" "}
                <span className="text-primary">Thoughtful</span> &amp;{" "}
                <span className="text-emerald-500">Scalable</span> Software.
            </h1>

            <p className="text-base text-on-surface-variant leading-7 mb-6">
                Focused on creating thoughtful, well-structured software, with
                attention to flow, reliability, and how each part fits into the
                larger system. Architecture is planned before features, ensuring
                solutions remain stable, clear, and scalable as they grow.
            </p>

            <ul className="text-sm text-on-surface-variant leading-7 list-disc list-inside mb-8">
                <li>Breaks complex problems into logical, manageable steps</li>
                <li>Prioritizes clean data flow and consistent system behavior</li>
                <li>Designs with maintainability and long-term growth in mind</li>
                <li>Approaches development with structure and long-term clarity</li>
                <li>Values intuitive user experience supported by solid architecture</li>
            </ul>

            <div className="flex items-center gap-4">
                <ImageContainer />
                <div>
                    <h4 className="font-bold text-on-surface">
                        Russel Cabigquez
                    </h4>
                    <div className="flex items-center gap-1 text-sm text-on-surface-variant">
                        <Icon icon="ion:location-outline" />
                        <span>Metro Manila, Philippines</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
