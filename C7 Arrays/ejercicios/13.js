function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numerosPares = [];
  array.forEach((num) => {
    if (num % 2 === 0) {
      numerosPares.push(num)
    };
  });
  return numerosPares;
}

module.exports = filtrarNumerosPares;
