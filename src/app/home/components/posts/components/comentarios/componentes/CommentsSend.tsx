'use client';
import axios from 'axios';
import { useState } from 'react';
import CommentsSendProps from '../../interfaces/CommentsSend.interface';
import useUserSesion from '@/hook/userSesion';

export default function CommentsSend({ id, userId }: CommentsSendProps) {
  const [textareaValue, setTextareaValue] = useState('');
  const [commentsData, setCommentsData] = useState({
    description: '',
    userId: userId,
    pubId: id,
  });
  const { sesion } = useUserSesion();
  async function handleSubmit() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BACK}/publications_user/comment`,
        commentsData,
        {
          headers: {
            Authorization: `Bearer ${sesion?.token}`,
          },
        },
      );
      setTextareaValue('');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(e.target.value);
    setCommentsData((prevState) => ({
      ...prevState,
      description: e.target.value,
    }));
  }
  return (
    <section className="bg-[#FCEED9] border w-full justify-center items-center border-blue-gray-500/20 rounded-3xl lg:rounded-[99px] lg:w-full flex flex-row gap-2 p-2">
      <div className="relative w-full min-w-[200px] grid h-full">
        <textarea
          value={textareaValue}
          onChange={handleChange}
          placeholder="Escribi tu comentario"
          className="w-full h-full min-h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-allplaceholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500 focus:border-transparent"
        ></textarea>
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500 before:content-none after:content-none"></label>
      </div>
      <div>
        <button
          onClick={handleSubmit}
          className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30 rounded-full"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
