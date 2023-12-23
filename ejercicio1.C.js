// Pedir al usuario que ingrese un número
var numero = prompt("Ingrese un número:");

// Convertir el número ingresado a número
numero = parseFloat(numero);

// Verificar si el número es múltiplo de 2
var esMultiploDeDos = numero % 2 === 0;

// Mostrar el resultado en la consola
console.log("¿El número es múltiplo de 2?");
console.log(esMultiploDeDos);