'use client';
import useUserSesion from '@/hook/userSesion';
import Image from 'next/image';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@material-tailwind/react';
import { Asociacion, FormData } from './interfaces/donations.interface';
import axios from 'axios';




export default function Page() {
  const [asociaciones, setAsociaciones] = useState<Asociacion[]>([]);

  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    asociacion:'',
    donation: '',
    message: '',
  });
 
  const { sesion } = useUserSesion();
  useEffect(() => {
    const token = sesion?.token;
    const fetchAsociaciones = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BACK}/asociaciones/get`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        setAsociaciones(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAsociaciones();
  }, [sesion?.token]);
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sesion);
    console.log(formData);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACK}/stripe/create-donations`, 
        {
          donation: formData.donation + '00',
          idAsociations: formData.asociacion,
          message: formData.message,
          email: formData.email,
        }, {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${sesion?.token}`,
          },
       
        });
      

      if (response.status === 201) {
        const json = response.data;
        console.log(json);
        router.push(json.link.urlDonation);
        
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    
    const { name, value } = e.target;
    
  
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    
  };

  return (
    <div className='bg-GoldenYellow-50'>
      <section className='overflow-hidden max-h-[600px] h-[70vh] flex justify-center'>
        <Image
          src='/img/donations.jpg'
          alt='hola'
          width={200}
          height={200}
          className='max-w-7xl w-full object-cover h-[600px] max-h-[600px] bg-black/50'
        />
        <article className='max-w-7xl w-full absolute bg-black/30 h-[70vh] max-h-[600px] flex justify-end'>
          <form
            action=''
            className='border border-black w-96  my-5 bg-black/60 mx-2 lg:mr-10'
            onSubmit={handleSubmit}
          >
            <h2 className='font-bold text-xl bg-GoldenYellow-500 py-2 text-center'>
              Con tu donación, ayudaras a una asociación que elijas a la recuperación y rehabilitación de animales en
              situación de calle
            </h2>
            <section className='flex flex-col gap-2 px-5 mt-5 justify-center items-center'>
              <Input
                label='Email'
                color='white'
                name='email'
            
                className='bg-black/20 '
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                label='Monto'
                type='number'
                color='white'
                name='donation'
                className='bg-GoldenYellow-900/70'
                value={formData.donation}
                onChange={handleChange}
              />
             <select
                name='asociacion'
                className='border border-blue-gray-200 bg-GoldenYellow-900/5 text-blue-gray-500 rounded-lg w-full flex placeholder:items-center text-sm p-3  outline-white focus:outline-0 ' 
                color='gray'
                value={formData.asociacion}
                onChange={handleChange}
                required
              >
                <option hidden value=''>Selecciona la asociacion</option>
                {asociaciones.map((asociacion) => (
                  <option key={asociacion.id} value={asociacion.id}>
                    {asociacion.nameOfFoundation}
                  </option>
                ))}
              </select>
              <textarea
                placeholder='Mensaje'
                name='message'
               
                className='border border-blue-gray-200 bg-GoldenYellow-900/5 text-white rounded-lg w-full flex placeholder:items-center placeholder:text-blue-gray-500 text-sm p-3  outline-white focus:outline-0 focus:border-white focus:border-2' 
                value={formData.message}
                onChange={handleChange}
              />
              <Button type="submit" className='bg-GoldenYellow-600 w-1/2'>enviar</Button>
            </section>
          </form>
        </article>
      </section>

      <section className='flex flex-col justify-center items-center my-10 text-center mx-5'>
        <h2 className='max-w-7xl font-semibold text-2xl text-center text-GoldenYellow-900 pt-5'>
          Al donar a una fundación, estás contribuyendo a un cambio positivo en la vida de los animales,</h2>
           <h3 className='max-w-7xl font-semibold text-2xl text-center text-GoldenYellow-900 '>
          y estás haciendo una diferencia en la comunidad en general.</h3>
          <p className='max-w-7xl font-semibold text-lg  text-GoldenYellow-900 pb-5'>Aquí te presentamos algunas razones para
          considerar donar:
          </p> 
        
        <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-y-5'>
          <article className='border border-GoldenYellow-600 box-decoration-slice p-2 flex flex-col gap-5 bg-GoldenYellow-300/70 rounded-s-2xl'>
            <h3 className='text-xl font-bold'>Salvamos vidas</h3>
            <p className='text-start text-GoldenYellow-800'>
              Cada día, miles de animales abandonados y maltratados buscan desesperadamente un hogar seguro. Tu donación
              permite rescatar, alimentar, brindar atención veterinaria y rehabilitar a estos animales, preparándolos para
              encontrar una familia amorosa. Al donar, te conviertes en un héroe para estos animales, dándoles una segunda
              oportunidad en la vida y asegurando que no sean olvidados.
            </p>
          </article>
<Image src='/img/salvamosvidas.png' alt='salvamos vidas' height={200} width={200} className='w-full max-h-56 object-cover rounded-e-2xl'/>
<Image src='/img/gatoresponsable.jpg' alt='salvamos vidas' height={200} width={200} className='w-full max-h-56 object-cover rounded-s-2xl'/>

          <article className='border border-GoldenYellow-600 box-decoration-slice p-2 flex flex-col gap-5 bg-GoldenYellow-300/70 rounded-e-2xl'>
            <h3 className='text-xl font-bold'>Fomentar la adopción responsable</h3>
            <p className='text-start text-GoldenYellow-800'>
              Las fundaciones se dedica a promover la adopción responsable de animales. Con tu apoyo, pueden llevar a cabo
              campañas de concienciación, eventos de adopción y programas de educación que ayudan a las personas a
              comprender la importancia de dar un hogar a un animal necesitado. Tu donación les permite llegar a más
              personas y marcar la diferencia en las vidas tanto de los animales como de los adoptantes.
            </p>
          </article>
          
          <article className='border border-GoldenYellow-600 box-decoration-slice p-2 flex flex-col gap-5 bg-GoldenYellow-300/70 rounded-s-2xl'>
            <h3 className='text-xl font-bold'>Construir una comunidad compasiva</h3>
            <p className='text-start text-GoldenYellow-800'>
              Al donar a una fundación, estás contribuyendo a la construcción de una comunidad más compasiva y consciente.
              Los animales necesitan nuestro apoyo y cuidado, y al trabajar juntos, podemos crear un impacto duradero en la
              forma en que los vemos y tratamos. Además, al invertir en la adopción de animales, estamos ayudando a reducir
              el número de animales sin hogar y a mejorar su calidad de vida.
            </p>
          </article>
          <Image src='/img/comunidadcomp.jpg' alt='salvamos vidas' height={200} width={200} className='w-full max-h-56 object-cover rounded-e-2xl'/>
          <Image src='/img/amorpet.avif' alt='salvamos vidas' height={200} width={200} className='w-full max-h-56 object-cover rounded-s-2xl'/>
          <article className='border border-GoldenYellow-600 box-decoration-slice p-2 flex flex-col gap-5 bg-GoldenYellow-300/70 rounded-e-2xl'>
            <h3 className='text-xl font-bold'>Transmitimos amor y gratitud</h3>
            <p className='text-start text-GoldenYellow-800'>
              Los animales rescatados a menudo han sufrido situaciones difíciles y han sido abandonados. Tu donación muestra
              tu amor y compasión hacia estos seres vivos, dándoles una oportunidad de tener una vida mejor. Los animales
              que encuentran un hogar a través de las fundaciones te estarán eternamente agradecidos por tu generosidad y
              podrás experimentar la alegría de haber cambiado sus vidas para siempre.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
// 'use client';
// import React, { useState } from 'react';
// import useUserSesion from '@/hook/userSesion';
// import { useRouter } from 'next/navigation';


// export default function Page() {
//   const router = useRouter();
//   const [urlDonation, setUrlDonation] = useState('');
//   const { sesion } = useUserSesion();
  
//   const createDonation = async () => {
//     const data = {
//       donation: 2011,
//       message: 'Dono porq me sobra la mony',
//       email: 'Simulacion@gmail.com',
//     };
    
//     try {
//       const response = await fetch('http://localhost:3000/stripe/create-donations', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           authorization: `Bearer ${sesion?.token}`,
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const json = await response.json();
//         setUrlDonation(json.link.urlDonation);
//         router.push(json.link.urlDonation);
//       } else {
//         console.error('Error:', response.status);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={createDonation}>Crear donación</button>
//       {urlDonation && (
//         <a href={urlDonation} target="_blank" rel="noopener noreferrer">
//           Ir a la página de donación
//         </a>
//       )}
//     </div>
//   );
// }

