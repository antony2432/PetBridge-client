'use client';
import { useState, useEffect } from 'react';
import { IsesionProps } from './interface/ISesionProps.interface';
import { useAppSelector } from '@/redux/hook';

export default function useUserSesion() {
  const [sesion, setSesion] = useState<IsesionProps | null>(null);
  const { actualize } = useAppSelector((state) => state.pets);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSesion = localStorage.getItem('userSesion');
      setSesion(storedSesion ? JSON.parse(storedSesion) : null);
      setIsLoaded(true);
    }
  }, [actualize]);

  const signoffSesion = () => {
    if (typeof window !== 'undefined') {
      setSesion(null);
      localStorage.removeItem('userSesion');
    }
  };

  return {
    sesion,
    signoffSesion,
    isLoaded,
  };
}
