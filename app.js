var input = document.getElementById("input");
var todo = document.querySelector("ul");
var listOf = [];

document.querySelector("button")
button.addEventListener("click", () => {
  listOf.push(input.value);
  console.log(listOf);
  input.value = "";
  showList();
});

function showList() {
  todo.innerHTML = listOf.map((item, i) => `
    <li>
      ${item}
      <a onclick="editItem(${i})">Edit</a>
      <a onclick="deleteItem(${i})">&times; | </a>
    </li>`
  ).join('');
}

function deleteItem(k) {
  listOf.splice(k, 1);
  showList();
}

function editItem(j) {
var Value = prompt("Make the changes you want");
  listOf.splice(j, 1, Value);
  showList();
}

