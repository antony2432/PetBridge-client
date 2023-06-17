'use client';
import React, { useEffect } from 'react';
import InfoGeneral from './components/Pages/infoGeneral/InfoGeneral';
import Perfil from './components/PerfilNav/Perfil';
import Nav from './components/PerfilNav/Nav';
import { useState } from 'react';
import Security from './components/Pages/Security/Security';
import Notifications from './components/Pages/Notifications/Notifications';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { GetByName } from '@/redux/thunk';

export default function Settings() {
  const dispatch = useAppDispatch();
  //const [value] = useState('Fernando');
  const { User } = useAppSelector((s) => s.user);
  useEffect(() => {
    if (!User.length) {
      dispatch(GetByName());
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
        {pages.Security ? <Security /> : null}
        {pages.Notifications ? <Notifications /> : null}
      </span>
    </div>
  );
}
