window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

gsap.registerPlugin(ScrollTrigger);

const tlhoriz = gsap.timeline();

tlhoriz
  .from(".section1 .hidetext", 5, { opacity: 0 })
  .from(".section1 h2", 7, { opacity: 0, scale: 3 })
  .from(".media", 5, { opacity: 0, scale: 3 })
  .from(".sponsor img", 5, { opacity: 0, scale: 3 })
  .from(".sponsor p", 5, { opacity: 0, y: -30 })
  .to(".wrapper", 5, { x: -window.innerWidth })
  /*.from(".section2 h2",5, {opacity:0, scale:3})*/
  .fromTo(".section2 .fotol", 5, { scale: 0 }, { scale: 1, rotate: -18 })
  .fromTo(".section2 .fotor", 5, { scale: 0 }, { scale: 1, rotate: 18 })
  .fromTo(
    ".section2 .fotoc",
    5,
    { scale: 3, opacity: 0 },
    { opacity: 1, scale: 1 }
  )

  .to(".wrapper", 5, { x: -window.innerWidth * 2 })
  /*.from(".section3 h2", 5, { opacity: 0, scale: 3 })*/
  .to(".wrapper", 5, { x: -window.innerWidth * 3 })
  .from(".section4 h2", 5, { opacity: 0, scale: 3 });

ScrollTrigger.create({
  animation: tlhoriz,
  trigger: ".wrapper",
  start: "center center",
  end: "+=5000",
  scrub: true,
  pin: true,
});

//home page
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "60%",
    scrub: 1,
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "100%",
    scrub: 1,
  },
});

tl.fromTo(
  ".sliding-text",
  { y: 0 },
  { y: -400 }
); /*no css tem transform trasnslate -50% por isso aqui tem de se alterar*/
tl2.fromTo(
  ".logo",
  { scale: 6 },
  { scale: 1, top: "1.5rem", left: "3rem", x: "50%", y: "50%" }
);

//home page

//antidote
gsap.from(".title", 2.4, {
  scale: 3,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 4,
});

gsap.to(".box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
  delay: 1,
});
gsap.from("img", 4, {
  scale: "2",
  ease: Expo.easeInOut,
  delay: 0,
});
gsap.to(".wrapper-img", 2.4, {
  width: "400",
  height: "500",
  ease: Expo.easeInOut,
  delay: 3.6,
});
gsap.from(".img", 0.4, {
  opacity: "0",
  ease: Expo.easeInOut,
  delay: 3.4,
});
gsap.to(".left", 2, {
  x: "-300",
  rotation: -10,
  ease: Expo.easeInOut,
  delay: 3.8,
});
gsap.to(".right", 2, {
  x: "300",
  rotation: 10,
  ease: Expo.easeInOut,
  delay: 3.8,
});
gsap.from(
  ".menu > div, .hero-container > div",
  2,
  {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 4.2,
  },
  0
);

//antidote

/*para a nav ficar colada */
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "200%" /*para a nav ficar colada */,
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});
/*para a nav ficar colada */

/* section 1*/

var myAnimation = new hoverEffect({
  parent: document.querySelector(".distortion"),
  intensity: 0.2,
  image1: "./img/wallpaper-designify.png",
  image2: "./img/wallpaper-designify1.png",
  displacementImage: "./img/hover2.png",
  imagesRatio: 500 / 300,
});

gsap.to(
  ".navbar div",
  1.5,
  {
    delay: 1.2,
    opacity: 1,
    ease: Expo.easeInOut,
  },
  0.5
);

gsap.to(".first", 1.5, {
  delay: 0.5,
  top: "-100%",
  ease: Expo.easeInOut,
});
gsap.to(".second", 1.5, {
  delay: 0.7,
  top: "-100%",
  ease: Expo.easeInOut,
});
gsap.to(".third", 1.5, {
  delay: 0.9,
  top: "-100%",
  ease: Expo.easeInOut,
});

/* section 1*/
/* section 2*/

gsap.to(".fotobc", {
  scrollTrigger: {
    trigger: ".fotobc",
    start: "200px 80%",
    end: "top 100px",
  },
  x: "+=280",
  opacity: 1,
  duration: 5,
  delay: 0.6,
});
/*gsap.to(".fotobr", {
  scrollTrigger: {
    trigger: ".fotobr",
    start: "200px 80%",
    end: "top 100px",
  },
  x: "+=280",
  opacity: 1,
  duration: 9,
  delay: 0.9,
});*/
gsap.to(".fotobl", {
  scrollTrigger: {
    trigger: ".fotobr",
    start: "200px 80%",
    end: "top 100px",
  },
  x: "+=280",
  opacity: 1,
  duration: 6,
  delay: 1.2,
});
/* section 2*/
/* section 3*/

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
/* section 3*/
/* section 4*/


/* section 4*/
