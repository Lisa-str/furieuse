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
  scrollTrigger: {
    trigger: ".scroll-horizontal",
    start: "top top",
    end: () => "+=" + container.clientWidth,
    // markers: true,
    scrub: true,
    pin: true,

    onUpdate: function (self) {
      document.querySelector(".walker").style.left = self.progress * 100 + "%";
    },
  },
});

// le code suivant écoute le redimensionnement de la fenêtre et actualise le slider
window.addEventListener("resize", () => {
  let progress = slider.totalProgress();
  slider.progress(0);
  slider.invalidate();
  slider.totalProgress(progress);
});

// picture fade
var picutreRight = document.querySelectorAll(".section-danger-img-right");

picutreRight.forEach((picture) => {
  gsap.from(picture, {
    scrollTrigger: {
      trigger: picture,
    },
    opacity: 0,
    x: 300,
    duration: 1.5,
  });
});

var picutreLeft = document.querySelectorAll(".section-danger-img-left");

picutreLeft.forEach((picture) => {
  gsap.from(picture, {
    scrollTrigger: {
      trigger: picture,
    },
    opacity: 0,
    x: -300,
    duration: 1.5,
  });
});

var picutreBottom = document.querySelectorAll(".picture-bottom");

picutreBottom.forEach((picture) => {
  gsap.from(picture, {
    scrollTrigger: {
      trigger: picture,
    },
    opacity: 0,

    y: 150,
    duration: 1.7,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sectionHeaderInfo = document.querySelector(".section-header-info");

  gsap.from(sectionHeaderInfo, {
    opacity: 0,
    duration: 2.3,
  });
});
