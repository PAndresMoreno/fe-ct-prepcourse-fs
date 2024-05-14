function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  // array.reverse();
  // return array;
  
  let nuevoArreglo = []
  for (let i = 0; i < array.length; i++) {
    nuevoArreglo.unshift(array[i]);
  } return nuevoArreglo;
}

module.exports = invertirArray;
