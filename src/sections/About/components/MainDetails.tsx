import ImageContainer from "./ImageContainer";
import { MdOutlineLocationOn } from "react-icons/md";

export default function MainDetails() {
    return (
        <div className="flex gap-5 md:gap-8">
            <ImageContainer />
            <div className="py-2 text-xs md:text-sm gap-1 flex flex-col">
                <h2 className="font-semibold text-xl md:text-2xl">Russel Cabigquez</h2>
                <div className="flex items-center gap-1 font-light text-gray-800 dark:text-gray-300">
                    <MdOutlineLocationOn />
                    <p >Metro Manila, Philippines</p>
                </div>
                <p className="mt-1 font-medium">Fullstack Developer / Programmer</p>
            </div>
        </div>
    );
}
