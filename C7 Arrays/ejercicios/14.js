function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let cuenta = 0;
  array.forEach((num) => {
    if (num > 10) {
      cuenta += 1
    };
  });
  return cuenta;
}

module.exports = contarElementosMayoresA10;
