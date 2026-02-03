import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Keshavendra Singh Raghav",
    role: "Founder, EzyFix",
    company: "EzyFix – Coupon-Selling App",
    feedback:
      "The app turned out fantastic! Smooth interface, vendor panel, real-time coupon tracking — they built exactly what we needed. Can't recommend them enough.",
    image: "/LOGO PNG 2-01.png",
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
    image: "/crid.png",
  },
  {
    name: "Mr. Suresh Kumar Yadav",
    role: "Suntech Power Corporation",
    company: "Suntech Power Corporation – Solar Website",
    feedback:
      "We finally have a website that brings us leads. They made it user-friendly, added service booking, and kept it SEO-ready. It's driving results.",
    image: "/suntrech.png",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to rounded-3xl py-16 px-6 md:px-12 overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements 
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 dark:bg-pink-600 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>*/}

      {/* Tag */}
      <div className="text-center mb-4 relative z-10">
        <span className="inline-flex items-center gap-2 bg-purple-500/20 dark:bg-purple-400/20 text-purple-600 dark:text-purple-400 text-sm font-medium px-4 py-1 rounded-full transition-colors duration-300">
          <Quote className="w-4 h-4" />
          Testimonials
        </span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white transition-colors duration-300 relative z-10">
        What Our Clients Say?
      </h2>
      
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
        Don't just take our word for it - hear from our satisfied clients
      </p>

      {/* Carousel Container */}
      <div className="relative max-w-6xl mt-[-4vh] mx-auto">
        <div className="relative h-[500px] md:h-[450px] flex items-center justify-center perspective-1000">
          {testimonials.map((testimonial, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            
            // Calculate positioning and scaling
            const isActive = offset === 0;
            const isVisible = absOffset <= 2;
            
            if (!isVisible) return null;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                  isActive ? 'z-30' : 'z-10'
                }`}
                style={{
                  transform: `
                    translateX(${offset * 320}px)
                    scale(${isActive ? 1 : 0.85 - absOffset * 0.1})
                    rotateY(${offset * -15}deg)
                  `,
                  opacity: isActive ? 1 : 0.4 - absOffset * 0.2,
                  filter: isActive ? 'none' : 'blur(2px)',
                }}
                onClick={() => !isActive && goToSlide(index)}
              >
                {/* Card with Glow Effect */}
                <div className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-[350px] md:w-[400px] overflow-hidden transition-all duration-700 ${
                  isActive ? 'shadow-purple-500/50 dark:shadow-purple-900/50 ring-2 ring-purple-400 dark:ring-purple-600' : ''
                }`}>
                  
                  {/* Animated gradient glow for active card */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 animate-gradient"></div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl blur opacity-20 animate-pulse"></div>
                    </>
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="absolute -top-2 -left-2 text-purple-500 dark:text-purple-400 opacity-20">
                      <Quote className="w-16 h-16" />
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center gap-4 mb-6 relative">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-500/20"
                        />
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Feedback */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      "{testimonial.feedback}"
                    </p>

                    {/* Decorative Bottom Line */}
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>

                  {/* Shimmer effect on active card */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-white dark:bg-gray-800 hover:bg-purple-500 dark:hover:bg-purple-600 text-gray-800 dark:text-white hover:text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 group-hover:animate-pulse" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-white dark:bg-gray-800 hover:bg-purple-500 dark:hover:bg-purple-600 text-gray-800 dark:text-white hover:text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 group-hover:animate-pulse" />
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-purple-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}