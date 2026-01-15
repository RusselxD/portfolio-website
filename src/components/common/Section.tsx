import type { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

interface SectionProps {
    id: string;
    idx: number;

    title?: string;
    subTitle?: string;

    children: ReactNode;
}

export default function Section({
    id,
    idx,
    title,
    subTitle,
    children,
}: SectionProps) {
    return (
        <section
            id={id}
            className={`p-10 pt-24 min-h-[100dvh] ${
                idx % 2 === 0
                    ? "bg-prim-light-bg dark:bg-prim-dark-bg square-grids"
                    : "bg-sec-light-bg dark:bg-sec-dark-bg"
            }`}
        >
            {title && <SectionHeader title={title} subTitle={subTitle} />}
            {children}
        </section>
    );
}
