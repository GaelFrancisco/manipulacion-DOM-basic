//3
let nombre = prompt("ingresa tu nombre: ");
let apellido = prompt("ingresa tu apellido: ");
let usuario = prompt("ingresa tu usuario: ");
let edad = prompt("ingresa tu edad: ");
let correo = prompt("ingresa tu correo: ");
let dineAhorro = prompt("cuanto dinero tiene ahorrado: ");
let deuda = prompt("de cuanto es su deuda: ");
console.log(
  nombre +
    "\n" +
    apellido +
    "\n" +
    user +
    "\n" +
    edad +
    "\n" +
    correo +
    "\n" +
    dineAhorro +
    "\n" +
    deuda
);

if (edad >= 18) {
  console.log("es mayor de edad :)");
} else {
  console.log("no es mayor de edad :)");
}

let dineroReal = dineAhorro - deuda;
console.log("El dinero real es de + + ' ' "+ dineroReal);

//ejercicio 2 convertir el codigo a una funcion, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función
const name = "Juan David";
const lastname = "Castro Gallego";
const nickname = "juandc";

function nombreCompleto(name, lastname) {
  return name + ' ' + lastname
}

function presentacion(name, lastname, nickname) {
  const completeName = nombreCompleto(name, lastname);
  
  console.log(
    "Mi nombre es " +
      completeName +
      ", pero prefiero que me digas " +
      nickname +
      "."
  );
}

presentacion(`gael`, `francisco`, `galletas`);

//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion1 = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertPlus":
    console.log(
      "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    );
    break;
}

var tipoDeSuscripcion = "basic";

if (tipoDeSuscripcion == "free") {
  console.log("puedes tomar solo cursos gratis");
} else if (tipoDeSuscripcion == "basic") {
  console.log("puedes tomar casi todos los cursos durante un mes");
} else if (tipoDeSuscripcion == "expert") {
  console.log("puedes tomar todos los cursos durante todo un anio");
} else if (tipoDeSuscripcion == "expertplus") {
  console.log("tu alguien mas puede tomar los cursos durante un anio");
} else {
  console.log("usuario no registrado");
}

//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//while
var i = 0;

while (i < 5) {
  console.log("el valor es " + i);
  i++;
}
var i = 10;
while (i >= 2) {
  console.log("el valor es " + i);
  i--;
}

//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
let resCorrecta = false;

while (!resCorrecta) {
  let respuesta = prompt("cuanto es 2 + 2?");

  if (respuesta == 4) {
    console.log("felicidades");
    resCorrecta = true;
  } else {
    alert("incorrecta, intentar de nuevo");
  }
}

//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
var array = [];

while (array.length < 7) {
  var user = prompt("ingresa palabras o numeros");
  var newArrays = array.push(user);
}
function primerElemento(array) {
  console.log(array[0])
}

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var algo = [];//array que va a recibir los arrays

while (algo.length < 4) {//para que el usuario ingrese elementos al array
  var user = prompt("ingresa letras o numeros");
  var newAlgo = algo.push(user);
}

function imprime(algo) {//funcion que imprime el array 
  if (algo.length > 0) {
    console.log(algo.forEach(element => {
      console.log(element)
    }));
  } else {
    console.log("el array esta vacio");
  }
}
imprime(algo);
//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
const object = {
  name: "Gael",
  age: 20,
  nickname: "galletas",
};

function datos(object) {
  const array = Object.values(object)
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

datos(object);

//Bonus reduccion de condicionales
function conseguirTipoDeSuscripsion(tipoDeSuscripcion) {
  if (tipoDeSuscripcion == "free") {
    console.log("puedes tomar solo cursos gratis");
    return;
  } if (tipoDeSuscripcion == "basic") {
    console.log("puedes tomar casi todos los cursos durante un mes");
    return;
  } if (tipoDeSuscripcion == "expert") {
    console.log("puedes tomar todos los cursos durante todo un anio");
    return;
  } if (tipoDeSuscripcion == "expertplus") {
    console.log("tu alguien mas puede tomar los cursos durante un anio");
    return;
  } else {
    console.warn("usuario no registrado");
  }
}
conseguirTipoDeSuscripsion('free');

//☝🏼lo mismo pero con array u objetos
const tiposDeSuscripsiones = {
  free: 'puedes tomar solo cursos gratis',
  basic: 'puedes tomar casi todos los cursos durante un mes',
  expert: 'puedes tomar todos los cursos durante todo un anio',
  expertplus: 'tu alguien mas puede tomar los cursos durante un anio',
}

function conseguirTipoDeSuscripsion(tipoDeSuscripcion) {
  if (tiposDeSuscripsiones[tipoDeSuscripcion]) {
    console.log(tiposDeSuscripsiones[tipoDeSuscripcion])
    return;
  }
  console.log('este tipo de suscripsion no existe')
}