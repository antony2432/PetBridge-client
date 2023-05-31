'use client';
import React from 'react';
import { leckerli } from '../resource';
import { BsList } from 'react-icons/bs';
import { paths } from './resource';
import Link from 'next/link';
import useNavBar from './hook/useNavBar';

function MobileMenu() {
  return (
    <section className="w-screen px-8 absolute top-[10vh] right-0 bg-white duration-300 border">
      <ul className="text-sm text-DarkBrown-900 mt-3  flex flex-col items-center gap-1">
        {paths.map(({ label, route }, i) => (
          <li key={i} className='w-full hover:bg-OffWhite-500 px-4 py-1 rounded-md text-center'>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
      <hr className="mx-8 mt-4 border border-GoldenYellow-500" />
      <section className="mb-2 mt-2 flex flex-col items-center text-sm gap-2">
        <Link
          href="/login"
          className="px-6 py-1 hover:bg-OffWhite-500 hover:text-black rounded-full"
        >
          Login
        </Link>
        <Link href="/registration" className="px-4 py-1 bg-DarkBrown-900 rounded-full text-white">
          Sign in
        </Link>
      </section>
    </section>
  );
}

export default function Navbar() {
  const { isOpen, handleClosed, handleRoot } = useNavBar();
  return (
    <header className="w-screen h-[10vh] shadow-md flex justify-between items-center px-8">
      <h1 className={leckerli.className} onClick={handleRoot}>
        <span className="text-5xl text-DarkBrown-900">Pet</span>
        <span className="text-4xl text-GoldenYellow-500">Bridge</span>
      </h1>
      <BsList className="text-3xl text-DarkBrown-900" onClick={handleClosed} />

      {isOpen ? <MobileMenu /> : null}
    </header>
  );
}
