'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import useUserSesion from '@/hook/userSesion';

export default function useNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { signoffSesion } = useUserSesion();

  const handleClosed = () => {
    setIsOpen(!isOpen);
  };

  const handleRoot = () => {
    router.push('/');
  };

  const logout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });
    if (response.ok) {
      router.push('/login');
      signoffSesion();
    }
  };

  return {
    isOpen,
    handleClosed,
    handleRoot,
    logout,
  };
}
