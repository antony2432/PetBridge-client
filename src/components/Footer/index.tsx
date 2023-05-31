import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { path } from './resource';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-screen py-7  bg-GoldenYellow-500 text-center md:py-20">
      <section className="w-full h-full flex justify-center items-center gap-5 md:flex-col">
        <ul className="text-2xl text-DarkBrown-900 flex flex-col gap-4 md:flex-row">
          <li>
            <BsTwitter className="cursor-pointer" />
          </li>
          <li>
            <BsFacebook className="cursor-pointer" />
          </li>
          <li>
            <BsInstagram className="cursor-pointer" />
          </li>
        </ul>
        <ul className="text-DarkBrown-900 text-sm flex flex-col items-start gap-2  md:flex-row">
          {path.map(({ label, route }, i) => (
            <li key={i} className='border-b-2 border-transparent hover:border-DarkBrown-900'>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </section>
      <small className="block mt-6 text-[11px] text-[#252525]">
        © 2023 Puppy Pet. Todos los derechos reservados.
      </small>
    </footer>
  );
}
