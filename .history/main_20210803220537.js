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

// Transparent home
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  const homeOpacity = 1 - window.scrollY / homeHeight;
  home.style.opacity = `${homeOpacity}`;
});

// Up arrow button
const arrowBtn = document.querySelector(".uparrow-btn");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
});
arrowBtn.addEventListener("click", () => {
  scrollIntoViews("#home");
});

function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// project filterling
const workBtn = document.querySelector(".work__categories");
const projects = document.querySelectorAll(".project");
workBtn.addEventListener("click", (event) => {
  const target = event.target;
  const project = target.dataset.project;
  console.log(projects[0]);
});
