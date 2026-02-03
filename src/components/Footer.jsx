import { useEffect, useRef } from "react";
import Favicon from "../assets/favicon.ico";
import gsap from "gsap";
import {
  Calendar,
  Send,
  Phone,
  Mail,
  ArrowRightCircle,
} from "lucide-react";

const Footer = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const arrow = card.querySelector(".footer-arrow");

      const enter = () =>
        gsap.to(arrow, { x: 8, duration: 0.6, ease: "power3.out" });

      const leave = () =>
        gsap.to(arrow, { x: 0, duration: 0.6, ease: "power3.out" });

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  const items = [
    { icon: Calendar, title: "Book a consultation", link: "/contact" },
    { icon: Send, title: "Send me a message", link: "#" },
    { icon: Phone, title: "Have a chat over the phone", link: "tel:+911234567890" },
    { icon: Mail, title: "Shoot me an email", link: "mailto:hello@example.com" },
  ];

  return (
    <footer id="contact" className="bg-gray-200 text-black">
      <div className="w-full mx-auto border border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col justify-between py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-11 border border-black">
            <div className="pl-0 sm:pl-8 lg:pl-16">
              <a href="/" className="inline-block mb-10 sm:mb-16">
                <img src={Favicon} alt="Logo" className="w-16 sm:w-20 h-auto" />
              </a>

              <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
                Book a chat now,
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  it&apos;s free!
                </span>
              </h2>
            </div>

            <nav className="mt-16 sm:mt-24 lg:mt-52 flex flex-col gap-4 sm:gap-6 text-base sm:text-lg pl-0 sm:pl-8 lg:pl-16">
              <a href="/" className="font-semibold">Home</a>
              <a href="/contact">Contact</a>
              <a href="/work">My Work</a>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-black/50">
            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <a
                  key={i}
                  href={item.link}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="group relative border border-black/50 p-6 sm:p-8 flex items-end overflow-hidden transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  <div className="w-full">
                    <Icon className="w-5 h-5 mb-4 sm:mb-6 opacity-70" />

                    <div className="relative h-[26px] overflow-hidden">
                      <h3 className="absolute bottom-0 text-sm sm:text-lg font-light transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                        {item.title}
                      </h3>

                      <h3 className="absolute bottom-[-100%] text-sm sm:text-lg font-light transition-all duration-500 group-hover:bottom-0">
                        Let&apos;s go!
                      </h3>
                    </div>
                  </div>

                  <ArrowRightCircle className="footer-arrow w-4 h-4 shrink-0 transition-transform duration-500 group-hover:translate-x-2" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="text-center py-6 border-t border-black/10 text-xs opacity-60">
          ©2026 Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
