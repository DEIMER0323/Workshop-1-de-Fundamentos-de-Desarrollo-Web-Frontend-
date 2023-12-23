const sueldo = prompt("Por favor ingrese su sueldo");
const antiguedad = prompt("Por favor ingrese su antiguedad");



const sueldoInferior2000 = Number(sueldo) < 2000;
const antiguedad10 = Number(antiguedad) == 10 || Number(antiguedad) > 10;
const ejercicioa = sueldoInferior2000 && antiguedad10;
console.log("respuesta 1.a: " + ejercicioa);



const antiguedadmenor10 = Number(antiguedad) < 10;
const ejerciciob = sueldoInferior2000 || antiguedadmenor10;
console.log("respuesta 1.b: " + ejerciciob);



const ejercicioc = !sueldoInferior2000;
console.log("respuesta ejercicio 1.c: " + ejercicioc);
