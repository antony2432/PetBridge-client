'use client';
import React from 'react';
import { leckerli } from '../resource';
import { BsList } from 'react-icons/bs';
import { paths } from './resource';
import { IPathList } from './interface/path.interface';
import Link from 'next/link';
import useNavBar from './hook/useNavBar';

function PathList({ links }: IPathList) {
  return (
    <>
      {links.map(({ label, route }, i) => (
        <li key={i} className="w-full px-4 py-1 rounded-md text-center hover:bg-OffWhite-500">
          <Link href={route}>{label}</Link>
        </li>
      ))}
    </>
  );
}

function ButtonSection() {
  return (
    <>
      <Link href="/login" className="px-6 py-1 hover:bg-OffWhite-500 hover:text-black rounded-full">
        Login
      </Link>
      <Link href="/registration" className="px-4 py-1 bg-DarkBrown-900 rounded-full text-white">
        Sign in
      </Link>
    </>
  );
}

function MobileMenu({ links }: IPathList) {
  return (
    <section className="w-full px-8 absolute top-[10vh] right-0 bg-white duration-300 border lg:hidden">
      <ul className="text-sm text-DarkBrown-900 mt-3  flex flex-col items-center gap-1">
        <PathList links={links} />
      </ul>
      <hr className="mx-8 mt-4 border border-GoldenYellow-500" />
      <section className="mb-2 mt-2 flex flex-col items-center text-sm gap-2">
        <ButtonSection />
      </section>
    </section>
  );
}

export default function Navbar() {
  const { isOpen, handleClosed, handleRoot } = useNavBar();
  return (
    <header className="w-full h-[10vh] shadow-md flex justify-between lg:justify-center order-1 z-10">
      <div className="w-full flex justify-between items-center px-8 max-w-7xl">
        <h1 className={`${leckerli.className} cursor-pointer`} onClick={handleRoot}>
          <span className="text-5xl text-DarkBrown-900">Pet</span>
          <span className="text-4xl text-GoldenYellow-500">Bridge</span>
        </h1>
        <ul className="hidden text-sm text-DarkBrown-900 mt-3 lg:flex items-center gap-1">
          <PathList links={paths} />
        </ul>
        <section className="hidden lg:flex lg:items-center text-sm gap-2">
          <ButtonSection />
        </section>
        <BsList className="text-3xl text-DarkBrown-900 lg:hidden" onClick={handleClosed} />

        {isOpen ? <MobileMenu links={paths} /> : null}
      </div>
    </header>
  );
}
