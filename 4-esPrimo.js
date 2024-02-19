/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números numeros entre 1 y 100.
 */

const primo = (num) => {
    if (num < 2) {
        return false
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}

const mostrar = (numeros) => {

    let arrNumeros = [];

    for (let i = 2; i < numeros; i++) {
        if (primo(i)) {
            arrNumeros.push(i)
        }
    }

    return console.log(arrNumeros)

}

mostrar(1000)

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79,
// 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167


