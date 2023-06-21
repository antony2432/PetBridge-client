'use client';
import CardsPets from './components/cardsPets';
import FiltersPets from '../components/FiltersPets/Index';
import Paginate from '../components/Paginate/Paginate';



export default async function Pets() {

 
  return (
    <main
      className="w-full h-full flex-grow flex flex-col items-center p-2"
      style={{ backgroundImage: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' }}
    >
    <div><FiltersPets />  
      <h2 className=' font-bold text-4xl mt-5'>
        <span className='text-6xl text-DarkBrown-900'>Mis </span>
        <span className="text-5xl text-GoldenYellow-500">Mascotas</span>
         </h2>
      <CardsPets />
      <Paginate /> </div> 
    </main>
  );
}
