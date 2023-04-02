/* 1. Realizar un programa que dado 2 números imprima por consola si el primer numero es
mayor que el segundo. */

/* let numero1 = 4;
let numero2 = 2;

function grande(numero1, numero2) {
  if (numero1 > numero2) {
    return ("El numero 1 es mas grande");
  } else {
    return ("El numero 2 es mas grande");
  }
}

console.log(grande(numero1, numero2))
 */

/* 2. Realizar un programa que dado 2 números imprima por consola si los numeros son
iguales o si son diferentes. */

/* let numero1 = 4;
let numero2 = 2;

function iguales(numero1, numero2) {
  if (numero1 === numero2) {
    return ("Son iguales");
  } else {
    return ("Son diferentes");
  }
}

console.log(iguales(numero1, numero2)); */

/* 3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
es el mas grande o si son iguales. */

/* let numero1 = 4;
let numero2 = 2;

function grandeOMayor(numero1, numero2) {
  if (numero1 > numero2) {
    return ("Numero 1 es Mayor a Numero 2");
  } else if (numero1 === numero2) {
    return ("Numero 1 es igual que Numero 2");
  } else {
    return ("Numero 2 es Mayor a Numero 1");
  }
}


console.log(grandeOMayor(numero1, numero2)); */

/* 4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas
chico. */

/* let numero1 = 4;
let numero2 = 2;
let numero3 = 3;

function masChico(numero1, numero2, numero3) {
  if (numero1 > numero2 && numero1 > numero3) {
    return `El primer numero ${numero1} es el mas grande`;
  } else if (numero2 > numero1 && numero2 > numero3) {
    return `El segundo numero ${numero2} es el mas grande`;
  } else {
    return `El tercer numero ${numero3} es el mas grande`;
  }
}

console.log(masChico(numero1, numero2, numero3)); */

/* 5. Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad. */

/* const  nelson = {
  nombre : "Nelson",
  edad : 18,
  altura : 180
};

const emilia = {
  nombre : "Emilia",
  edad : 20,
  altura : 170
};

function fun1(nelson, emilia) {
  if (nelson.altura > emilia.altura) {
    return (`${nelson.nombre} es más alto que ${emilia.nombre}`);
  }else{
    return (`${emilia.nombre} es más alta que ${nelson.nombre}`);
  }
}

function fun2(nelson, emilia) {
  if (nelson.edad > emilia.edad) {
    return (`${nelson.nombre} es más viejo que ${emilia.nombre}`);
  }else{
    return (`${emilia.nombre} es más vieja que ${nelson.nombre}`);
  }
}

console.log(fun1(nelson,emilia), fun2(nelson,emilia)); */

/* 6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
mínimo. */

/* let persona = {
  nombre : prompt(`Ingresa tu nombre`),
  apellido: prompt(`Ingresa tu apellido`),
  edad : prompt(`Ingresa tu edad`),
  altura : prompt(`Ingresa tu altura (En numeros con referencia a cm)`),
  vista : prompt(`Ingresa tu nivel de vista (del 1 al 10)`)
}

function aptoManejar(persona){
  if (persona.edad >= 18 && persona.altura > 150 && persona.vista > 7){
    return (`Felicidades Sr./Sra. ${persona.nombre} ${persona.apellido}. Usted es apto para conducir.`)
  }else{
    return (`Lo sentimos Sr./Sra. ${persona.nombre} ${persona.apellido}. Usted no es apto/a para conducir.`)
  }
}

console.log (aptoManejar(persona)) */

/* 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip
o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu
mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida. */

/* let nombre = prompt("¿Cual es su nombre?");
let pase = prompt("Ingrese su tipo de pase (vip o normal):");
let tieneEntrada =
  prompt("¿Posee entrada? (si o no):") == "si" || "s" || "true";

if (nombre == "Nelson" || pase == "vip") {
  console.log("¡Bienvenido, " + nombre + "!");
  if (tieneEntrada) {
    let usarEntrada =
      prompt("¿Desea utilizar su entrada? (si o no):") == "si" || "s" || "true";
    if (usarEntrada) {
      console.log("¡Bienvenido, " + nombre + "!");
    } else {
      console.log("¡Adios, " + nombre + "!");
    }
  } else {
    console.log("¡Bienvenido, " + nombre + "!");
  }
} else {
  let comprarEntrada =
    prompt("¿Desea comprar una entrada? (si o no):") == "si" || "s" || "true";
  if (comprarEntrada) {
    let dineroDisponible = prompt(
      "Ingrese la cantidad de dinero que tiene disponible:"
    );
    if (dineroDisponible >= 1000) {
      console.log("¡Venta de entrada exitosa! ¡Bienvenido, " + nombre + "!");
    } else {
      console.log(
        "Lo siento, no tienes suficiente dinero para comprar una entrada."
      );
    }
  } else {
    console.log("¡Adios, " + nombre + "!");
  }
} */

/* 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
mas eficiente. */

