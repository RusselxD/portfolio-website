import type { ReactNode } from "react";

interface SectionProps {
    id: string;
    idx: number;
    children: ReactNode;
    variant?: "aurora" | "default";
}

export default function Section({
    id,
    idx,
    children,
    variant = "default",
}: SectionProps) {
    if (variant === "aurora") {
        return (
            <section id={id} className="relative overflow-hidden bg-surface">
                {/* Aurora blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#6558f5] opacity-[0.30] blur-[100px]"></div>
                    <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-[#8b6cf7] opacity-[0.25] blur-[100px]"></div>
                    <div className="absolute -bottom-32 left-1/4 w-[700px] h-[700px] rounded-full bg-[#34d399] opacity-[0.20] blur-[100px]"></div>
                </div>
                <div className="absolute inset-0 dot-pattern"></div>
                <div className="relative z-10">{children}</div>
            </section>
        );
    }

    return (
        <section
            id={id}
            className={
                idx % 2 !== 0
                    ? "bg-surface grids-lg"
                    : "bg-surface-container-low grids-md"
            }
        >
            {children}
        </section>
    );
}
