/*
 * Escribe una función que reciba dos palabras (String) y retorne ✅
 * verdadero o falso (Bool) según sean o no anagramas. ✅
 * - Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial. ✅
 * - NO hace falta comprobar que ambas palabras existan. ✅
 * - Dos palabras exactamente iguales no son anagrama. ✅
 */

function esAnagrama(word1, word2) {

    // FILTRO Comparo que NO sean iguales
    if (word1 === word2) {
        return console.log("iguales"); 
    }

    // Ordeno a Común Denominador
    const arrWord1 = word1.toLowerCase().split("").sort();
    const strOrder1 = arrWord1.join("");
    
    const arrWord2 = word2.toLowerCase().split("").sort();
    const strOrder2 = arrWord2.join("");

    // Retorno Booleano al comparar Común Denominador
    return console.log(strOrder1 == strOrder2 ? true : false); 

}

// Función que recibe dos palabras (String):

esAnagrama("Silent the 3", "Listen the 3");
