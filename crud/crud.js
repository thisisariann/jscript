//CRUD en memoria RAM
//COUNTRIES

//VARIABLES GLOBALES
const register = document.getElementById("register");
const countriesList = document.getElementById("countriesList");
let arrayCountries = [];

//FUNCIONES

const CreateCountry = (name) => {
  let country = {
    pais: name,
    estado: false,
  };
  arrayCountries.push(country);

  return country;
};

const saveData = () => {
  localStorage.setItem("pais", JSON.stringify(arrayCountries));
};
const ReadCountryList = () => {
  countriesList.innerHTML = "";
  arrayCountries = JSON.parse(localStorage.getItem("pais"));

  if (arrayCountries === null) {
    arrayCountries = [];
  } else {
    arrayCountries.forEach((element) => {
      countriesList.innerHTML += ``;
    });
  }
};
//EVENTLISTENER

register.addEventListener("submit", (e) => {
  e.preventDefault();
  let countriesLista = document.getElementById("country").value;

  CreateCountry(countriesLista);
  saveData();

  register.reset();
});

document.addEventListener("DOMContentLoaded", ReadCountryList);
/*
const countries = [
  "Ecuador",
  "Argelia",
  "España",
  "Francia",
  "Italia",
  "Suiza",
  "Portugal",
  "Inglaterra",
  "Noruega",
];

let app = document.getElementById("app");

function add(newCountry) {
  countries.push(newCountry);
  print("app", countries);
}

function print(element, list) {
  let app = getElementById(element);
  app.innerHTML = "";
  for (const item of countries) {
    app.innerHTML += `<li>${item} - delete</li>`;
  }
}
//TodoList
*/
/*const toDoList = ["estudiar js", "fallar", "learn"];

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
*/
