interface SectionHeaderProps {
    title: string;
    subTitle?: string;
}

export default function SectionHeader({ title, subTitle }: SectionHeaderProps) {
    return (
        <div className="text-center flex flex-col gap-5">
            <h1 className="font-extrabold text-5xl dark:text-white">{title}</h1>
            {subTitle && (
                <p className="text-gray-800 dark:text-gray-400">{subTitle}</p>
            )}
        </div>
    );
}
