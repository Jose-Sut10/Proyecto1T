let precio_base = 2000;

//Valores de los recargos 
let edad_18 = 0.1; // 10%
let edad_25 = 0.2;// 20%
let edad_50 = 0.3; // 30%

let casado_18 = 0.1; // 10%
let casado_25 = 0.2; // 20%
let casado_50 = 0.3; // 30%

let hijos_recargo = 0.2; // 20%

//Recargo
let recargo = 0
let recargo_total = 0;

//Precio final 
let precio_final = 0;

//Mensajes de alerta para ingresar datos 
let nombre = prompt("Ingrese su nombre, por favor");
let edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números "));

let casado = prompt("¿Está casado actualmente?");
//Comprobamos la edad del cónyuge, solamente si se está casado/a
if("SI" == casado.toUpperCase()){
  var edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?"));
}


let hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
if("SI" == hijos.toUpperCase()){
  var cantidad_hijos = parseInt(prompt('¡Cuántos hijos tiene?'))
}
/**
 * 1. convierta la cantidad de hijos a numero
 */

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad>=18 && edad<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}
//aqui puede colocar un else if() con el siguiente rango

/** 
 * 2. Recargo por la edad del conyuge
 */

/**
 * 3. Recargo por la cantidad de hijos 
 */ 


precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)