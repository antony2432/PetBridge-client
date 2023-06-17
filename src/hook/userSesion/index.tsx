import { useState, useEffect } from 'react';
import { IsesionProps } from './interface/ISesionProps.interface';

export default function useUserSesion() {
  const [sesion, setSesion] = useState<IsesionProps | null>(null);

  useEffect(() => {
    let initialSesion: IsesionProps | null = null;
    const storedSesion = localStorage.getItem('userSesion');
    if (storedSesion) {
      initialSesion = JSON.parse(storedSesion);
    }
    setSesion(initialSesion);
  }, []);

  useEffect(() => {
    if (sesion) {
      localStorage.setItem('userSesion', JSON.stringify(sesion));
    } 
  }, [sesion]);

  const signoffSesion = () => {
    setSesion(null);
    localStorage.removeItem('userSesion');
  };

  return {
    sesion,
    signoffSesion,
  };
}
