import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScroll from "../pages/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Idea Validation",
    text:
      "Market research and feasibility analysis to ensure your concept has strong market potential.",
  },
  {
    num: "02",
    title: "Prototype",
    text:
      "Interactive mockups and user journey mapping to visualize the final product experience.",
  },
  {
    num: "03",
    title: "MVP Development",
    text:
      "Building core features with clean, scalable code that can evolve with your business needs.",
  },
  {
    num: "04",
    title: "Iterations",
    text:
      "User feedback integration and feature refinements based on real market data and usage patterns.",
  },
  {
    num: "05",
    title: "Scaling",
    text:
      "Infrastructure optimization and feature expansion to support rapid user growth and business scaling.",
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 65%",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about"
      ref={sectionRef}
      className="relative bg-[#111] text-white py-24 sm:py-32 lg:py-40"
    >
      {/* <SmoothScroll /> */}
      <div
        className="
        max-w-5xl mx-auto px-4 sm:px-6
        grid grid-cols-1 md:grid-cols-2
        gap-12 md:gap-24
        mb-24 md:mb-40
      "
      >
        <h2
          className="
          text-[clamp(2.4rem,7vw,4.5rem)]
          font-extralight
          tracking-tight
          select-none
        "
        >
          The Process
        </h2>

        <p
          className="
          text-gray-400
          text-sm
          leading-relaxed
          max-w-sm
          font-heading
          select-none
        "
        >
          Behind every project is a carefully built strategy which helps
          streamline the design & development process, no matter what the task.
          The process involves 4 simple steps.
        </p>
      </div>

      <div
        className="
        max-w-4xl mx-auto px-4 sm:px-6
        grid grid-cols-1 md:grid-cols-2
        gap-x-16 lg:gap-x-32
        gap-y-24 sm:gap-y-32 lg:gap-y-40
      "
      >
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="relative"
          >
            <div
              className="
              absolute
              -top-16 sm:-top-20 lg:-top-28
              -left-2 sm:-left-4 lg:-left-8
              text-[4rem] sm:text-[5.5rem] lg:text-[7rem]
              font-semibold
              text-white/10
              select-none
            "
            >
              {step.num}
            </div>

            <h3
              className="
              text-xl sm:text-2xl
              font-semibold
              font-heading
              tracking-wide
              mb-4 sm:mb-6
              select-none
            "
            >
              {step.title}
            </h3>

            <p
              className="
              text-gray-400
              text-base sm:text-lg
              font-body
              leading-relaxed
              max-w-sm
              select-none
            "
            >
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

};

export default Process;
