import { RiGraduationCapLine } from "react-icons/ri";

export default function EducationalBackground() {
    return (
        <div className="rounded-lg flex gap-4 custom-container p-4 xl:p-5">
            <div className="rounded-md p-2 xl:p-3 bg-secondary/20 w-fit h-fit text-secondary">
                <RiGraduationCapLine className="w-5 h-5 xl:w-7 xl:h-7" />
            </div>
            <div>
                <h2 className="font-semibold md:text-lg">
                    Bachelor of Science in Information Technology
                </h2>
                <p className="text-[0.800rem] md:text-sm sec-text">
                    Pamantasan ng Lungsod ng Valenzuela
                </p>
            </div>
        </div>
    );
}
