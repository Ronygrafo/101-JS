/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

//Empiezo en CERO
let arrFibonacci = [0];

// Ciclo For del 1 al 50
for (let i = 1; i <= 50; i++) {

    // En la primera iterción, pusheo el 1
    if (i === 1) {
        arrFibonacci.push(i)
    }

    // En Adelante, calculo el siguiente número con los 2 ultimos del Array
    else {
        let nextNumber = null;
        nextNumber = arrFibonacci[arrFibonacci.length - 1] + arrFibonacci[arrFibonacci.length - 2]
        arrFibonacci.push(nextNumber)
    }

    console.log(arrFibonacci)

}   