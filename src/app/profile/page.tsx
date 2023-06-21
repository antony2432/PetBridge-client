'use client';
import React, { useEffect } from 'react';
import InfoGeneral from './components/Pages/infoGeneral/InfoGeneral';
import Perfil from './components/PerfilNav/Perfil';
import Nav from './components/PerfilNav/Nav';
import { useState } from 'react';
import Security from './components/Pages/Security/Security';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { GetByName } from '@/redux/thunk';
import useUserSesion from '@/hook/userSesion';

export default function Settings() {
  const dispatch = useAppDispatch();
  const { User } = useAppSelector((s) => s.user);
  const { sesion } = useUserSesion();

  const rol = User && User.nameOfFoundation ? 'fundation' : 'user';

  useEffect(() => {
    if (User === null) {
      dispatch(GetByName(sesion));
    }
    return () => {
      dispatch(GetByName(null));
    };
  }, [sesion]);

  const [pages, setPages] = useState({
    General: true,
    Security: false,
    Notifications: false,
  });
  return (
    <div className="flex justify-center m-5">
      <section>
        <span className="m-10">
          <Perfil User={User} rol={rol} />
        </span>
        <Nav setPages={setPages} pages={pages} />
      </section>
      <span className="w-full">
        {pages.General ? <InfoGeneral User={User} rol={rol}/> : null}
        {pages.Security ? <Security User={User} rol={rol}/> : null}
      </span>
    </div>
  );
}