/* const numeroIncognita = Math.floor(Math.random() * 10) + 1;

let intentos = 3;

function validarNumero(numero) {
  if (isNaN(numero) || numero < 1 || numero > 10) {
    return false;
  }
  return true;
}

while (intentos > 0) {

  const numeroIngresado = prompt("Ingresa un número del 1 al 10:");


  if (!validarNumero(numeroIngresado)) {
    alert("Por favor, ingresa un número válido del 1 al 10.");
    continue;
  }


  const numero = parseInt(numeroIngresado);


  if (numero === numeroIncognita) {
    alert("¡Ganaste! Haz adivinado el número.");
    break;
  }

  if (numero > numeroIncognita) {
    alert("El número ingresado es mayor. Vuelve a intentarlo.");
  } else {
    alert("El número ingresado es menor. Vuelve a intentarlo.");
  }

  intentos--;
}

if (intentos === 0) {
  alert(
    `Lo siento, se agotaron los intentos. El número era ${numeroIncognita}.`
  );
}
 */
/* 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
preguntando si en realidad tiene esa edad. */

/* prompt(`¿Cual es tu edad?`) = edad

function clasificarEdad(edad) {
  if (edad < 0 || edad > 100) {
    alert("Edad fuera de los rangos");

  } else if (edad <= 12) {
    alert("Eres un infante.");
  } else if (edad <= 18) {
    alert("Eres un adolescente.");
  } else if (edad <= 45) {
    alert("Eres un mayor joven.");
  } else {
    alert("Eres un anciano.");
  }
} */

/*
10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa. */

/* const jugador1 = prompt("Ingrese el nombre del jugador 1:");
const jugador2 = prompt("Ingrese el nombre del jugador 2:");

const opcionJugador1 = prompt(
  `${jugador1}, ingrese 'piedra', 'papel' o 'tijeras':`
);
const opcionJugador2 = prompt(
  `${jugador2}, ingrese 'piedra', 'papel' o 'tijeras':`
);

if (
  opcionJugador1 !== "piedra" &&
  opcionJugador1 !== "papel" &&
  opcionJugador1 !== "tijeras"
) {
  console.log(`${jugador1} ha hecho trampa!`);
} else if (
  opcionJugador2 !== "piedra" &&
  opcionJugador2 !== "papel" &&
  opcionJugador2 !== "tijeras"
) {
  console.log(`${jugador2} ha hecho trampa!`);
} else {
  if (opcionJugador1 === opcionJugador2) {
    console.log(`¡Empate entre ${jugador1} y ${jugador2}!`);
  } else if (
    (opcionJugador1 === "piedra" && opcionJugador2 === "tijeras") ||
    (opcionJugador1 === "papel" && opcionJugador2 === "piedra") ||
    (opcionJugador1 === "tijeras" && opcionJugador2 === "papel")
  ) {
    console.log(`${jugador1} gana!`);
  } else {
    console.log(`${jugador2} gana!`);
  }
} */

/* 11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color,
Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo:
El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente
elección, no lo teníamos pensado. */

/* const color = prompt("Ingrese un color:");

if (color.toLowerCase() === "blanco" || color.toLowerCase() === "negro") {
  console.log("Falta de color");
} else if (color.toLowerCase() === "verde") {
  console.log("El color de la naturaleza");
} else if (color.toLowerCase() === "azul") {
  console.log("El color del agua");
} else if (color.toLowerCase() === "amarillo") {
  console.log("El color del sol");
} else if (color.toLowerCase() === "rojo") {
  console.log("El color del fuego");
} else if (color.toLowerCase() === "marrón") {
  console.log("El color de la tierra");
} else {
  console.log("Excelente elección, no lo teníamos pensado.");
} */

/* 12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0. */

/* const num1 = Number(prompt("Ingrese un número:"));
const num2 = Number(prompt("Ingrese otro número:"));
const operacion = prompt(
  "Ingrese una operación (suma, resta, multiplicación, división):"
);

let resultado;

if (operacion.toLowerCase() === "suma") {
  resultado = num1 + num2;
  console.log(`La suma de ${num1} y ${num2} es ${resultado}`);
} else if (operacion.toLowerCase() === "resta") {
  resultado = num1 - num2;
  console.log(`La resta de ${num2} a ${num1} es ${resultado}`);
} else if (operacion.toLowerCase() === "multiplicación") {
  resultado = num1 * num2;
  console.log(`La multiplicación de ${num1} por ${num2} es ${resultado}`);
} else if (operacion.toLowerCase() === "división") {
  if (num2 !== 0) {
    resultado = num1 / num2;
    console.log(`La división de ${num1} entre ${num2} es ${resultado}`);
  } else {
    console.log("ERROR: no se puede dividir por cero.");
  }
} else {
  console.log("Operación no reconocida.");
} */

/* 13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
con todos los datos ingresados y mostrarlos por consola con console.table() mas un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes. */

/* const dni = {};

dni.nombres = prompt("Ingrese sus nombres:");
dni.apellidos = prompt("Ingrese sus apellidos:");
dni.tipoDocumento = prompt("Ingrese su tipo de documento:");
dni.numeroDocumento = prompt("Ingrese su número de documento:");
dni.fechaNacimiento = prompt("Ingrese su fecha de nacimiento (dd/mm/aaaa):");

console.log("Los datos ingresados son:");
console.log(`Nombres: ${dni.nombres}`);
console.log(`Apellidos: ${dni.apellidos}`);
console.log(`Tipo de documento: ${dni.tipoDocumento}`);
console.log(`Número de documento: ${dni.numeroDocumento}`);
console.log(`Fecha de nacimiento: ${dni.fechaNacimiento}`);

const confirmacion = confirm("¿Los datos ingresados son correctos?");

if (confirmacion) {
  console.log("Registro exitoso:");
  console.table(dni);
} else {
  console.log("Vuelva a intentarlo en 1 mes.");
} */
