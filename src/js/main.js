import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

const toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".picto-animate", {
  rotation: 120,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    scrub: 1,
  },
});
