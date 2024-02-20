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
let nombre = prompt("Ingrese su nombre, por favor")
let edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

let casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
let edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
}