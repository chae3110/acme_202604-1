import { renderHeader } from "./module/header.js";
import { renderFooter } from "./module/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  if (document.querySelector(".testimonial")) {
    new Swiper(".testimonial", {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: ".testimonial .swiper-button-next",
        prevEl: ".testimonial .swiper-button-prev",
      },
    });
  }
  if (document.querySelector(".portfolio")) {
    new Swiper(".portfolio", {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: ".portfolio .swiper-button-next",
        prevEl: ".portfolio .swiper-button-prev",
      },
      pagination: {
        el: ".portfolio .swiper-pagination",
        clickable: true,
      },
    });
  }
});
const header = document.querySelector("body > header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
const questions = document.querySelectorAll(".qnalist details");
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    e.preventDefault();
    let isOpen = question.hasAttribute("open");
    questions.forEach((q) => q.removeAttribute("open"));
    if (!isOpen) {
      question.setAttribute("open", "");
    }
  });
});
