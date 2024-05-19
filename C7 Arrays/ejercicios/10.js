function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  let palabra = undefined;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      palabra = array[i]
      break;
    }
  } return palabra;
}

module.exports = obtenerPrimerStringLargo;
