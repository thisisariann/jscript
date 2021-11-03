//Teniendo un input de texto y un botón: Desarrollar una función que al hacer click en él, escriba el contenido (value) del input como un título en el documento.

const title = ["Bon Dia", "Bona Tarda", "Bonanit"];
let input = document.getElementById("enter");

print("input", title);

function add() {
  for (const item of title) {
  }
}

function print(element, title) {
  let input = document.getElementById(element);
  input.innerHTML = "enter";
  for (const item of title) {
    input.innerHTML += `<h1>${item}</h1>`;
  }
}
