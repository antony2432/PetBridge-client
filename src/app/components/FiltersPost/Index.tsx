'use client';
import React,{useState} from 'react';

export default function FiltersPost() {
  const [color, setColor]= useState("")
  function handleCategories(e : object){
 const {value,checked}= e.target
 if(checked){
setColor("slate-500")
 }else{
  setColor("white")
 }
  }
  return (
    <nav className='flex items-center justify-evenly bg-white w-full h-20 shadow-xl'>
      <span className={`bg-${color}`}>Ejercicio y actividad</span><input type="checkbox" value="1" onClick={handleCategories}></input>
      <span className={`bg-${color}`}>Enfermadades comunes</span><input type="checkbox" value="2" onClick={handleCategories}></input>
      <span className={`bg-${color}`}>Cuidado Veterinario</span><input type="checkbox" value="3" onClick={handleCategories}></input>
      <span className={`bg-${color}`}>Primero Auxilios</span><input type="checkbox" value="4" onClick={handleCategories}></input>
      <span className={`bg-${color}`}>Alimentacion adecuada</span><input type="checkbox" value="5" onClick={handleCategories}></input>
      <span className={`bg-${color}`}>Higiene y aseo</span><input type="checkbox" value="6" onClick={handleCategories}></input>
      <span className={`bg-${color}`}>Resetas caseras</span><input type="checkbox" value="7" onClick={handleCategories}></input>
    </nav>
  );
}
