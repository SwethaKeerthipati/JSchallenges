console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkmodebutton = document.querySelector('[data-js="dark-mode-button"]');
const lightmodebutton = document.querySelector('[data-js="light-mode-button"]');
const togglebutton = document.querySelector('[data-js="toggle-button"]');

darkmodebutton.addEventListener("click", () => {
  console.log("you are in dark mode");
  bodyElement.classList.add("dark");
});

lightmodebutton.addEventListener("click", () => {
  console.log("you are in light mode");
  bodyElement.classList.remove("dark");
});

togglebutton.addEventListener("click", () => {
  console.log("toggle");
  bodyElement.classList.toggle("dark");
});
