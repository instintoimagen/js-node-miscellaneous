console.log(
  "- - - Inicio Programa 'Ejercicios de lógica en Javascript-Node' - - -"
);

/* // Ej 01
function contarCaracteres(string) {
  console.log(" - Ej 01 - "); 
  if (!string) {
    console.log("Error: debe ingresar algún argumento");
    return;
  }
  if (typeof string !== "string") {
    console.log("Error: El argumento debe ser un string");
    return;
  }

  console.log(string.length);
}

contarCaracteres(["hola"]);
 */

/* // EJ 02
function cortarTexto(string, n) {
  console.log(" - Ej 02 - "); 
  if (!string) {
    console.log("☺ Error: Debe ingresar un string como primer argumento");
    return;
  }
  if (typeof string !== "string") {
    console.log("☺ Error: El primer argumento debe ser un String");
    return;
  }
  if (!n) {
    console.log("☺ Error: Debe ingresar un número como segundo argumento");
    return;
  }
  if (typeof n !== "number") {
    if (typeof parseInt(n) == "number") {
      console.log(string.slice(0, parseInt(n)));
    } else {
      console.log("☺ Error: El segundo argumento debe ser un número");
    }
    return;
  }

  console.log(string.slice(0, n));
}
cortarTexto("hola", "3");
 */

/* // EJ 03
function separarTexto(string, separador) {
  console.log(" - Ej 03 - ");
  if (separador === "") {
    let arr = string.split();
    console.log(arr);
    return;
  }
  if (!string || !separador) {
    console.error(
      "☺ Error: Debe ingresar un string como primer y segundo argumento"
    );
    return;
  }
  if (typeof string !== "string" || typeof separador !== "string") {
    console.error("☺ Error: Los dos argumentos deben ser String");
    return;
  }

  let arr = string.split(separador);
  console.log(arr);
  arr.forEach((element) => {
    console.log(element);
  });
}

separarTexto("hola que tal como estás", " ");
 */

/* // Ej 04
function repetirTexto(string, n = undefined) {
  console.log(" - Ej 04 - ");
  console.log();
  if (!string)
    return console.log(
      "☺ Error: Debe ingresar un string como primer argumento"
    );

  if (typeof string !== "string")
    return console.log("☺ Error: El primer argumento debe ser un String");

  if (!n || typeof n !== "number")
    return console.log(
      "☺ Error: Debe ingresar un número como segundo argumento"
    );

  if (Math.sign(n) === -1)
    return console.log("☺ Error: El número no puede ser negativo");

  for (i = 0; i < n; i++) console.log(`${string}, ${i}`);
}

repetirTexto("Hola mundirijillo", 4);
repetirTexto();
repetirTexto(1, 1);
repetirTexto("hola", "hola");
repetirTexto("elooo", null);
repetirTexto("elooo");
repetirTexto("elooo", -5);
 */

console.log();
console.log("= = Programa Finalizado = =");
