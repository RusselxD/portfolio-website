import javaPlv from "../assets/certificates/java_plv.png";
import pyPlv from "../assets/certificates/py_plv.png";
import pyUmak from "../assets/certificates/py_umak.png";
import javaCPlv from "../assets/certificates/javaC_plv.png";
import javaUmak from "../assets/certificates/java_umak.png";

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    img_path: string;
    gold_medal?: boolean;
    bronze_medal?: boolean;
    representative?: boolean;
}

export const certificates: Certification[] = [
    {
        title: "ITLympics 2024",
        issuer: "Pamantasan ng Lungsod ng Valenzuela",
        date: "April 2024",
        img_path: javaPlv,
        gold_medal: true,
    },
    {
        title: "ITLympics 2025",
        issuer: "Pamantasan ng Lungsod ng Valenzuela",
        date: "April 2025",
        img_path: pyPlv,
        gold_medal: true,
    },
    {
        title: "14th IT Skills Olympics",
        issuer: "University of Makati",
        date: "November 2025",
        img_path: pyUmak,
        bronze_medal: true,
    },
    {
        title: "13th IT Skills Olympics",
        issuer: "Pamantasan ng Lungsod ng Valenzuela",
        date: "November 2024",
        img_path: javaCPlv,
        representative: true,
    },
    {
        title: "13th IT Skills Olympics",
        issuer: "University of Makati",
        date: "November 2024",
        img_path: javaUmak,
        representative: true,
    },
];
