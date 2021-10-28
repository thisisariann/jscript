function register(name, age) {
  if (typeof age != "number") {
    return false;
  }
  if (age < 18) {
    return false;
  }
  console.log("Puedes entrar");
}

register("ariann", 28);

/*if (age >= 18) {
   console.log("Puedes entrar");
   } else {
     return false;
   }
  }*/

var guess = "red";
var answer = null;

var answers = ["red", "green", "blue", "orange"];

var index = Math.floor(Math.random() * answers.length);

if (guess == answers[index]) {
  answer = "Yes! I was thinking " + answers[index];
} else {
  answer = "No. I was thinking " + answers[index];
}
alert(answer);

/////////////////////////////

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
