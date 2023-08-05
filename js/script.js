"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header_menu"),
          btn = document.querySelector(".hamburger");

    btn.addEventListener("click", e => {
        menu.classList.toggle("header_menu-active");
        btn.classList.toggle("hamburger-active");
    });
});