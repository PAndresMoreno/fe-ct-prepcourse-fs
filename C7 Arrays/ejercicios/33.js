function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let final = [];

  let word1 = str1.split("");
  let word2 = str2.split("");
  let word3 = str3.split("");

  let longitud = word1.length + word2.length + word3.length;

  for (let i = 0; i < longitud; i++) {
    let elemento1 = word1.shift();
    let elemento2 = word2.shift();
    let elemento3 = word3.shift();
    final.push(elemento1, elemento2, elemento3);
  } return final.join("");
}

module.exports = combine;