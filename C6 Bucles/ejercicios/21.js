function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let comprobarNumero = numero;
  while (comprobarNumero % 2 === 0) {
    comprobarNumero = comprobarNumero / 2;
  } if (comprobarNumero === 1) {
    return true;
  } else return false;
}

module.exports = esPotenciaDeDos;
