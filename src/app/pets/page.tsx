'use client';
import CardsPets from './components/cardsPets';
import FiltersPets from '../components/FiltersPets/Index';
import InputBar from './components/inputBar';
export default async function Pets() {
  return (
    <main
      className="w-full h-full flex-grow flex flex-col items-center"
      style={{ backgroundImage: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' }}
    >
      <div className='flex flex-col  items-center'>
      <InputBar/>
      <FiltersPets/>
      </div>
      <CardsPets/>
    </main>
  );
}
