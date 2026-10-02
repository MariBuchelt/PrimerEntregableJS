//Mi Primer Script Interactivo

let nombre = prompt("Ingrese su nombre:");
console.log("El nombre ingresado es: " + nombre);

let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD):");
console.log("La fecha de nacimiento ingresada es: " + fechaNacimiento);

let numeroFavorito = parseInt(prompt("Ingrese su número favorito:"));
console.log("El número favorito ingresado es: " + numeroFavorito);

const ANIO_ACTUAL = 2026;

let edad = ANIO_ACTUAL - parseInt(fechaNacimiento.split("-")[0]);
console.log("La edad calculada es: " + edad);

alert("Hola " + nombre + ", tienes " + edad + " años y tu número favorito es " + numeroFavorito + ".");
