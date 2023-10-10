/**
 * Ejercicio 1
 */

document.getElementById('botonEjercicio1').addEventListener('click', ejercicio1);

const contenedor = document.querySelector('#contenido-dinamico-ejercicio-1');

const iconsDir = 'icons/';
const iconsExt = '.png';
const icons    = [
    'check',
    'equal',
    'wrong'
];

function createDivWithText(text){
    const div = document.createElement('div');
    div.innerText = text;
    div.classList.add('col');
    return div;
}

function checkIfNumber(number){
    function repeatNumber(promptMessage){
        return number = prompt(promptMessage);
    }
    control = true;
    do {

        if (number.length == 0) {
            number = repeatNumber('No has introducido nada');
            continue;
        }

        number = parseInt(number);

        if (isNaN(number)) {
            number = repeatNumber('No es un numero');
            continue;
        }
        control = false;
    } while (control);

    return number;
}
function ejercicio1() {
    contenedor.innerHTML = '';

    const entrada1 = prompt('Introduce un número');
    contenedor.append(createDivWithText(
        checkIfNumber(entrada1)));

    const entrada2 = prompt('Introduce otro número');
    contenedor.append(createDivWithText(
        checkIfNumber(entrada2)));

    const resultado = entrada1 > entrada2 ?
        "El primer número es mayor" : entrada1 == entrada2 ?
            "Los dos numeros son iguales" : "El segundo número es mayor";

    const iconIndex = entrada1 > entrada2 ?
        0 : entrada1 == entrada2 ?
            1 : 2;

    const resultDiv = createDivWithText(resultado);
    const img       = document.createElement('img');
    img.src = `${iconsDir}${icons[iconIndex]}${iconsExt}`;
    resultDiv.append(img);
    contenedor.append(resultDiv);
}
