const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

const toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
