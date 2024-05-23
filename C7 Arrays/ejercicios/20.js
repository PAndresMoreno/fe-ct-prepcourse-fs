function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let sameElement = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] === sameElement) return true;
    else return false;
  };
}

module.exports = todosIguales;
