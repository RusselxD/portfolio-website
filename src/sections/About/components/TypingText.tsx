import { useEffect, useState } from "react";

const getRandomDelay = (): number => {
    return Math.floor(Math.random() * 150) + 50; // Random delay between 50ms to 200ms
};

export default function TypingText({
    showText,
    startTyping = true,
}: {
    showText: string;
    startTyping?: boolean;
}) {
    const [text, setText] = useState("\0");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!startTyping) return;

        const interval = setInterval(() => {
            if (index === 0) {
                setText("");
            }

            if (index < showText.length) {
                setText((prev) => prev + showText.charAt(index));
                setIndex((prev) => prev + 1);
            } else {
                clearInterval(interval);
            }
        }, getRandomDelay());

        return () => clearInterval(interval);
    }, [showText, index, startTyping]);

    return <h2 className="font-semibold mt-2">{text}</h2>;
}
