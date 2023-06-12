import { useAppDispatch } from '@/redux/hook';
import { PostPet } from '@/redux/slice/pets';
import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent, useRef } from 'react';

import ButtonSend from './AlertSend';
type FormData = {
  nombre: string;
  city: string;
  state: string;
  country: string;
  edad: number;
  descripcion: string;
  files: FileList | null;
  tamaño: string;
  especie: string;
  genero: string;
  telefono: string;
  email: string;
  otros: string;
  edadUnidad: string;
};

export default function Formulario() {
  const dispatch = useAppDispatch();
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    city: '',
    country: '',
    state: '',
    edad: 0,
    descripcion: '',
    files: null,
    tamaño: '',
    especie: '',
    genero: '',
    telefono: '',
    email: '',
    otros: '',
    edadUnidad: '',
  });
  const checkFormCompletion = () => {
    const {
      nombre,
      city,
      country,
      state,
      edad,
      descripcion,
      tamaño,
      especie,
      genero,
      telefono,
      email,
    } = formData;
  
    const isComplete =
      nombre.trim() !== '' &&
      city.trim() !== '' &&
      country.trim() !== '' &&
      state.trim() !== '' &&
      edad !== 0 &&
      descripcion.trim() !== '' &&
      tamaño !== '' &&
      especie !== '' &&
      genero !== '' &&
      telefono.trim() !== '' &&
      email.trim() !== '';
  
    setIsFormComplete(isComplete);
  };

  const [imagenPreviaUrls, setImagenPreviaUrls] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    checkFormCompletion();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const { name } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files }));
  
    if (files) {
      const urls: string[] = [];
      for (let i = 0; i < Math.min(files.length, 5); i++) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target && typeof event.target.result === 'string') {
            urls.push(event.target.result);
            if (urls.length === Math.min(files.length, 5)) {
              setImagenPreviaUrls(urls);
            }
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const PetData = {
      name: formData.nombre,
      city: formData.city,
      description: formData.descripcion,
      specie: formData.especie,
      gender: formData.genero,
      status: 'homeless',
      country: formData.country,
      state: formData.state,
      as_id: 'd9308d02-abf7-4772-881b-76c36a48c2df',
      weight: formData.tamaño,
      age_M: formData.edadUnidad === 'mounth' ? formData.edad : 0,
      age_Y: formData.edadUnidad === 'year' ? formData.edad : 0,
    };

    const formDataToSend = new FormData();

    // for (const key in PetData) {
    //   formDataToSend.append(key, PetData[key]);
    // }
    for (const key in PetData) {
      const value = PetData[key as keyof typeof PetData].toString();
      formDataToSend.append(key, value);
    }

    // Agregar las imágenes al FormData
    if (formData.files) {
      for (let i = 0; i < Math.min(formData.files.length, 5); i++) {
        formDataToSend.append('file', formData.files[i]);
      }
    }
    console.log(PetData);
    console.log(formDataToSend);
    dispatch(PostPet(formDataToSend));
    
     
  };
  const handleEdadUnidad = (e:ChangeEvent < HTMLSelectElement> ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }; 
  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className='flex justify-center w-[90vw] '>
      <form onSubmit={handleSubmit} className='mt-20 max-w-7xl w-full border bg-white  rounded-xl text-start pb-10 mb-2 '>
        <Typography className='text-4xl md:text-5xl text-center p-5 font-bold text-[#f0a83e]'>
          Formulario para la Mascota
        </Typography>
        <div className='grid  gap-10 '>
          <div className='sm:px-10 flex flex-col justify-center items-center'>
            <h3 className='text-2xl text-center sm:text-start '>Información de la mascota</h3>
            <p className='mb-5'>(rellanar todos los campos)</p>
            <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10  pb-10 w-11/12'>
              <Input  label='Nombre de la mascota' type='text' id='nombre' name='nombre' onChange={handleChange} required />
              <Input label='Pais' type='text' id='country' name='country' onChange={handleChange} required />
              <Input label='Estado' type='text' id='state' name='state' onChange={handleChange} required />
              <Input label='Ciudad' type='text' id='city' name='city' onChange={handleChange} required />

         <div className='grid grid-cols-2 sm:min-w-[190px] sm:justify-center gap-0 '>
           
            <input className='border w-full sm:min-w-[90px] border-blue-gray-400 rounded-lg h-10 text-center' placeholder='Edad' type='number' id='edad' name='edad' onChange={handleChange} required />
           <select  className='   border w-full sm:min-w-[90px] border-blue-gray-400 rounded-lg h-10 text-center' name="edadUnidad" id="edadUnidad" onChange={handleEdadUnidad}>
           <option value="" hidden>Unidad</option>
           <option value="mounth">Meses</option>
           <option value="year">Años</option>
           </select>
           
           </div>    

              <Input label='Tamaño en Kg' type='number' id='tamaño' name='tamaño' onChange={handleChange} required />
              <Textarea label='Descripcion - historia' id='descripcion' name='descripcion' onChange={handleChange} required />
              <div className='file-input-container flex items-center flex-col min-w-[320px] col-span-2 lg:row-span-2 lg:col-span-1'>
                <input
                  type='file'
                  id='imagenes'
                  name='files'
                  accept='image/*'
                  multiple
                  onChange={handleImageChange}
                  className='hidden'
                  ref={fileInputRef}
                  required
                />
                <Button
                  type='button'
                  className='browse-button py-2 px-4 rounded border border-gray-400 m-10 bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50'
                  onClick={handleBrowseClick}
                >
                  Subir fotos
                </Button>
                <div className='grid grid-cols-3 mt-5'>
                  {imagenPreviaUrls.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      width={300}
                      height={300}
                      alt={`Imagen ${index + 1}`}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '5px', border: '3px double #f0a83e' }}
                    />
                  ))}
                </div>
              </div>
              <select
                className='border border-blue-gray-400 rounded-lg h-10 text-center'
                id='especie'
                name='especie'
                value={formData.especie}
                onChange={handleChange}
                required
              >
                <option hidden>Selecciona la especie</option>
                <option>Gato</option>
                <option>Perro</option>
                <option>Otra Especie</option>
              </select>
              <select
                className='border border-blue-gray-400 rounded-lg h-10 text-center xl:mb-40'
                id='genero'
                name='genero'
                value={formData.genero}
                onChange={handleChange}
                required
              >
                <option hidden>Seleccione un género</option>
                <option value='male'>Macho</option>
                <option value='female'>Hembra</option>
              </select>
            </div>
          </div>
          <div className=' px-10 h-max'>
            <h3 className='text-2xl my-5'>Información de contacto</h3>
            <div className='grid gap-5'>
              <Input label='Teléfono de contacto' type='tel' id='telefono' name='telefono' onChange={handleChange} required />
              <Input label='Email' type='email' id='email' name='email' onChange={handleChange} required />
              <Input label='otros medios de contacto' id='otros' name='otros' onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
        {isFormComplete && (
            // <Button className='m-10 bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50' type='submit' value='Enviar'>
            //   Registrar mascota
            // </Button>
            <ButtonSend datosEnviados={formData}/>
        )}
        </div>
      </form>
    </section>
  );
}