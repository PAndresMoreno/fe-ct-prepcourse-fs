function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let word1 = texto.split("");
  let reverse = word1.reverse(); 
  return reverse.join("");
}

module.exports = invertirTexto;
