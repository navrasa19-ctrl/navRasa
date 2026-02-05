import { useEffect, useRef } from "react";
import Favicon from "../assets/favicon.ico";
import gsap from "gsap";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
import {
  Calendar,
  Send,
  Phone,
  Mail,
  ArrowRightCircle,
} from "lucide-react";
const Footer = () => {
  const cardsRef = useRef([]);
  const [openModal, setOpenModal] = useState(false);
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
    {
      icon: Calendar, title: "Book a consultation", action: () => setOpenModal(true),
    },
    {
      icon: Send, title: "Contact us via whatsapp", link: "https://wa.me/918696256355?text=Hi%20I%20am%20interested", target: "_blank"
    },
    { icon: Phone, title: "Have a chat over the phone", link: "tel:+91 6377067867" },
    { icon: Mail, title: "Shoot me an email", link: "mailto:info@navrasaitsolutions.com" },
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

              const Wrapper = item.action ? "button" : "a";

              return (
                <Wrapper
                  key={i}
                  {...(item.link && { href: item.link })}
                  {...(item.target && { target: item.target })}
                  onClick={item.action}
                  ref={(el) => (cardsRef.current[i] = el)}
                  className="group relative border border-black/50 p-6 sm:p-8 flex items-end w-full text-left cursor-pointer"
                >
                  <div className="w-full">
                    <Icon className="w-5 h-5 mb-4 opacity-70" />

                    <div className="relative h-[26px] overflow-hidden">
                      <h3 className="absolute bottom-0 text-sm sm:text-lg transition-all group-hover:-translate-y-full">
                        {item.title}
                      </h3>

                      <h3 className="absolute bottom-[-100%] text-sm sm:text-lg transition-all group-hover:bottom-0">
                        Let&apos;s go!
                      </h3>
                    </div>
                  </div>

                  <ArrowRightCircle className="footer-arrow w-4 h-4" />
                </Wrapper>
              );
            })}

          </div>
        </div>

        <div className="text-center py-6 border-t border-black/10 text-xs opacity-60">
          ©2026 Your Company. All Rights Reserved.
        </div>
      </div>
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />

    </footer>
  );
};

export default Footer;
