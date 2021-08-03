"use strict";

// Make navbar transparenrt what it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

const navbatMenu = document.querySelector(".navbar__menu");
navbatMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
});

// const menuBtn = document.querySelector(".navbar__menu__item");
// const skills = document.querySelector("#skills").offsetTop;
// menuBtn.addEventListener("click", () => {
//   window.scrollTo({ top: skills - navbarHeight, behavior: "smooth" });
// });
