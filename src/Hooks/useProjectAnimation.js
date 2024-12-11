import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useProjectAnimation = ({ child, container }) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        child,
        {
          y: 400,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.2,
          opacity: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: container,
            pin: container,
            scrub: 2,
            start: "top top",
            end: "bottom top",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);
};

export default useProjectAnimation;
