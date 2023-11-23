import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".slider-track");

// CODPEN PROF BASE
var tlTracker = gsap.timeline({
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

tlTracker.to(container, {
  x: "-16%",
  duration: 5,
});

tlTracker.to(container, { duration: 2 });

// ANIMATION SCROLL HORIZONTAL
var slider = tlTracker.to(container, {
  duration: 15,
  x: () =>
    -(container.scrollWidth - document.documentElement.clientWidth) -
    parseInt(window.getComputedStyle(container).marginLeft) -
    parseInt(window.getComputedStyle(container).marginRight) +
    "px",
});

// let tlTracker = gsap.timeline(container, {
//   x: () =>
//     -(container.scrollWidth - document.documentElement.clientWidth) -
//     parseInt(window.getComputedStyle(container).marginLeft) -
//     parseInt(window.getComputedStyle(container).marginRight) +
//     "px",

//   scrollTrigger: {
//     trigger: ".scroll-horizontal",
//     start: "top top",
//     end: () => "+=" + container.clientWidth,
//     // markers: true,
//     scrub: true,
//     pin: true,

//     onUpdate: function (self) {
//       document.querySelector(".walker").style.left = self.progress * 100 + "%";
//     },
//   },
// });

// tlTracker.to(".slider-track", {
//   x: "-33.3333%",
//   duration: 5,
//   ease: "sine.inOut",
// });

// tlTracker.to(".slider-track", {
//   duration: 1,
// });

// tlTracker.to(".slider-track", {
//   x: "-66.6666%",
//   duration: 5,
//   ease: "sine.inOut",
// });

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-horizontal",
    start: "top top",
    end: () => "+=" + container.clientWidth,
    // markers: true,
    scrub: true,
    // id: "boxes",
  },
});

// // narration 2-1
tl.from(
  ".dialogue2-1",
  {
    opacity: 0,
    duration: 0.2,
    ease: "none",
  },
  0
);

// narration2-2
tl.from(
  ".img-narrativ2-2",
  {
    opacity: 0,
    duration: 0.2,
    ease: "none",
  },
  0
);

// narration2-3
tl.from(
  ".dialogue2-3",
  {
    opacity: 0,
    duration: 0.2,
    ease: "none",
  },
  0
);

// narration3-1
tl.from(
  ".img-narrativ3-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  0.9
);

// narration3-2
tl.from(
  ".dialogue3-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  1.3
);

// narration3-3
tl.from(
  ".img-narrativ3-3",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  2
);
// narration4-1
tl.from(
  ".img-narrativ4-1",
  {
    opacity: 0,
    duration: 1.5,
    ease: "none",
  },
  9
);
// narration4-2
tl.from(
  ".img-narrativ4-2",
  {
    opacity: 1,
    duration: 0.5,
    ease: "none",
  },
  10
);

// narration5-1
tl.from(
  ".dialogue5-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  12
);

// narration5-2
tl.from(
  ".img-narrativ5-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  12.1
);

// narration5-3
tl.from(
  ".dialogue5-3",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  12.5
);

// narration5-4
tl.from(
  ".img-narrativ5-4",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  12.8
);

// narration5-5
tl.from(
  ".img-narrativ5-5",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  13.5
);

// narration6-1
tl.from(
  ".img-narrativ6-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  14.5
);

// narration6-2
tl.from(
  ".dialogue6-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  14.8
);

// narration6-2
tl.from(
  ".dialogue6-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  14.8
);

// narration7-1
tl.from(
  ".img-narrativ7-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  15.5
);

// narration7-2
tl.from(
  ".img-narrativ7-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  15.8
);

// narration7-3
tl.from(
  ".img-narrativ7-3",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  16.2
);

// narration7-4
tl.from(
  ".img-narrativ7-4",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  17.5
);

// narration8-1
tl.from(
  ".dialogue8-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  18.5
);

// narration8-2
tl.from(
  ".img-narrativ8-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  18.8
);

// narration8-3
tl.from(
  ".dialogue8-3",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  19.3
);

// narration9-1
tl.from(
  ".dialogue9-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  20.5
);

// narration9-2
tl.from(
  ".img-narrativ9-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  20.4
);

// narration9-3
tl.from(
  ".dialogue9-3",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  20.6
);

// narration10-1
tl.from(
  ".dialogue10-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  21.5
);

// narration10-2
tl.from(
  ".img-narrativ10-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  22
);

// narration10-3
tl.from(
  ".dialogue10-3",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  22.2
);

// narration11-1
tl.from(
  ".dialogue11-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  23.8
);

// narration11-2
tl.from(
  ".img-narrativ11-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  23.9
);

// narration11-3
tl.from(
  ".dialogue11-3",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  25
);

// narration12-1
tl.from(
  ".img-narrativ12-1",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  27.5
);

// narration12-2
tl.from(
  ".dialogue12-2",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  27
);

// narration11-3
tl.from(
  ".dialogue12-3",
  {
    opacity: 0,
    duration: 0.5,
    ease: "none",
  },
  28.3
);

// box-35
tl.to(
  ".dialogue13",
  {
    opacity: 0,
    duration: 1,
    ease: "none",
  },
  35
);

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
