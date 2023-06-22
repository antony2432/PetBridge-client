import useUserSesion from '@/hook/userSesion';
import { useAppDispatch } from '@/redux/hook';
import { SearchA } from '@/redux/thunk';
import React, { useState } from 'react';

export default function InputBar() {
  const { sesion } = useUserSesion();
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();
  function handleSearch() {
    var obj = {
      value: input,
      sesion,
    };
    dispatch(SearchA(obj));
  }
  return (
    <div className="w-2/3 z-[60]">
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-y-0 right-0 flex items-center mr-14 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-60 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar por nombre..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button
          className="text-white h-12 w- ml-5 right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
         
    </div>
  );
}
