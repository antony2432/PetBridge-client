import SectionPost from './components/sectionPost';
import SectionMakeDiferrence from './components/SectionMakeDiferrence';
import SliderLanding from './components/slider';
import NuestraMision from './components/NuestraMision';
import AnimalesRescatadosRecientes from './components/AnimalitosRescatos';
import ReviewsSection from './components/ReviewsSection';

export default function page() {
  return (
    <main className='w-full flex flex-col justify-center items-center gap-20 mb-10 order-2'>
      <SliderLanding/>
      <NuestraMision/>
      <AnimalesRescatadosRecientes/>
      <SectionMakeDiferrence />
      <SectionPost />
      <ReviewsSection />
    </main>
  );
}
