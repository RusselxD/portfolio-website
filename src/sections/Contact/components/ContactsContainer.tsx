import { Icon } from "@iconify/react";
import { useState, type ReactNode } from "react";

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
            className="py-3 px-6 flex items-center gap-2 bg-gray-200 dark:bg-gray-800 rounded-lg "
        >
            <Icon icon="streamline-sharp:link-share-2-remix" />
            <span>View Profile</span>
        </a>
    );
};

const ContactCard = ({ icon, title, detail, children }: ContactCardProps) => {
    return (
        <div className="custom-container flex flex-col items-center gap-2 py-5 rounded-xl text-[0.8rem] md:text-sm w-48 md:w-52 overflow-hidden">
            <div className="rounded-lg p-3 bg-gray-200 dark:bg-gray-800">
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

export default function ContactsContainer() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("russelcabigquez8@gmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            // fallback or error handling
        }
    };

    return (
        <div className="flex items-center flex-wrap gap-3 md:gap-5 justify-center px-2">
            <ContactCard
                icon="formkit:email"
                title="Email"
                detail="russelcabigquez8@gmail.com"
            >
                <button
                    onClick={() => handleCopy()}
                    className="py-3 px-6 flex items-center gap-2 bg-gray-200 dark:bg-gray-800 rounded-lg "
                >
                    <Icon icon="tabler:copy" />

                    <span>{copied ? "Copied!" : "Copy Email"}</span>
                </button>
            </ContactCard>
            <ContactCard
                icon="akar-icons:github-fill"
                title="GitHub"
                detail="@RusselxD"
            >
                <ViewProfileLink url="https://github.com/RusselxD" />
            </ContactCard>
            <ContactCard
                icon="logos:facebook"
                title="Facebook"
                detail="Russel Cabigquez"
            >
                <ViewProfileLink url="https://www.facebook.com/russel.cbgqz" />
            </ContactCard>
        </div>
    );
}
