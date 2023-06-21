import Swal from 'sweetalert2';

export function trueAlertC() {
  Swal.fire({
    title: 'Cambios de seguridad',
    text: 'Ya se ha enviado una notificacion a tu correo, Ve y verificalo!',
    icon: 'success',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#3085d6',
  });
}
export function falseAlertC() {
    Swal.fire({
      title: 'Cambios de seguridad',
      text: 'Ocurrio un error con la verificacion de datos intenta nuevamente',
      icon: 'error',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
    });
  }

  export function trueAlertA() {
    Swal.fire({
      title: 'Cambios generales',
      text: 'Ya se han actualizado tus cambios',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
    });
  }
  export function falseAlertA() {
      Swal.fire({
        title: 'Cambios generales',
        text: 'Ocurrio un error con los cambios intenta nuevamente',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
      });
    }