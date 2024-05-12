function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = a;
   for (let i = a + 1; i <= b; i++) {
      producto = producto * i;
      if (producto < 0) {
         producto = producto * -1;
      }
   } return producto;
}

module.exports = productoEntreNúmeros;