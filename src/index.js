import "./styles.css";
import createHomePage from "./home";

const headerBtns = document.querySelectorAll(".header-btn");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");
const about = document.querySelector(".about");
const content = document.getElementById("content");

home.addEventListener("click", () => {
  content.appendChild(createHomePage());
});

menu.addEventListener("click", () => {
  content.removeChild(content.firstChild);
});

contact.addEventListener("click", () => {
  content.removeChild(content.firstChild);
});

about.addEventListener("click", () => {
  content.removeChild(content.firstChild);
});


// Make the border fixed to current selected button
headerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    headerBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
  });
});