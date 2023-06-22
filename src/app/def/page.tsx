'use client';
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { data: sesionGoogle, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();
  useEffect(() => {
    if (!sesionGoogle && !loading) {
      router.push('/login');
    } else {
      console.log(sesionGoogle);
    }
  }, [sesionGoogle, loading, router]);
  return (
    <div>
      <h1>Validando...</h1>
      <button className="border px-3 py-2 rounded-md" onClick={() => console.log(sesionGoogle)}>
        getDatos
      </button>
      <button
        className="border px-3 py-2 rounded-md hover:bg-blue-300 hover:text-white"
        onClick={() => signOut({ callbackUrl: '/login' })}
      >
        Singout
      </button>
    </div>
  );
}
