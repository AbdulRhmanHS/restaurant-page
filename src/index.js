import "./styles.css";
import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const headerBtns = document.querySelectorAll(".header-btn");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");
const about = document.querySelector(".about");
const content = document.getElementById("content");

// Just for testing
const div = document.createElement("div");
div.textContent = "";

// Make the border fixed to current selected button
headerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    headerBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
  });
});

function showTab(btn, tab) {
  btn.addEventListener("click", () => {
    if (content.firstChild) {
      content.replaceChildren();
      content.appendChild(tab);
    }
  });
}

showTab(home, createHomePage());
showTab(menu, createMenuPage());
showTab(contact, createContactPage());
showTab(about, div);



// At start, show the home page
document.addEventListener("DOMContentLoaded", function() {
  home.click();
});