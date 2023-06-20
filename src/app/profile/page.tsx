'use client';
import React, { useEffect } from 'react';
import InfoGeneral from './components/Pages/infoGeneral/InfoGeneral';
import Perfil from './components/PerfilNav/Perfil';
import Nav from './components/PerfilNav/Nav';
import { useState } from 'react';
import Security from './components/Pages/Security/Security';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { GetByName } from '@/redux/thunk';

export default function Settings() {
  const dispatch = useAppDispatch();
  const { User } = useAppSelector((s) => s.user);
  useEffect(() => {
    if (!User.length) {
      dispatch(GetByName('6609e2b9-de6a-4085-9593-6660a8f51bfb'));
    }
  });

  const [pages, setPages] = useState({
    General: true,
    Security: false,
    Notifications: false,
  });
  return (
    <div className="flex justify-center m-5">
      <section>
        <span className="m-10">
          <Perfil User={User} />
        </span>
        <Nav setPages={setPages} pages={pages} />
      </section>
      <span className="w-full">
        {pages.General ? <InfoGeneral User={User} /> : null}
        {pages.Security ? <Security User={User} /> : null}
      </span>
    </div>
  );
}
