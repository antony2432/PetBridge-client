'use client';
import axios from 'axios';
import { useState } from 'react';
import CommentsSendProps from '../../interfaces/CommentsSend.interface';

export default function CommentsSend({ id, userId }: CommentsSendProps) {
  const [textareaValue, setTextareaValue] = useState('');
  const [commentsData, setCommentsData] = useState({
    description:'',
    userId: userId,
    pubId: id,
  });
  console.log(commentsData);
  async function handleSubmit() {
    try {
      const response = await axios.post(
        'http://localhost:3000/publications_user/comment', commentsData, 
      );
      setTextareaValue('');
      console.log(response);
    } catch (error) {
   
      console.error(error);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextareaValue(e.target.value);
    setCommentsData(prevState => ({
      ...prevState,
      description: e.target.value,
    }));
  }
  return (
    <div className="bg-blue-500/10 border w-full   justify-center  border-blue-gray-500/20 rounded-3xl lg:rounded-[99px] lg:w-full flex flex-row items-center gap-2 p-2">
      <div className="flex">
        {/* <button className="relative hidden align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30 rounded-full" type="button">
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
            </svg>
          </span>
        </button> */}
        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30 rounded-full" type="button">
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="relative w-full min-w-[200px] grid h-full">
        <textarea value={textareaValue} onChange={handleChange} placeholder="Escribi tu comentario" className="peer w-full h-full min-h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-allplaceholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500 focus:border-transparent !border-0"></textarea>
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500 before:content-none after:content-none"></label>
      </div>
      <div>
        <button onClick={handleSubmit} className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30 rounded-full" type="button">
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
