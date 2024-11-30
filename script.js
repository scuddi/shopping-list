const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
  const val = input.value;
  input.value = "";

  const item = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  item.appendChild(span);
  span.textContent = val;
  item.appendChild(deleteButton);
  deleteButton.textContent = "Delete";

  list.appendChild(item);

  deleteButton.addEventListener("click", () => {
    list.removeChild(item);
  });

  input.focus();

};

button.addEventListener("click", addItem);
