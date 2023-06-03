import SectionPost from './components/sectionPost';
import SectionMakeDiferrence from './components/SectionMakeDiferrence';
import SliderLanding from './components/slider';
import NuestraMision from './components/NuestraMision';
import RecentRescuedAnimals from './components/RecentRescuedAnimals';
import ReviewsSection from './components/ReviewsSection';

export default function page() {
  return (
    <main className="w-full flex flex-col flex-grow justify-center items-center gap-20 mb-10">
      <SliderLanding />
      <NuestraMision />
      <RecentRescuedAnimals />
      <SectionMakeDiferrence />
      <SectionPost />
      <ReviewsSection />
    </main>
  );
}
