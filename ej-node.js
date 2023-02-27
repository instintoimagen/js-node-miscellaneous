console.log("- - - Inicio Programa 'Borrar.js' - - -");
console.log();

const arreglo = [
  [25, 36, 37, 28, -9],
  [7, 89, 74, 32, 77],
  [5, 25, 125, 357, -99],
];
console.log(arreglo.length);
console.log(arreglo[0].length);
function imprimir() {
  for (let f = 0; f < arreglo.length; f++) {
    for (let c = 0; c < arreglo[0].length; c++) {
      console.log(arreglo[f][c] + " - ");
    }
    console.log("---fila---");
  }
}
//imprimir();
//arreglo[0][0] = 777;
//arreglo[2][4] = 777;
//imprimir();
//console.log(arreglo);
//console.log(arreglo[1]);

const sergioOrtegaDev = {
  pronouns: "He" | "Him",
  code: ["JavaScript", "HTML", "CSS", "Java"],
  askMeAbout: ["React dev", "Web dev", "Web app dev", "Front end"],
  technologies: {
    frontEnd: ["React.js", "Bootstrap"],
    backEnd: ["Node.js", "Java", "MySQL"],
    others: ["Git", "GitHub"],
  },
  softSkills: {
    ComunicaciónEfectiva: true,
    HabilidadAnalítica: true,
  },
};

function contratarmePara() {
  if (sergioOrtegaDev.softSkills.ComunicaciónEfectiva) {
    console.log(
      "Contratemos a este Desarrollador, es excelente y sabe todo esto: "
    );
    sergioOrtegaDev.technologies.frontEnd.forEach((element) => {
      console.log(element);
    });
  }
}

function varTrue(variable) {
  switch (variable) {
    case true:
      console.log("'a' es true");
      break;
    case null:
      console.log("'a' es true");
      break;
    case undefined:
      console.log("'a' es undefined");
      break;
    case false:
      console.log("'a' es false");
      break;

    default:
      switch (typeof variable) {
        case "number":
          console.log("'a' es número");
          break;
        case "string":
          console.log("'a' es String");
          break;
        case "boolean":
          console.log("'a' es Boolean");
          break;
        case "bigint":
          console.log("'a' es BigInt");

          break;
        case "function":
          console.log("'a' es una función");

          break;
        case "object":
          console.log("'a' es un Objeto");

          break;
        case "symbol":
          console.log("'a' es un Symbol");

          break;

        default:
          console.log("No es ninguna de las anteriores, fue por el 'default' ");
          break;

          break;
      }
  }
  console.log("'a' es: " + variable);
}

let a = 9;
varTrue(a);
a = new Date();
a = function unaFuncion() {
  console.log("nada");
};
a = "☺";
a = "chupala";
a = 4;
a = true;

a = [
  7,
  undefined,
  "cadenas de texto",
  [
    { nombre: "sergio", profesion: "desarrollador" },
    41,
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ],
  true,
];
console.log(typeof a);
console.log(a);
console.log();
const objeto = [
  { nombre: "sergio", profesion: "desarrollador" },
  41,
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
console.log("Imprimir otro objeto declarado con 'const': ");
console.log(objeto);
console.log("Modificar 'const' e imprimirlo nuevamente: ");
objeto[0] = { nombre: "sergio", profesion: "desarrollador", edad: 41 };
objeto.splice(
  1,
  2,
  "primero agregado",
  25,
  56,
  "otro elemento agregado",
  85,
  true,
  "último fin!"
);
console.log(objeto);

//let sergioArray = JSON.stringify(sergioOrtegaDev);
//console.log(typeof sergioArray);

//let caObj = { nombre: "Sergio", profesion: "Developer" };
//console.log(caObj);
//let objCa = JSON.parse(sergioArray);
//console.log(objCa);
console.log();
console.log("= = Programa Finalizado = =");
