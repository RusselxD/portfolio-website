import idPhoto from "../../../assets/id_photo.png";
import { motion } from "framer-motion";

export default function ImageContainer() {
    return (
        <div className="w-24 md:w-28 relative">
            <img
                src={idPhoto}
                alt="ID Photo"
                className="object-cover rounded-lg z-20 relative"
            />
            <motion.div
                animate={{ rotate: -15 }}
                initial={{ rotate: -5 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.05,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute z-10 inset-0 bg-gradient-to-r from-[#686eff] to-[#00df9b] rounded-lg"
            ></motion.div>
        </div>
    );
}
