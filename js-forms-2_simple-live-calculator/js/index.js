console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');

function multiplyResult() {
  const firstValue = Number(firstInput.value);
  const secondValue = Number(secondInput.value);
  const multipliedValue = firstValue * secondValue;
  result.textContent = multipliedValue;
}
firstInput.addEventListener("input", multiplyResult);
secondInput.addEventListener("input", multiplyResult);
