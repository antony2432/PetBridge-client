import SectionPost from './components/sectionPost';
import SectionMakeDiferrence from './components/SectionMakeDiferrence';
import SliderLanding from './components/slider';
import NuestraMision from './components/NuestraMision';
import AnimalesRescatadosRecientes from './components/AnimalitosRescatos';

export default function page() {
  return (
    <main className='w-full flex flex-col justify-center items-center gap-10 my-10'>
      
      <SliderLanding/>
      <NuestraMision/>
      <AnimalesRescatadosRecientes/>
      <SectionMakeDiferrence />
      <SectionPost />
    </main>
  );
}
