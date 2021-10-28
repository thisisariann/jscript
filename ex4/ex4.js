const listaCompra = ["huevos", "chocolate", "leche", "aguacate"];

function capricho(sweet) {
  if (sweet == "chocolate") {
    return true;
  }
  return false;
}

for (const sweet of listaCompra) {
  if (capricho(sweet))
    console.log("me voy a zampar un " + sweet + " despues de comer");
  else console.log("hoy no hay postre");
}

//import { deleteTodo } from "/ex3.js";
