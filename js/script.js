"use strict";

//Mobile Nav toggle
const btnMobileNav = document.querySelector(".btn-mobile-nav");
// click event
btnMobileNav.addEventListener("click", function () {
  btnMobileNav.classList.toggle("nav-open");
});
