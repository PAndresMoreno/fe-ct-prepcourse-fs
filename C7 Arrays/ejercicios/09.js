function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   return array [Math.floor(Math.random() * array.length)];
}

module.exports = obtenerElementoAleatorio;
