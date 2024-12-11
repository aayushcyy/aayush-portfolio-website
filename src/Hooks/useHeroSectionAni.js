import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
//, box, name, profession, link
const useHeroSectionAni = ({
  navbarRef,
  boxRef,
  nameRef,
  professionRef,
  linkRef,
}) => {
  useEffect(() => {
    const animation = gsap.context(() => {
      gsap.from(navbarRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.7,
        delay: 1,
      });
      gsap.from(boxRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });
    });
    return () => animation.revert();
  }, [navbarRef]);
};

export default useHeroSectionAni;
