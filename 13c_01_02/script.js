"use strict";

import { inView, animate, scroll } from "https://cdn.skypack.dev/motion";

// DARKMODE
// find switch
const checkbox = document.querySelector("#switch");

// function to init check theme
document.addEventListener("DOMContentLoaded", checkTheme);

function checkTheme() {
  let theme = localStorage.getItem("data-theme");

  if (theme === "dark") {
    changeThemeToDark();
  } else {
    changeThemeToLight();
  }
}

// switch, if dark make light and the other way
checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});

// Set data Attribute to dark and save in localstorage
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
};

// Set data Attribute to light and save in localstorage
const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
};

// SCROLL ANIMATION
//extends scrollbar on scroll
scroll(animate(".progress", { scaleY: [0, 1] }));

// Fades the h2 in when its in view
inView(".highlight h2", (e) => {
  const controls = animate(e.target, { opacity: [0, 1] }, { duration: 2 }, { repeat: 0 });
});

// Fades the articles in when its in view
inView(".article", (e) => {
  const controls = animate(e.target, { opacity: [0, 1] }, { duration: 2 });
});
