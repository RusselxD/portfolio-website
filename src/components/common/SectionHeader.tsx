import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    subTitle?: string;
}

export default function SectionHeader({ title, subTitle }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center flex flex-col gap-2 xl:gap-5 mb-9 lg:mb-10"
        >
            <h1 className="font-black text-3xl md:text-4xl xl:text-5xl">{title}</h1>
            {subTitle && (
                <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base">{subTitle}</p>
            )}
        </motion.div>
    );
}
