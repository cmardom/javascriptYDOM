//Ejercicio1
document.getElementById('botonEjercicio1').addEventListener('click', ejercicio1);

/*Funcion ejecutarPrompt1: pide los dos numeros
* - los guarda en divs
* - los compara
* - muestra resultado
* - muestra imagen*/
function createDivWithText(text){
    const div = document.createElement('div');
    div.innerText = text;
    div.classList.add('col');
    return div;
}
function ejercicio1() {
    const contenedor = document.querySelector('#contenido-dinamico-ejercicio-1');
    contenedor.innerHTML = '';

    const entrada1 = prompt('Introduce un número');
    contenedor.append(createDivWithText(entrada1));

    const entrada2 = prompt('Introduce otro número');
    contenedor.append(createDivWithText(entrada2));

    const resultado = entrada1 > entrada2 ? " El primer número es mayor" : " El segundo número es mayor";

    contenedor.append(createDivWithText(resultado));
}




