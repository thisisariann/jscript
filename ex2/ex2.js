/*2. Desarrollar una función que escriba un Título h1 en el documento HTML.*/

function print() {
  let location = document.getElementById("title");
  location.innerHTML += `<h1 id="title">Good Morning!</h1>`;
}
print();
console.log(location);
