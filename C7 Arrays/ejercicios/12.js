function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let uppercaseWords = array.map((word) => {
    return word.toUpperCase();
  });
  return uppercaseWords;
}

module.exports = convertirStringAMayusculas;
