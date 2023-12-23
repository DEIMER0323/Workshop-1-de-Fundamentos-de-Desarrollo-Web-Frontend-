// Pedir al usuario que ingrese el primer dígito del número de pasaporte
var primerDigitoPasaporte = prompt(
  "Ingrese el primer dígito del número de pasaporte:"
);

// Verificar si el turista es del país o extranjero
var esNacional = primerDigitoPasaporte === "A";

// Mostrar el resultado en la consola
console.log("¿El turista es del país?");
console.log(esNacional);
