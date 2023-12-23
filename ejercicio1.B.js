var valorCompra = prompt("Ingrese el valor de su compra en COP:");

valorCompra = parseFloat(valorCompra);

var calificaParaDescuento = valorCompra >= 100000;

console.log("¿La compra recibe descuento?");
console.log(calificaParaDescuento);

var numero = prompt("Ingrese un número:");
numero = parseFloat(numero);

var esMultiploDeDos = numero % 2 === 0;

console.log("¿El número es múltiplo de 2?");
console.log(esMultiploDeDos);

var nombreEmpleado = prompt("Ingrese el nombre del empleado:");
var salarioPorHora = prompt(
  "Ingrese el salario básico por horas del empleado en COP:"
);
var horasTrabajadas = prompt(
  "Ingrese el número de horas trabajadas en un mes:"
);

salarioPorHora = parseFloat(salarioPorHora);
horasTrabajadas = parseInt(horasTrabajadas);

var salarioMensual = salarioPorHora * horasTrabajadas;

var recibeSubsidioTransporte = salarioMensual <= 700000;

console.log("Nombre del empleado: " + nombreEmpleado);
console.log("Salario básico mensual: $" + salarioMensual.toFixed(2));
console.log("¿Recibe subsidio de transporte? " + recibeSubsidioTransporte);
