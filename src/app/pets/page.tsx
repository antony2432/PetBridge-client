'use client';
import CardsPets from './components/cardsPets';
import FiltersPets from '../components/FiltersPets/Index';
export default async function Pets() {
  return (
    <main
      className="w-full h-full flex-grow flex flex-col items-center"
      style={{ backgroundImage: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' }}
    >
      <FiltersPets/>
      <CardsPets/>
    </main>
  );
}
