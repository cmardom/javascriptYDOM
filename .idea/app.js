//Ejercicio1
let boton = document.getElementById('boton');

boton.addEventListener('click', ejecutarPrompt1);
/*Funcion ejecutarPrompt1: pide los dos numeros
* - los guarda en divs
* - los compara
* - muestra resultado
* - muestra imagen*/

function ejecutarPrompt1() {
    let entrada1 = prompt('Introduce un número');
    let entrada2 = prompt('Introduce otro número');

    let ultimoDiv = document.getElementById('ej1');

    let num1 = document.createElement('div');
    num1.innerText = entrada1;
    num1.classList.add('col');
    ultimoDiv.append(num1);

    let num2 = document.createElement('div');
    num2.innerText = entrada2;
    num2.classList.add('col');
    num1.append(num2);

    let resultado = entrada1 > entrada2 ? " El primer número es mayor" : " El segundo número es mayor";
    let divResultado = document.createElement('div');
    divResultado.innerText = resultado;
    divResultado.classList.add('col');
    num2.append(divResultado);

}




