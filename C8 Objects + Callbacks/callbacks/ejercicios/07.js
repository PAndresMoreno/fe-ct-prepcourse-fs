function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let palabrasConA = [];
   for (let i = 0; i < arrayOfStrings.length; i++) {
      let separarPalabra = arrayOfStrings[i].toLowerCase().split("");
      if (separarPalabra[0] === "a") {
         palabrasConA.push(separarPalabra.join(""));
      }
   } return palabrasConA;

}

module.exports = filter;
