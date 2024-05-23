function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  let mesesRequeridos = ["Enero", "Marzo", "Noviembre"];
  let mesesEncontrados = []

  array.forEach((mes) => {
    if (mesesRequeridos.includes(mes)) mesesEncontrados.push(mes);
  });

  if (mesesEncontrados.length < 3) return "No se encontraron los meses pedidos";

  return mesesEncontrados;
}

module.exports = mesesDelAño;
