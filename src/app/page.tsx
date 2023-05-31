import SectionPost from './components/sectionPost';

export default function page() {
  return (
    <main className='flex flex-col justify-center items-center gap-10 my-10'>
      <h1 className="text-3xl font-bold">Landing</h1>
      <SectionPost />
    </main>
  );
}
