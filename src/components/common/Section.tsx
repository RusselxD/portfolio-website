import type { ReactNode } from "react";

interface SectionProps {
    idx: number;
    children: ReactNode;
}

export default function Section({ idx, children }: SectionProps) {
    return (
        <div
            className={`min-h-[100dvh] ${
                idx % 2 == 0
                    ? "bg-prim-light-bg dark:bg-prim-dark-bg"
                    : "bg-sec-light-bg dark:bg-sec-dark-bg"
            }`}
        >
            {children}
        </div>
    );
}
