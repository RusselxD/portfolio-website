import { Icon } from "@iconify/react";
import { useState } from "react";
import resume from "../../../assets/resume.pdf";
import { motion } from "framer-motion";

const ContactItem = ({
  icon,
  label,
  value,
  onClick,
  index,
}: {
  icon: string;
  label: string;
  value: string;
  onClick: () => void;
  index: number;
}) => (
  <motion.button
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
    onClick={onClick}
    className="glass-panel rounded-[0.75rem] p-6 flex items-center gap-5 w-full group text-left transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(74,64,224,0.12)]"
  >
    <div className="w-12 h-12 min-w-[3rem] rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary/10 transition-colors">
      <Icon
        icon={icon}
        className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors"
      />
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">
        {label}
      </p>
      <p className="font-semibold text-on-surface">{value}</p>
    </div>
  </motion.button>
);

export default function ContactsContainer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("russelcabigquez8@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {}
  };

  const handleDownload = async () => {
    try {
      // Using a blob URL makes the requested filename more consistent across browsers.
      const response = await fetch(resume);
      if (!response.ok) {
        throw new Error("Unable to download resume");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Russel_Cabigquez_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (_) {
      // Fallback keeps the resume accessible even if download APIs are blocked.
      window.open(resume, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ContactItem
        icon="mdi:email-outline"
        label={copied ? "Copied!" : "Email"}
        value="russelcabigquez8@gmail.com"
        onClick={handleCopy}
        index={0}
      />
      <ContactItem
        icon="akar-icons:github-fill"
        label="GitHub"
        value="@RusselxD"
        onClick={() => window.open("https://github.com/RusselxD", "_blank")}
        index={1}
      />
      <ContactItem
        icon="ic:baseline-facebook"
        label="Facebook"
        value="Russel Cabigquez"
        onClick={() =>
          window.open("https://www.facebook.com/russel.cbgqz", "_blank")
        }
        index={2}
      />
      <ContactItem
        icon="material-symbols:download"
        label="Resume"
        value="Download CV"
        onClick={handleDownload}
        index={3}
      />
    </div>
  );
}
