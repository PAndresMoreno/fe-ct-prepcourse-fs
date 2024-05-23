function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tabla = []
  let i = 0;
  while (tabla.length < 11) {
    tabla.push (6 * i)
    i +=1;
  } return tabla;
}

module.exports = tablaDelSeis;
