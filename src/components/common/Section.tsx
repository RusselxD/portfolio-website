import type { ReactNode } from "react";
import { motion } from "framer-motion";

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
                {/* Aurora blobs (Now with Framer Motion) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <motion.div 
                        animate={{ x: [0, 50, 0, -50, 0], y: [0, -50, 0, 50, 0] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#6558f5] opacity-[0.25] blur-[120px]"
                    />
                    <motion.div 
                        animate={{ x: [0, -50, 0, 50, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-[#8b6cf7] opacity-[0.20] blur-[120px]"
                    />
                    <motion.div 
                        animate={{ y: [0, 50, 0, -50, 0], scale: [1, 0.8, 1] }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-32 left-1/4 w-[700px] h-[700px] rounded-full bg-[#34d399] opacity-[0.20] blur-[120px]"
                    />
                </div>
              
                <div className="absolute inset-0 dot-pattern pointer-events-none"></div>

                {/* Animated Glowing Beam Line at top of section */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent z-10">
                    <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#34d399] to-transparent shadow-[0_0_30px_#34d399]"
                    />
                </div>

                <div className="relative z-10">{children}</div>
            </section>
        );
    }

    return (
        <section
            id={id}
            className={
                "relative overflow-hidden " + (idx % 2 !== 0
                    ? "bg-surface grids-lg"
                    : "bg-surface-container-low grids-md")
            }
        >
            {/* Animated Glowing Beam Line at top of section */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container/30 to-transparent z-10">
                <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#34d399] to-transparent shadow-[0_0_12px_#34d399]"
                />
            </div>
            
            {/* Subtler Animated blobs for standard sections */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
               <motion.div 
                    animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#9795ff] opacity-[0.15] blur-[100px]"
                />
            </div>

            <div className="relative z-10">{children}</div>
        </section>
    );
}
