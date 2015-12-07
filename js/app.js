require("../scss/app.scss");

const btn = document.querySelector(".nav__toggle-btn");
btn.onclick = function () {
  document
    .querySelector(".nav__list")
    .classList
    .toggle("nav__list--expanded");
};
