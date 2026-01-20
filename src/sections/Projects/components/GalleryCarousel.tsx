import { useEffect, useRef, useState } from "react";
import type { Project } from "../../../data/projects";
import { Container } from "./ProjectModal";

export default function GalleryCarousel({ project }: { project: Project }) {
    const [shouldMove, setShouldMove] = useState(false);

    const [isForward, setIsForward] = useState(true);
    const [speed, setSpeed] = useState(10);
    const [translateX, setTranslateX] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const lastImageRef = useRef<HTMLImageElement>(null);

    const adjustSpeed = (isHovering: boolean) => {
        if (isHovering) {
            setSpeed(20);
        } else {
            setSpeed(10);
        }
    };

    // Observe when the carousel is in viewport
    // Pauses the auto-scroll when not visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setShouldMove(true);
                    } else {
                        setShouldMove(false);
                    }
                });
            },
            {
                threshold: 0.3,
            },
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [project]);

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (!shouldMove) return;

            if (isForward) {
                setTranslateX((prev) => prev + 1);
            } else {
                setTranslateX((prev) => {
                    const newValue = prev - 1;
                    if (newValue <= 0) {
                        setIsForward(true);
                        return 0;
                    }
                    return newValue;
                });
            }
        }, speed);

        return () => clearInterval(interval);
    }, [isForward, shouldMove, speed]);

    // Observe when the last image is fully visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio === 1 && isForward) {
                        setIsForward(false);
                    }
                });
            },
            {
                threshold: 1,
                root: containerRef.current, // Changed from null to containerRef
            },
        );

        if (lastImageRef.current) {
            observer.observe(lastImageRef.current);
        }

        return () => observer.disconnect();
    }, [isForward]);

    return (
        <Container title="Gallery">
            <div
                ref={containerRef}
                className="overflow-x-auto hide-scrollbar"
                onMouseEnter={() => adjustSpeed(true)}
                onMouseLeave={() => adjustSpeed(false)}
                onTouchStart={() => adjustSpeed(true)}
                onTouchEnd={() => adjustSpeed(false)}
                onTouchCancel={() => adjustSpeed(false)}
            >
                <div
                    className="flex items-center gap-2 text-xs md:text-sm px-2 w-fit"
                    style={{ transform: `translateX(-${translateX}px)` }}
                >
                    {project.imgUrls.map((url, i) => {
                        return (
                            <img
                                src={url}
                                alt={`Gallery image ${i + 1}`}
                                key={i}
                                className="h-40 md:h-52 rounded-md"
                                ref={
                                    project.imgUrls.length - 1 === i
                                        ? lastImageRef
                                        : null
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </Container>
    );
}
