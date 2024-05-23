function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let resultado = arguments[0];

   for (let i = 1; i < arguments.length; i++) {
      resultado = resultado * arguments[i]
   }
   
   if (resultado === undefined) resultado = 0;
   
   return resultado;
}

module.exports = multiplicarArgumentos;
