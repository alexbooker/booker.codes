require("normalize.css/normalize.css");
require("./app.scss");

const btn = document.getElementById("burger-btn");
btn.onclick = function () {
  document
    .querySelector(".nav")
    .classList
    .toggle("nav--expanded");
};
