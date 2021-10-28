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
