function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let sameNumber = undefined;
  let arregloOrdenado = numeros.sort((a,b) => a - b); 

  for (let i = 0; i < arregloOrdenado.length - 1; i++) {
    if (arregloOrdenado[i] === arregloOrdenado[i + 1])
      sameNumber = arregloOrdenado[i];
  } return sameNumber;
}

module.exports = encontrarElementoRepetido;