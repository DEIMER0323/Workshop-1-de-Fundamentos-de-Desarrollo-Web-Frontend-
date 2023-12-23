// Pedir al usuario que ingrese una letra
var letra = prompt("Ingrese una letra del abecedario:");

// Convertir la letra ingresada a minúscula para simplificar la comparación
letra = letra.toLowerCase();

// Verificar si la letra es una vocal
var esVocal =
  letra === "a" ||
  letra === "e" ||
  letra === "i" ||
  letra === "o" ||
  letra === "u";

// Mostrar el resultado en la consola
console.log("¿La letra ingresada es una vocal?");
console.log(esVocal);
// Pedir al usuario que ingrese una letra
var letra = prompt("Ingrese una letra del abecedario:");

// Convertir la letra ingresada a minúscula para simplificar la comparación
letra = letra.toLowerCase();

// Verificar si la letra es una vocal
var esVocal =
  letra === "a" ||
  letra === "e" ||
  letra === "i" ||
  letra === "o" ||
  letra === "u";

// Mostrar el resultado en la consola
console.log("¿La letra ingresada es una vocal?");
console.log(esVocal);
// Pedir al usuario que ingrese el primer dígito del número de pasaporte
var primerDigitoPasaporte = prompt(
  "Ingrese el primer dígito del número de pasaporte:"
);

// Verificar si el turista es del país o extranjero
var esNacional = primerDigitoPasaporte === "A";

// Mostrar el resultado en la consola
console.log("¿El turista es del país?");
console.log(esNacional);
