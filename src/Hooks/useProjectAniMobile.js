import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useProjectAniMobile = ({ childMobile, containerMobile }) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        childMobile.current,
        {
          y: 600,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.2,
          opacity: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: containerMobile.current,
            pin: containerMobile.current,
            scrub: 2,
            start: "top top",
            end: "bottom top",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [childMobile, containerMobile]);
};

export default useProjectAniMobile;
