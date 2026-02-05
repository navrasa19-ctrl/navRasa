import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { scale: 1, y: 0, opacity: 1 },
        {
          scale: 0.9, 
          y: -30,
          opacity: 0.85,
          ease: "expo.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top+=120",
            end: "+=360",
            scrub: 0.7,
            anticipatePin: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const btn = btnRef.current;
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

  
  <section className="min-h-[75vh] md:min-h-[85vh] flex items-center justify-center text-center px-4">
    <div
      ref={heroRef}
      className="will-change-transform max-w-5xl mx-auto px-2 sm:px-6"
    >
      <h1
        className="
          text-white
          text-[clamp(2.2rem,8vw,6rem)]
          font-extralight
          font-poppins
          tracking-[-0.01em]
          leading-[1]
        "
      >
        We Build MVPs
      </h1>

      <h2
        className="
          text-white/85
          mt-2 sm:mt-3
          text-[clamp(1.3rem,4.5vw,3rem)]
          font-light
          tracking-[-0.02em]
        "
      >
        That Launch Startups.
      </h2>

      <p
        className="
          text-gray-400
          mt-4 sm:mt-6
          max-w-2xl
          mx-auto
          text-sm sm:text-base
          leading-relaxed
          font-body
        "
      >
        NavRasa IT Solutions partners with ambitious startups to design,
        develop, and deploy Minimum Viable Products — fast, scalable,
        and investor-ready.
      </p>

      <div className="mt-8 sm:mt-12 flex justify-center">
        <button
          ref={btnRef}
          className="
            relative
            px-10 sm:px-20
            py-4 sm:py-5
            rounded-sm
            bg-[#ef5da8]
            text-black
            text-base sm:text-lg
            font-medium
            tracking-wide
            overflow-hidden
            border border-[#ef5da8]
            transition-colors duration-500
            hover:bg-[#111]
            hover:text-[#ef5da8]
          "
        >
          <span className="relative z-10">Our Services</span>

          <span
            className="
              absolute inset-0
              bg-black/10
              opacity-0
              transition-opacity duration-500
              hover:opacity-100
            "
          />
        </button>
      </div>
    </div>
  </section>
);

};

export default Hero;
