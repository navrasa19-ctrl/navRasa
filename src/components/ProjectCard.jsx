import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRightCircle } from "lucide-react";

const ProjectCard = ({ title, more = [], tags = [], image }) => {
    const cardRef = useRef(null);
    const overlayRef = useRef(null);
    const imageRef = useRef(null);
    const metaRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const tl = gsap.timeline({ paused: true });

        tl.to(overlayRef.current, {
            opacity: 0.55,
            duration: 1,
            ease: "expo.out",
        })
            .to(
                imageRef.current,
                {
                    opacity: 0.35,
                    scale: 1.05,
                    duration: 1,
                    ease: "expo.out",
                },
                0
            )
            .to(
                metaRef.current,
                {
                    opacity: 0,
                    y: 16,
                    duration: 0.8,
                    ease: "power3.out",
                },
                0
            );

        const enter = () => tl.play();
        const leave = () => tl.reverse();

        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);

        return () => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mouseleave", leave);
        };
    }, []);

    useEffect(() => {
        const btn = buttonRef.current;
        if (!btn) return;

        const move = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(btn, {
                x: x * 0.25,
                y: y * 0.25,
                duration: 0.6,
                ease: "power3.out",
            });
        };

        const reset = () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        };

        btn.addEventListener("mousemove", move);
        btn.addEventListener("mouseleave", reset);

        return () => {
            btn.removeEventListener("mousemove", move);
            btn.removeEventListener("mouseleave", reset);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative h-full overflow-hidden border border-gray-500 bg-[#111]"
        >
            <img
                ref={imageRef}
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-100"
            />

            <div
                ref={overlayRef}
                className="absolute inset-0 bg-[#111]"
                style={{ opacity: 1 }}
            />

            <div
                className="
        relative z-10 h-full
        flex flex-col justify-between
        p-6 sm:p-8 lg:p-10
      "
            >
                <h2
                    className="
          text-white
          text-lg sm:text-xl lg:text-2xl
          font-medium tracking-wider
          py-12 sm:py-20 lg:py-24
          pl-0 sm:pl-3 lg:pl-5
        "
                >
                    {title}
                </h2>

                <div ref={metaRef} className="space-y-2">
                    {more.length > 0 && (
                        <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-white/70">
                            {more.map((item, i) => (
                                <span key={i} className="flex items-center gap-2">
                                    {item}
                                    {i < more.length - 1 && <span>|</span>}
                                </span>
                            ))}
                        </div>
                    )}

                    {tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm text-white/70">
                            {tags.map((tag, i) => (
                                <span key={i} className="flex items-center gap-2">
                                    {tag}
                                    {i < tags.length - 1 && <span>|</span>}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <a
                    ref={buttonRef}
                    href="#"
                    className="
          w-fit flex items-center gap-4
          border border-white
          px-6 sm:px-10 lg:px-14
          py-2
          rounded-full
          text-xs sm:text-sm text-white
          transition-colors
          hover:border-white
          mt-6
          self-start
        "
                >
                    View project
                    <ArrowRightCircle size={18} />
                </a>
            </div>
        </div>
    );

};

export default ProjectCard;
