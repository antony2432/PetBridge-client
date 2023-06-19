import React, { useEffect } from 'react';
import { IconButton, Typography } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { Paginatee } from '@/redux/thunk';
export default function Paginate() {
  const { allPets } = useAppSelector((state) => state.pets);
  console.log(allPets);
  let [active, setActive] = React.useState(1);
  let [pages] = React.useState(allPets.length ? Math.ceil(allPets.length / 5) : 8);
  const [elements] = React.useState(5);
  const obj = { active, elements };
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Paginatee(obj));
  }, []);
  const next = () => {
    if (active === pages) return;
    setActive(active + 1);
    const vars = { active: active + 1, elements };
    dispatch(Paginatee(vars));
  };
  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
    const vars = { active: active - 1, elements };
    dispatch(Paginatee(vars));
  };
  return (
    <div className="flex items-center gap-8 mb-5">
      <IconButton
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-blue-gray-900">{active}</strong> of{' '}
        <strong className="text-blue-gray-900">{pages}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={next}
        disabled={active === pages}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
