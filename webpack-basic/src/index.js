import "./css/styles.css";
import "./images/sprite.svg";
import menu from "./menu.json";
import menuTemplate from "./templates/menu.handlebars";

const refs = {
  ulRef: document.querySelector('[class="menu js-menu"]'),
  themeRef: document.querySelector("#theme-switch-toggle"),
  bodyRef: document.querySelector("body"),
};

const theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

refs.themeRef.addEventListener("change", (event) => {
  refs.bodyRef.classList.toggle(theme.LIGHT);
  refs.bodyRef.classList.toggle(theme.DARK);
  localStorage.setItem("checkTheme", event.target.checked);
});

function createMarkup(items) {
  let markup = menuTemplate(items);
  refs.ulRef.insertAdjacentHTML("beforeend", markup);
}

function init() {
  if (localStorage.getItem("checkTheme") === "true") {
    refs.bodyRef.classList.remove(theme.LIGHT);
    refs.bodyRef.classList.add(theme.DARK);
    refs.themeRef.checked = "true";
  }
}

window.onload = init();

createMarkup(menu);
