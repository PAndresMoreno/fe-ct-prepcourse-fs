function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma = 0;
  arrayOfNums.forEach((numero) => {
    suma = suma + numero;
  });
  return suma;
}

module.exports = agregarNumeros;
