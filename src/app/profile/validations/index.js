/* Nombres: 'Juan Ezequiel',
Apellidos: 'Marandino',
imagen: '/image/Foto_Perfil_.jpg',
genero: 'Male',
email: 'juan@gmail.com',
direccion: 'fugio-440',
numeroTelefonico: '3452112', */
export const validate = ({ Nombres, Apellidos, direccion, numeroTelefonico }) => {
  const error = {};
  if (!Nombres) {
    error.Nombres = 'Debes llenar este campo';
  }
  if (Nombres.length > 15 && Nombres.length !== 0) {
    error.Nombres = 'El nombre no debe tener más de 15 caracteres';
  }
  if (!Apellidos) {
    error.Apellidos = 'Debes llenar este campo';
  }
  if (!numeroTelefonico) {
    error.numeroTelefonico = 'Ingresa tu telefono';
  }
  if (!direccion) {
    error.direccion = 'Ingresa tu pais';
  }
  return error;
};
