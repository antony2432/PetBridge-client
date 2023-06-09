import { useAppDispatch } from '@/redux/hook';
import { PostPet } from '@/redux/slice/pets';
import { Button, Input, Textarea, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
type FormData = {
  nombre: string;
  ciudad: string;
  edad: number;
  descripcion: string;
  files: FileList | null;
  tamaño: string;
  especie: string;
  genero: string;
  telefono: string;
  email: string;
  otros: string;
};

export default function Formulario() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    ciudad: '',
    edad: 0,
    descripcion: '',
    files: null,
    tamaño: '',
    especie: '',
    genero: '',
    telefono: '',
    email: '',
    otros: '',
  });
  const router = useRouter();
  const [imagenPreviaUrls, setImagenPreviaUrls] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const { name, value } = e.target;
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
      city: formData.ciudad,
      description: formData.descripcion,
      specie: formData.especie,
      gender: 'male',
      status: 'homeless',
      country: 'mexico',
      state: 'tabasco',
      as_id: 'aef126a0-f8a1-4123-83f4-0ccc5105af8b',
     
    };

    const formDataToSend = new FormData();

    for (const key in PetData) {
      formDataToSend.append(key, PetData[key]);
    }

    // Agregar las imágenes al FormData
    if (formData.files) {
      for (let i = 0; i < Math.min(formData.files.length, 5); i++) {
        formDataToSend.append('file', formData.files[i]);
      }
    }

    dispatch(PostPet(formDataToSend));
    router.push('/pets');
     
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section className='flex justify-center w-screen '>
      <form onSubmit={handleSubmit} className='mt-20 max-w-7xl border bg-white  rounded-xl text-start '>
        <Typography className='text-4xl md:text-5xl text-center p-5 font-bold text-[#f0a83e]'>
          Formulario para la Mascota
        </Typography>
        <div className='grid  gap-10 '>
          <div className='px-10'>
            <h3 className='text-2xl text-center sm:text-start my-5'>Información de la mascota</h3>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10'>
              <Input label='Nombre de la mascota' type='text' id='nombre' name='nombre' onChange={handleChange} required />
              <Input label='Ciudad' type='text' id='ciudad' name='ciudad' onChange={handleChange} required />
              <Input label='Edad' type='number' id='edad' name='edad' onChange={handleChange} required />

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
                <option disabled>Selecciona la especie</option>
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
                <option disabled>Seleccione un género</option>
                <option value='masculino'>Masculino</option>
                <option value='femenino'>Femenino</option>
                <option value='otro'>Otro</option>
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
          <Button className='m-10 bg-GoldenYellow-500 hover:shadow-lg hover:shadow-GoldenYellow-500/50' type='submit' value='Enviar'>
            Registrar mascota
          </Button>
        </div>
      </form>
    </section>
  );
}
