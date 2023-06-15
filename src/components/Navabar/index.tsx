'use client';
import React from 'react';
import { leckerli } from '../resource';
import { usePathname } from 'next/navigation';
import useNavBar from './hook/useNavBar';
import LoginOrRegister from './LoginOrRegister';
import DeafultNavbar from './DefaultNavbar';

export default function Navbar() {
  const pathName = usePathname();
  const { handleRoot } = useNavBar();
  const renderNavbar = () => {
    switch (pathName) {
      case '/login':
      case '/registration':
        return <LoginOrRegister />;
      default:
        return <DeafultNavbar />;
    }
  };
  return (
    <header className="w-full h-[10vh] shadow-md flex justify-between lg:justify-center z-10 bg-white">
      <div className="w-full flex justify-between items-center px-8 max-w-7xl">
        <h1 className={`${leckerli.className} cursor-pointer`} onClick={handleRoot}>
          <span className="text-5xl text-DarkBrown-900">Pet</span>
          <span className="text-4xl text-GoldenYellow-500">Bridge</span>
        </h1>
        {renderNavbar()}
      </div>
    </header>
  );
}
