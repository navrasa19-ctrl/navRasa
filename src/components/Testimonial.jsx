import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import P1 from "../assets/LOGO PNG 2-01.png";
import CRID from "../assets/crid.png";
import Suntrech from "../assets/suntrech.png";

const testimonials = [
  {
    name: "Mr. Keshavendra Singh Raghav",
    role: "Founder, EzyFix",
    company: "EzyFix – Coupon-Selling App",
    feedback:
      "The app turned out fantastic! Smooth interface, vendor panel, real-time coupon tracking — they built exactly what we needed. Can't recommend them enough.",
    image: P1,
  },
  {
    name: "Mr. Harsh",
    role: "Founder, Richony",
    company: "Richony – E-commerce Website for Perfumes",
    feedback:
      "Our perfume brand needed elegance, speed, and trust — they delivered all three. The website looks stunning and works beautifully on mobile. Customers love it.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "CRID Innovations",
    role: "Business Website",
    company: "CRID Innovations",
    feedback:
      "They understood our brand instantly and built a clean, modern website that speaks to our audience. Everything's on point — layout, speed, and responsiveness.",
    image: CRID,
  },
  {
    name: "Mr. Suresh Kumar Yadav",
    role: "Suntech Power Corporation",
    company: "Suntech Power Corporation – Solar Website",
    feedback:
      "We finally have a website that brings us leads. They made it user-friendly, added service booking, and kept it SEO-ready. It's driving results.",
    image: Suntrech,
  },
];

export default function Testimonials() {
  const infiniteTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  const [isResetting, setIsResetting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(testimonials.length);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // ✅ REAL INDEX FOR DOTS (KEY FIX)
  const realIndex =
    ((activeIndex % testimonials.length) + testimonials.length) %
    testimonials.length;

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Infinite wrap
  useEffect(() => {
    const total = testimonials.length;

    if (activeIndex === total * 2) {
      setIsResetting(true);

      requestAnimationFrame(() => {
        setActiveIndex(total);
        requestAnimationFrame(() => setIsResetting(false));
      });
    }

    if (activeIndex === total - 1) {
      setIsResetting(true);

      requestAnimationFrame(() => {
        setActiveIndex(total * 2 - 1);
        requestAnimationFrame(() => setIsResetting(false));
      });
    }
  }, [activeIndex]);


  const goToNext = () => {
    setActiveIndex((prev) => prev + 1);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => prev - 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setActiveIndex(index + testimonials.length);
    setIsAutoPlaying(false);
  };

  // ✅ RESPONSIVE VALUES (LOGIC ONLY)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const translateX = isMobile ? 260 : 320;

  return (
    <section className="relative bg-[#111] py-20 px-6 md:px-12 overflow-hidden">
      {/* Smoky background card */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-3xl bg-white/5 blur-3xl opacity-40 pointer-events-none" />

      {/* Tag */}
      <div className="text-center mb-6 relative z-10">
        <span className="text-xs tracking-[0.35em] uppercase text-white/50 font-medium">
          Client Voices
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white relative z-10">
        What Our Clients Say?
      </h2>

      <p className="text-center text-white/40 mb-12 max-w-2xl mx-auto relative z-10">
        Don't just take our word for it - hear from our satisfied clients
      </p>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        <div className="relative h-[500px] md:h-[450px] flex items-center justify-center perspective-1000">
          {infiniteTestimonials.map((testimonial, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);

            const isActive = offset === 0;
            const isVisible = isMobile ? absOffset === 0 : absOffset <= 1;

            if (!isVisible) return null;

            return (
              <div
                key={index}
                className={`absolute cursor-pointer ${isResetting ? "transition-none" : "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  } ${isActive ? "z-30" : "z-20"}`}

                style={{
                  transform: `
    translateX(${offset * translateX}px)
    scale(${isActive ? 1.05 : 0.9})
    rotateY(${isMobile ? 0 : offset * -12}deg)
  `,
                  opacity: isActive ? 1 : 0.35,
                  filter: isActive ? "none" : "blur(1.5px)",
                }}

                onClick={() => !isActive && goToSlide(index)}
              >
                {/* CARD (UNCHANGED STYLING) */}
                <div className="relative rounded-2xl p-8 w-[340px] md:w-[480px] bg-white/7 backdrop-blur-2xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                  <div className="absolute top-0 left-0 right-0 h-24 rounded-t-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="absolute -top-3 -left-3 text-white/10">
                      <Quote className="w-16 h-16" />
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border border-white/30 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                      />
                      <div>
                        <h3 className="text-sm font-medium text-white tracking-tight">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-white/55 mt-1">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-white/35">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-white/65 font-light mb-8">
                      “{testimonial.feedback}”
                    </p>

                    <div className="h-px w-16 bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ✅ FIXED DOTS */}
        <div className="flex justify-center gap-3 mt-8 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === realIndex
                ? "w-10 h-[3px] bg-white/60"
                : "w-3 h-[3px] bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
