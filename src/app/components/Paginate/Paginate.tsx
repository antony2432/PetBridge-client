/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { IconButton, Typography } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Paginatee } from '@/redux/thunk';
import useUserSesion from '@/hook/userSesion';
export default function Paginate() {
  const { allPets } = useAppSelector((state) => state.pets);
  const { sesion } = useUserSesion();
  let [active, setActive] = React.useState(1);
  let [pages] = React.useState(Math.ceil(allPets.length / 8) );
  const [elements] = React.useState(8);
  const obj = { active, elements, sesion };
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Paginatee(obj));
  }, []);
  const next = () => {
    if (active === pages) return;
    setActive(active + 1);
    const vars = { active: active + 1, elements, sesion };
    dispatch(Paginatee(vars));
  };
  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    const vars = { active: active - 1, elements, sesion };
    dispatch(Paginatee(vars));
  };
  return (
    <div className="flex items-center gap-8 my-5 ">
      <IconButton
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={prev}
        hidden={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 "  />
      </IconButton>
      {active === 1 ? <div className='h-4 w-8'></div> : null}
      <Typography color="gray" className="font-normal">
        Page <strong className="text-blue-gray-900">{active}</strong> of{' '}
        <strong className="text-blue-gray-900">{pages}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={next}
        hidden={active === pages}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      {active === pages ? <div className='h-4 w-8'></div> : null}
    </div>
  );
}
