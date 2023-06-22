'use client';
import VerificationLanding from './components/VerificationLanding';

export default function Page({ params }:{ params:string[] }) {
  return (
        <main>
            <article className="w-full h-full flex flex-grow justify-center items-center">
                <VerificationLanding params={params}/>
            </article>
        </main>
  );
}