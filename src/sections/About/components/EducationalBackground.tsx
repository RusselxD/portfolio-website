import { RiGraduationCapLine } from "react-icons/ri";

export default function EducationalBackground() {
    return (
        <div className="rounded-lg flex gap-4 container p-5">
            <div className="rounded-md p-3 bg-secondary/20 w-fit text-secondary">
                <RiGraduationCapLine className="w-7 h-7" />
            </div>
            <div>
                <h2 className="font-semibold text-lg">
                    Bachelor of Science in Information Technology
                </h2>
                <p className="text-sm sec-text">
                    Pamantasan ng Lungsod ng Valenzuela
                </p>
            </div>
        </div>
    );
}
