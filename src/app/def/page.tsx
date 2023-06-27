'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { data: sesionGoogle, status } = useSession();
  const loading = status === 'loading';
  const router = useRouter();
  useEffect(() => {
    if (!sesionGoogle && !loading) {
      router.push('/login');
    } else {
      if (loading === false) {
        const credential = {
          email: sesionGoogle?.user?.email,
          google: true,
          firstName: sesionGoogle?.user?.name,
          image: sesionGoogle?.user?.image,
        };
        fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credential),
        })
          .then((response) => response.json())
          .then((data) => {
            const dataUser = data.userInformation;
            localStorage.setItem('userSesion', JSON.stringify(dataUser));
            router.push('/home');
          })
          .catch((err) => console.log(err));
        console.log({ credential });
      }
    }
  }, [sesionGoogle, loading, router]);
  return (<></>);
}
