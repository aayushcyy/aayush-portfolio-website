import { useEffect } from "react";
import { gsap } from "gsap";

const useHeroSectionAni = ({ navbarRef, boxRef, nameRef, professionRef }) => {
  useEffect(() => {
    const animation = gsap.context(() => {
      gsap.from(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.7,
      });
      gsap.from(boxRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 1.5,
      });
      gsap.from(nameRef.current, {
        y: 150,
        opacity: 0,
        duration: 1,
        delay: 0.7,
      });
      gsap.from(professionRef.current, {
        y: 150,
        opacity: 0,
        duration: 1,
        delay: 0.9,
      });
    });
    return () => animation.revert();
  }, [navbarRef]);
};

export default useHeroSectionAni;
