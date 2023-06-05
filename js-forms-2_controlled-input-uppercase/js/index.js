console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (e) => {
  const enteredText = e.target.value;
  const upperCaseText = enteredText.toUpperCase();
  e.target.value = upperCaseText;
});
