import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Strategy",
    text:
      "It all begins with a chat. Where we discuss your needs and goals. Once identified, I form a strategy to ensure these goals are met. This ensures we are on the same page, and allows for a clear scope and project cost.",
  },
  {
    num: "02",
    title: "Design",
    text:
      "Designing begins with the aforementioned goals in mind. Whether it's to maximise conversions, create an online store, or to complement your brand's unique identity – you are kept in the loop the entire way to ensure you get the website of your dreams.",
  },
  {
    num: "03",
    title: "Development",
    text:
      "Next is to breathe life into the designs of your new website using modern development tools focused on performance, SEO, and scalability.",
  },
  {
    num: "04",
    title: "Client Training",
    text:
      "Time is money. Luckily, you don't need any prior website experience to maintain and update your website, so you can focus on the work you love knowing your online presence is in great hands.",
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
