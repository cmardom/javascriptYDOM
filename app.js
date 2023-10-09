//Ejercicio1
const boton = document.getElementById('boton');

boton.addEventListener('click', ejecutarPrompt1);
/*Funcion ejecutarPrompt1: pide los dos numeros
* - los guarda en divs
* - los compara
* - muestra resultado
* - muestra imagen*/

function ejecutarPrompt1() {
    const entrada1 = prompt('Introduce un número');
    const entrada2 = prompt('Introduce otro número');

    const ultimoDiv = document.querySelector('#ej1 > div:last-child');

    const num1 = document.createElement('div');
    num1.innerText = entrada1;
    num1.classList.add('col');
    ultimoDiv.insertAdjacentElement('beforebegin', num1);

    const num2 = document.createElement('div');
    num2.innerText = entrada2;
    num2.classList.add('col');
    ultimoDiv.insertAdjacentElement('beforebegin', num2);

    const resultado = entrada1 > entrada2 ? " El primer número es mayor" : " El segundo número es mayor";
    const divResultado = document.createElement('div');
    divResultado.innerText = resultado;
    divResultado.classList.add('col');
    ultimoDiv.insertAdjacentElement('beforebegin', divResultado);

}




