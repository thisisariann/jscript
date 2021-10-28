//CRUD en memoria RAM
//TodoList

const toDoList = ["estudiar js", "fallar", "learn"];

let app = document.getElementById("app");

print("app", toDoList);

function addTodo(newTodo) {
  toDoList.push(newTodo);
  print("app", toDoList);
  //añadir el array el nuevo todo
}

function print(element, list) {
  let app = document.getElementById(element);
  app.innerHTML = "";
  for (const item of toDoList) {
    app.innerHTML += `<li>${item} - delete</li>`;
  }
  //imprime una lista en un elemento
}

print("app", toDoList);

function deleteTodo(oldTodo) {
  toDoList.pop(oldTodo);
  print("app", toDoList);
}

function print(element, list) {
  let app = document.getElementById(element);
  app.innerHTML = "";
  for (const item of toDoList) {
    app.innerHTML += `<li>${item}</li>`;
  }
}
