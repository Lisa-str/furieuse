import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".scroll-horizontal",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    // markers: true,
  },
  x: "-75%",
  ease: "sine.inOut",
});
