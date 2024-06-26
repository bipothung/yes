gsap.from(".list li", {
  opacity: 0,
  duration: 0.8,
  y: -30,
  stagger: 0.8,
});

gsap.from(".capture", {
  duration: 1.5,
  scale: 0,
});

gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  duration: 10,
  scrollTrigger: {
    trigger: "#page2 ",
    scroll: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 3,
    pin: true,
  },
});
gsap.from("#contrast", {
  duration: 1,
  x: -400,
  scrollTrigger: {
    trigger: "#contrast",
    scroll: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
    // markers: true,
  },
});
gsap.from("#image1", {
  duration: 1,
  x: 400,
  scrollTrigger: {
    trigger: "#image1",
    scroll: "body",
    start: "top 100%",
    end: "top 0%",
    scrub: 3,
    // markers: true,
  },
});

gsap.from("#freeze", {
  scale: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#freeze",
    scroll: "body",
    start: "top 10%",
    scrub: 3,
    markers: true,
  },
});
