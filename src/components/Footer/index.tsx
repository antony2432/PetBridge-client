import React from 'react';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { path } from './resource';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-7 bg-GoldenYellow-500 text-center md:py-10 mt-auto  bottom-0">
      <section className="w-full h-full flex gap-5 justify-center items-center md:flex-col">
        <ul className="text-2xl flex flex-col gap-4 text-DarkBrown-900 md:flex-row">
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
        <ul className="text-sm flex flex-col gap-2 items-start text-DarkBrown-900 md:flex-row">
          {path.map(({ label, route }, i) => (
            <li key={i} className='border-b-2 border-transparent hover:border-DarkBrown-900'>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </section>
      <small className="text-[11px] mt-6 block text-slate-900">
        © 2023 Puppy Pet. Todos los derechos reservados.
      </small>
    </footer>
  );
}
