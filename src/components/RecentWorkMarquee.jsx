import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecentWorkMarquee = () => {
  const containerRef = useRef(null);
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(topRowRef.current, {
        xPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(bottomRowRef.current, {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-b border-t border-white/10 "
    >
      <div className="overflow-hidden whitespace-nowrap">
        <h2
          ref={topRowRef}
          className="font-heading text-[clamp(2rem,3vw,4rem)]
                     font-normal tracking-[-0.03em]
                     text-white flex gap-4"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <span>Recent Projects</span>
              <span className="text-pink-500">·</span>
              <span className="text-white/30">Recent Projects</span>
              <span className="text-pink-500">·</span>
            </span>
          ))}
        </h2>
      </div>

      <div className="overflow-hidden whitespace-nowrap mt-6">
        <h2
          ref={bottomRowRef}
          className="font-heading text-[clamp(2rem,3vw,4rem)]
                     font-normal tracking-[-0.03em]
                     text-white flex gap-4"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <span>Recent Projects</span>
              <span className="text-pink-500">·</span>
              <span className="text-white/30">Recent Projects</span>
              <span className="text-pink-500">·</span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default RecentWorkMarquee;
