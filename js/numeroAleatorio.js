// Generamos un número aleatorio que se encuentre en el rango del 1 al 25
const numeroAleatorio = Math.floor(Math.random() * 25) + 1;

// Creamos una constante que permite identificar el máximo de intentos
const numeroIntentos = 3;

// Guardará el número de intentos que realiza el usuario
let intentos = 1;

function generarNumeroAleatorio() {
    // Definimos una variable para impresión de mensajes
    let mensaje;

    // Utilizamos el DOM para acceder al párrafo creado
    const parrafo = document.querySelector("#idParrafo");

    // Verificamos en qué intento está el usuario
    if (intentos <= numeroIntentos) {
        let numero = prompt(
            "¿Qué número crees que se ha generado? (Intento " + intentos + ")"
        );

        // Convertimos el valor ingresado por el usuario a número
        numero = Number(numero);

        // Verificamos el número aleatorio con el ingresado por el usuario
        if (numero === numeroAleatorio) {
            mensaje = `¡Felicidades! Has adivinado el número oculto (${numeroAleatorio}). Refresca la página para volver a jugar.`;
        } else if (intentos === numeroIntentos) {
            mensaje = `Lo siento, has alcanzado el límite de intentos. El número oculto era: ${numeroAleatorio}. Refresca la página para volver a jugar.`;
        } else {
            // Informamos si el número a adivinar es más alto o más bajo
            if (numero < numeroAleatorio) {
                mensaje = `El número que buscas es más alto. Quedan ${numeroIntentos - intentos} intentos.`;
            } else {
                mensaje = `El número que buscas es más bajo. Quedan ${numeroIntentos - intentos} intentos.`;
            }
        }

        // Aumentamos el valor de los intentos
        intentos++;
    } else {
        mensaje = `Lo siento, has alcanzado el límite de intentos. El número oculto era: ${numeroAleatorio}. Refresca la página para volver a jugar.`;
    }

    // Mostramos el mensaje en el párrafo
    parrafo.innerHTML = mensaje;
}
