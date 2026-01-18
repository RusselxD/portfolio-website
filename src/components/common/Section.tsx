import type { ReactNode } from "react";

interface SectionProps {
    id: string;
    idx: number;
    children: ReactNode;
}

export default function Section({ id, idx, children }: SectionProps) {
    return (
        <section
            id={id}
            className={` 
                ${
                    idx % 2 !== 0
                        ? "bg-prim-light-bg dark:bg-prim-dark-bg grids-lg"
                        : "bg-sec-light-bg dark:bg-sec-dark-bg grids-md"
                }`}
        >
            {children}
        </section>
    );
}
