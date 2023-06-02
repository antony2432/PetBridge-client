'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClosed = () => {
    setIsOpen(!isOpen);
  };

  const handleRoot = () => {
    router.push('/');
  };
  return {
    isOpen,
    handleClosed,
    handleRoot,
  };
}
