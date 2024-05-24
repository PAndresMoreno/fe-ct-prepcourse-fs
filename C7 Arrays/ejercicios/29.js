function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  let missingNumber = null;

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i + 1] - numeros[i] !== 1) {
      missingNumber = numeros[i] + 1;
    }
  } return missingNumber;
}

module.exports = encontrarNumeroFaltante;