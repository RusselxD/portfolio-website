import { Icon } from "@iconify/react";
import { useState, type ReactNode } from "react";
import resume from "../../../assets/resume.pdf";

interface ContactCardProps {
    icon: string;
    title: string;
    detail: string;
    children: ReactNode;
}

const ViewProfileLink = ({ url }: { url: string }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
        >
            <Icon icon="streamline-sharp:link-share-2-remix" />
            <span>View Profile</span>
        </a>
    );
};

const ContactCard = ({ icon, title, detail, children }: ContactCardProps) => {
    return (
        <div className="custom-container bg-gray-100 flex flex-col items-center gap-2 py-5 rounded-xl text-[0.8rem] md:text-sm w-48 md:w-52 overflow-hidden">
            <div className="rounded-lg p-3 bg-slate-200 dark:bg-gray-800">
                <Icon icon={icon} className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-base">{title}</h3>
            <p className="sec-text mb-1 text-ellipsis max-w-[80%] overflow-hidden whitespace-nowrap">
                {detail}
            </p>
            {children}
        </div>
    );
};

const EmailCard = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("russelcabigquez8@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch (e) {
            // fallback or error handling
        }
    };

    return (
        <ContactCard
            icon="formkit:email"
            title="Email"
            detail="russelcabigquez8@gmail.com"
        >
            <button onClick={() => handleCopy()} className="contact-btn">
                {copied ? (
                    <Icon icon="mingcute:check-fill" />
                ) : (
                    <Icon icon="tabler:copy" />
                )}

                <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
        </ContactCard>
    );
};

const ResumeCard = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Russel_Cabigquez_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <ContactCard
            icon="akar-icons:file"
            title="Download CV"
            detail="Download PDF"
        >
            <button onClick={() => handleDownload()} className="contact-btn">
                <Icon icon="material-symbols:download" className="w-5 h-5" />
                <span>Download CV</span>
            </button>
        </ContactCard>
    );
};

export default function ContactsContainer() {
    return (
        <div className="flex items-center flex-wrap gap-3 md:gap-5 justify-center px-2">
            <EmailCard />
            <ContactCard
                icon="akar-icons:github-fill"
                title="GitHub"
                detail="@RusselxD"
            >
                <ViewProfileLink url="https://github.com/RusselxD" />
            </ContactCard>
            <ContactCard
                icon="ic:baseline-facebook"
                title="Facebook"
                detail="Russel Cabigquez"
            >
                <ViewProfileLink url="https://www.facebook.com/russel.cbgqz" />
            </ContactCard>
            <ResumeCard />
        </div>
    );
}
