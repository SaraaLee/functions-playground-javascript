/**
 * Extiende la función del ex4.
 * 
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista. 
 * 
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta */

function agua_necesaria(condicion, km) {
    let agua_por_km; // esta variable debe ser inicilizada más adelante, en función de la condición física del ciclista
    let litros_totales; // en esta variable vamos a almacenar los litros totales de agua que el ciclista va a necesitar

    if (condicion == 'buena') {
        agua_por_km = 0.5;
    }
    else if (condicion == "regular") {
        agua_por_km = 0.6;
    }
    else if (condicion == "mala") {
        agua_por_km = 0.7;
    }
    litros_totales = km * agua_por_km
    return litros_totales ;

}

// Esta primera prueba debería funcionar si modificas adecuadamente el cuerpo de la función. Fijate que ahora mismo, la función no considera el caso de que la condición del ciclsta sea 'regular' ... hay que solventarlo.

let condicion = 'regular';
let km = 5;
let agua = agua_necesaria(condicion, km);
console.log(`Este ciclista deberia necesitar ${agua} litros de agua en total: `, agua);