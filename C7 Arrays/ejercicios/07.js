function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  // array.sort();
  // return array;

  let elemento = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      elemento = array.splice(i, 1);
      array.push(elemento[0]);
      i = -1;
    }
  } return array;
}

module.exports = ordenarArray;
