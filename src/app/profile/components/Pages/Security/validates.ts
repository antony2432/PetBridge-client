export function validateEmail({ newEmail, password }: any) {
  const errors = {
    password:'',
    newPassword:'',
    repeatPassword:'',
    newEmail:'',
  };
  if (!newEmail) {
    errors.newEmail = 'Campo requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newEmail)) {
    errors.newEmail = 'Dirección de correo electrónico inválida';
  }
  if (!password) {
    errors.password = 'Campo requerido';
  } else if (password.length < 8) {
    errors.password = 'Tiene que tener minimo 8 digitos';
  } else if (!/[A-Z]/.test(password)) {
    errors.password = 'Debe contener al menos una letra mayúscula';
  } else if (!/\d/.test(password)) {
    errors.password = 'Debe contener al menos un número';
  } else if (!/[!@#$%^&*]/.test(password)) {
    errors.password = 'Debe contener al menos un carácter especial';
  }
  return errors;
}
export function validatePassword({ password, newPassword, repeatPassword }:any) {
  const errors = {
    password:'',
    newPassword:'',
    repeatPassword:'',
  };
  if (!password) {
    errors.password = 'Campo requerido';
  } else if (password.length < 8) {
    errors.password = 'Tiene que tener minimo 8 digitos';
  } else if (!/[A-Z]/.test(password)) {
    errors.password = 'Debe contener al menos una letra mayúscula';
  } else if (!/\d/.test(password)) {
    errors.password = 'Debe contener al menos un número';
  } else if (!/[!@#$%^&*]/.test(password)) {
    errors.password = 'Debe contener al menos un carácter especial';
  }

  if (!newPassword) {
    errors.newPassword = 'Campo requerido';
  } else if (newPassword.length < 8) {
    errors.newPassword = 'Tiene que tener minimo 8 digitos';
  } else if (!/[A-Z]/.test(newPassword)) {
    errors.newPassword = 'Debe contener al menos una letra mayúscula';
  } else if (!/\d/.test(newPassword)) {
    errors.newPassword = 'Debe contener al menos un número';
  } else if (!/[!@#$%^&*]/.test(newPassword)) {
    errors.newPassword = 'Debe contener al menos un carácter especial';
  }

  if (!repeatPassword) {
    errors.repeatPassword = 'Campo requerido';

  } else if (repeatPassword !== newPassword) {
    errors.repeatPassword = 'Las contraseñas tienen que coincidir'; 
  }
  return errors;
}