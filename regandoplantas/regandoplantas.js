//lista de dias de la semana
//una funcion que me avise que los miercoles y viernes debo regarlas
//imprimir por consola los dias que se riega y los dias que no
let semana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
//POR UN LADO TENEMOS ESTE SCOPE CON "DAY" COMO VARIABLE
function seRieganHoy(day) {
  if (day == "miercoles" || day == "viernes") {
    return true;
  }
  return false;
}
//X OTRO LADO TENEMOS ESTE OTRO SCOPE
for (let day of semana) {
  if (seRieganHoy(day)) console.log("hoy es " + day + " y se riega");
  else console.log("hoy es " + day + " no se riega");
}

const numeros = [1, 2, 5];
numeros[2] = 9;
console.log(numeros);
