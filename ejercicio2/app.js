/**
 * Ejercicio 2
 *
 */
const boton = document.getElementById('botonEjercicio2').
addEventListener('click', ejercicio2);
const contenedorSuma = document.getElementById('suma');
const contenedorContador = document.getElementById("contador");
const contenedorResultado = document.getElementById("resultado");

function askAndAddNumbers (){
    let contador = 0,
        suma = 0,
        number = 0;
    do {
        number = prompt('Introduce números');
        suma += checkIfNumber(number);
        contador++;

    } while (number >= 0);
    contador--;
    contenedorSuma.append(createDivWithText('Total: ' + suma));
    contenedorContador.append(createDivWithText('dividido por ' + contador + " números"));
    return suma / contador;
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

        if (number <= 0){
            return 0;
        }

        control = false;
    } while (control);
    console.log('nunmber comprobado=' + number);

    return number;
}

function createDivWithText(text){
    const div = document.createElement('div');
    div.innerText = text;
    div.classList.add('col');
    return div;
}

function ejercicio2() {
    function vaciarInnerHTML (contenedor){
        contenedor.innerHTML = '';
    }

    vaciarInnerHTML(contenedorSuma);
    vaciarInnerHTML(contenedorContador);
    vaciarInnerHTML(contenedorResultado);

    const resultado = askAndAddNumbers();
    contenedorResultado.append(createDivWithText('Resultado de la media: ' + resultado));

}