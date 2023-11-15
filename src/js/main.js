import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".slider-track");

// l'animation GSAP permettant de scroller
let slider = gsap.to(container, {
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) -
    parseInt(window.getComputedStyle(container).marginLeft) -
    parseInt(window.getComputedStyle(container).marginRight) +
    "px",
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".scroll-horizontal",
    start: "top top",
    end: () => "+=" + container.clientWidth,
    // markers: true,
    scrub: true,
    pin: true,
  },
});

// le code suivant écoute le redimensionnement de la fenêtre et actualise le slider
window.addEventListener("resize", () => {
  let progress = slider.totalProgress();
  slider.progress(0);
  slider.invalidate();
  slider.totalProgress(progress);
});
