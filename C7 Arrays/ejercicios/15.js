function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let highestNumber = array[0];
  let index = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > highestNumber) {
      highestNumber = array[i]
      index = i;
    };
  };
  return index;
}

module.exports = encontrarIndiceMayor;
