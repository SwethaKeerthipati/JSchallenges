console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  form.reset();
  form.elements.headline.focus();
});

function createListItem(data) {
  const listItem = document.createElement("li");
  const headline = document.createElement("h3");
  const task = document.createElement("p");

  headline.textContent = data.headline;
  task.textContent = data.task;

  listItem.append(headline, task);
  todoList.append(listItem);
}
