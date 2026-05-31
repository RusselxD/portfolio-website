import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import type { Project } from "../../../data/projects";
import { Container } from "./ProjectModal";

export default function GalleryCarousel({ project }: { project: Project }) {
    const [shouldMove, setShouldMove] = useState(false);
    const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

    const [isForward, setIsForward] = useState(true);
    const [speed, setSpeed] = useState(10);
    const [translateX, setTranslateX] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const firstImageRef = useRef<HTMLImageElement>(null);
    const lastImageRef = useRef<HTMLImageElement>(null);
    const selectedMobileImageRef = useRef<HTMLImageElement>(null);

    const closeLightbox = () => setSelectedImageIdx(null);

    const showPreviousImage = () => {
        setSelectedImageIdx((current) => {
            if (current === null) return current;
            return (current - 1 + project.imgUrls.length) % project.imgUrls.length;
        });
    };

    const showNextImage = () => {
        setSelectedImageIdx((current) => {
            if (current === null) return current;
            return (current + 1) % project.imgUrls.length;
        });
    };

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
                threshold: 0.1, // show when 10% of the carousel is visible
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
                root: containerRef.current,
            },
        );

        if (lastImageRef.current) {
            observer.observe(lastImageRef.current);
        }

        return () => observer.disconnect();
    }, [isForward]);

    // Observe when the first image is fully visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio === 1 && !isForward) {
                        setIsForward(true);
                    }
                });
            },
            {
                threshold: 1,
                root: containerRef.current,
            },
        );

        if (firstImageRef.current) {
            observer.observe(firstImageRef.current);
        }

        return () => observer.disconnect();
    }, [isForward]);

    useEffect(() => {
        if (selectedImageIdx === null) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeLightbox();
            if (event.key === "ArrowLeft") showPreviousImage();
            if (event.key === "ArrowRight") showNextImage();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImageIdx, project.imgUrls.length]);

    useEffect(() => {
        if (selectedImageIdx === null) return;

        requestAnimationFrame(() => {
            selectedMobileImageRef.current?.scrollIntoView({
                block: "center",
            });
        });
    }, [selectedImageIdx]);

    const lightbox =
        selectedImageIdx !== null
            ? createPortal(
                  <div
                      className="fixed inset-0 z-[10050] bg-black/90 backdrop-blur-sm overflow-y-auto md:overflow-hidden md:flex md:items-center md:justify-center p-3 md:p-6"
                      onClick={closeLightbox}
                  >
                      <button
                          onClick={(event) => {
                              event.stopPropagation();
                              closeLightbox();
                          }}
                          className="fixed top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-[10060]"
                          aria-label="Close gallery image"
                      >
                          <Icon icon="line-md:close" width={22} height={22} />
                      </button>

                      {project.imgUrls.length > 1 && (
                          <button
                              onClick={(event) => {
                                  event.stopPropagation();
                                  showPreviousImage();
                              }}
                              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white hidden md:flex items-center justify-center hover:bg-white/20 transition-colors"
                              aria-label="Previous gallery image"
                          >
                              <Icon
                                  icon="line-md:chevron-left"
                                  width={24}
                                  height={24}
                              />
                          </button>
                      )}

                      <div
                          className="md:hidden w-full max-w-3xl mx-auto py-16 space-y-4"
                          onClick={(event) => event.stopPropagation()}
                      >
                          {project.imgUrls.map((url, i) => (
                              <img
                                  src={url}
                                  alt={`${project.title} screenshot ${i + 1}`}
                                  className="w-full rounded-md shadow-2xl"
                                  key={url}
                                  ref={
                                      i === selectedImageIdx
                                          ? selectedMobileImageRef
                                          : null
                                  }
                              />
                          ))}
                      </div>

                      <div
                          className="hidden md:flex w-full h-full flex-col items-center justify-center gap-4"
                          onClick={(event) => event.stopPropagation()}
                      >
                          <img
                              src={project.imgUrls[selectedImageIdx]}
                              alt={`${project.title} screenshot ${selectedImageIdx + 1}`}
                              className="max-w-full max-h-[82dvh] object-contain rounded-md shadow-2xl"
                          />
                          <span className="text-white/70 text-sm">
                              {selectedImageIdx + 1} / {project.imgUrls.length}
                          </span>
                      </div>

                      {project.imgUrls.length > 1 && (
                          <button
                              onClick={(event) => {
                                  event.stopPropagation();
                                  showNextImage();
                              }}
                              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 text-white hidden md:flex items-center justify-center hover:bg-white/20 transition-colors"
                              aria-label="Next gallery image"
                          >
                              <Icon
                                  icon="line-md:chevron-right"
                                  width={24}
                                  height={24}
                              />
                          </button>
                      )}
                  </div>,
                  document.body,
              )
            : null;

    return (
        <>
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
                                <button
                                    type="button"
                                    onClick={() => setSelectedImageIdx(i)}
                                    className="shrink-0 overflow-hidden rounded-md bg-surface-container-low"
                                    key={url}
                                >
                                    <img
                                        src={url}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        className="h-40 md:h-52 rounded-md"
                                        ref={
                                            i === 0
                                                ? firstImageRef
                                                : project.imgUrls.length - 1 === i
                                                  ? lastImageRef
                                                  : null
                                        }
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </Container>
            {lightbox}
        </>
    );
}
