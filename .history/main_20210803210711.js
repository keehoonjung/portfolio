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

// scroll into menu name
const navbatMenu = document.querySelector(".navbar__menu");
navbatMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoViews(link);
});

// scroll contact button
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", (event) => {
  scrollIntoViews("#contact");
});

function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// Transparent home
const home = document.getElementById("home");
document.addEventListener("scroll", () => {
  const homeOpacity = window.scrollY / 600;
  home.style.opacity = `${homeOpacity}`;
});
