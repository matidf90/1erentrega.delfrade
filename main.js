/*Programa para sacar turno y ser atendido*/

for(let turno = 1; turno <= 5; turno++){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let auto = prompt("Ingrese su auto");

    alert(`Turno Nro ${turno}. Nombre: ${nombre} ${apellido}, propietario del auto ${auto}, aguarde y sera atendido`)
}




/*Calculadora de años vividos con meses y días a partir de cantidad de dias totales"*/

var diasVida = parseInt(prompt("Cuántos días has vivido",""));

var numAnos = Math.floor(diasVida / 365);
var diasRestantes = diasVida % 365 ;
var numMeses = Math.floor(diasRestantes / 30);
diasRestantes = diasRestantes % 30;

alert("Ha vivido " + numAnos + " años, " + numMeses + " meses y " + diasRestantes + " días.");



/*Programa para indicar al usuario de automovil cuando debe realizar service de su auto*/

let km = prompt("¿Cuantos km tiene su auto?");

if (km < 10000){
alert( "Su próximo service es a los 10.000 km");
} else if(km >10000 && km <20000){
alert("Si no hizo el service de los 10.000km, debe hacerlo, de lo contrario su próximo service es a los 20.000km");
} else if(km >20000 && km <30000){
    alert("Si no hizo el service de los 20.000km, debe hacerlo, de lo contrario su próximo service es a los 30.000km");
} else if(km >30000 && km <40000){
    alert("Si no hizo el service de los 30.000km, debe hacerlo, de lo contrario su próximo service es a los 40.000km");
} else if(km >40000 && km <50000){
    alert("Si no hizo el service de los 40.000km, debe hacerlo, de lo contrario su próximo service es a los 50.000km");
} else if(km >50000 && km <60000){
    alert("Si no hizo el service de los 50.000km, debe hacerlo, de lo contrario su próximo service es a los 60.000km");
} else if(km >60000 && km <80000){
    alert("Si no hizo el service de los 60.000km, debe hacerlo, de lo contrario su próximo service es a los 80.000km");
} else if(km >80000 && km <100000){
    alert("Si no hizo el service de los 80.000km, debe hacerlo, de lo contrario su próximo service es a los 100.000km");
}







