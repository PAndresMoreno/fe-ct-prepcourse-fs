function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objetoUsuario.email === null || objetoUsuario.email === undefined ? false : true;
}

module.exports = tieneEmail;
