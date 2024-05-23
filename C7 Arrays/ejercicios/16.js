function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let indice = -1;

  let nuevoArreglo = array.map((numero) => {
    indice += 1;
    return numero * indice;
  });  
  return nuevoArreglo;
}

module.exports = multiplicarElementosPorIndice;
