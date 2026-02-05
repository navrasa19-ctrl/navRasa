import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,        
      smoothWheel: true,
      smoothTouch: true,
      syncTouch: true,   
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
