require("../scss/app.scss");

const btn = document.querySelector(".nav__toggle-btn");
btn.onclick = function() {
  document
    .querySelector(".nav__list")
    .classList
    .toggle("nav__list--expanded");
  document
    .body
    .classList
    .toggle("body--scrolling-disabled");
  document
    .querySelector(".nav__toggle-btn .burger-icon")
    .classList
    .toggle("burger-icon--open");
  window.scrollTo(0, 0);
};
