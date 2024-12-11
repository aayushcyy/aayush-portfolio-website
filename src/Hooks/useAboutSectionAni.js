import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAboutSectionAni = ({
  containerRef,
  boxRef,
  headingRef,
  subHeadRef,
}) => {
  useLayoutEffect(() => {
    const animaton = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scroller: "body",
          start: "top 50%", // Start animation when section hits 50% of the viewport
          end: "bottom 10%", // Animation can run till the bottom
          toggleActions: "play reverse play reverse", // Trigger once
        },
      });

      // Animation for box scaling and fading in
      timeline.from(boxRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Animation for heading appearance
      timeline.from(
        headingRef.current,
        {
          x: -50, // Slight horizontal slide-in
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5" // Overlapping timing with box animation
      );

      // Animation for subheading fade-in
      timeline.from(
        subHeadRef.current,
        {
          opacity: 0,
          y: 20, // Slight upward motion
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3" // Slight overlap with heading animation
      );
    });

    return () => animaton.revert(); // Cleanup on unmount
  }, [containerRef, boxRef, headingRef, subHeadRef]);
};

export default useAboutSectionAni;
