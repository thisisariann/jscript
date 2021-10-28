class Calculadora {
  total = 0;
  sum(value) {
    this.total += value;
  }
  substract(value) {
    this.total += value;
  }
}

//ESCENARIO - GIVEN
const calculator = new Calculadora();

//ACCIÓN - WHEN
calculator.sum(2);
calculator.substract(4);

//COMPROBACIÓN - THEN
let espero = -2;
if (calculator.total == -2) console.log("el test is ok");
else console.log(`if its not ok ${espero} que sea su propio ${total}`);
