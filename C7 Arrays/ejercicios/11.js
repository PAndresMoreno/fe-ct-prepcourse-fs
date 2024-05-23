function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let nuevoArreglo = array.map((numero) => {
    return numero * 2;
  }); return nuevoArreglo;
}

module.exports = duplicarElementos;
