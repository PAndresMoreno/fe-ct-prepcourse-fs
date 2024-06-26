/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arregloFinal = [];
  for (let propiedad in objeto) {
    let subArreglo = [];
    subArreglo.push(propiedad, objeto[propiedad]);
    arregloFinal.push(subArreglo);
  } return arregloFinal;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let stringOrdenado = string.split("").sort();
  let nuevoObjeto = {};
  let repeticiones = 1;

  for (let i = 0; i < stringOrdenado.length; i++) {
    nuevoObjeto[stringOrdenado[i]] = repeticiones;
    if (stringOrdenado[i] === stringOrdenado[i + 1]) {
      repeticiones++;
    } else repeticiones = 1;
  } return nuevoObjeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let splitWord = string.split("");
  let lowerCaseArray = [];
  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i] >= "a" && splitWord[i] <= "z") {
      let lowerCase = splitWord.splice(i, 1);
      lowerCaseArray.push(lowerCase[0]);
      i--;
    }
  } return splitWord.concat(lowerCaseArray).join("");
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let palabrasSeparadas = frase.split(" ");
  let arregloFinal = palabrasSeparadas.map((palabra) => {
    return palabra.split("").reverse().join("");
  }); return arregloFinal.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let reversedNumber = numero.toString().split("").reverse().join("");
  return numero == reversedNumber ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let abc = ["a", "b", "c"];
  let splitWord = string.split("");
  let finalWord = [];
  for (let i = 0; i < splitWord.length; i++) {
    if (abc.includes(splitWord[i]) === false) {
      finalWord.push(splitWord[i])
    }
  } return finalWord.join("");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    if (arrayOfStrings[i].length > arrayOfStrings[i + 1].length) {
      let longerWord = arrayOfStrings.splice(i, 1);
      arrayOfStrings.push(longerWord[0]);
      i = -1;
    }
  } return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let finalArray = [];
  let mergedArrays = array1.concat(array2).sort();
  for (let i = 0; i < mergedArrays.length - 1; i++) {
    if (mergedArrays[i] === mergedArrays[i + 1]) {
      finalArray.push(mergedArrays[i]);
    }
  } return finalArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
