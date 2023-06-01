import SectionPost from './components/sectionPost';
import SectionMakeDiferrence from './components/SectionMakeDiferrence';

export default function page() {
  return (
    <main className='w-full flex flex-col justify-center items-center gap-10 my-10'>
      <h1 className="text-3xl font-bold">Landing</h1>
      <SectionMakeDiferrence />
      <SectionPost />
    </main>
  );
}
