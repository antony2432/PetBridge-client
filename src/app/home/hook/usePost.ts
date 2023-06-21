import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import useUserSesion from '@/hook/userSesion';

interface Fields {
  description: string;
  file: File | null;
}

interface Error {
  description: boolean | null;
  file: boolean | null;
}

export default function usePost() {
  const [isOpen, setIsOpen] = useState(false);
  const handleopen = () => {
    setIsOpen(!isOpen);
  };

  const initialField: Fields = {
    description: '',
    file: null,
  };

  const initalError: Error = {
    description: null,
    file: null,
  };

  const [field, setField] = useState<Fields>(initialField);
  const [error, setError] = useState<Error>(initalError);
  const [isDisable, setIsDisable] = useState(true);
  const { sesion } = useUserSesion();

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const fil = e.target.files?.[0];
    setField({ ...field, [name]: fil });
    setError((prev) => ({ ...prev, file: fil === undefined }));
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setField({ ...field, [name]: value });

    setError((prev) => ({ ...prev, description: value.length === 0 }));
  };

  const nameOfFile = field.file?.name;

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(field).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BACK!}/publications_user/publication`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${sesion?.token}`,
          },
        },
      );
      if (response.status === 201) {
        setIsOpen(false);
      }
    } catch (err) {
      const isAxiosError = (some: any): some is AxiosError => {
        return some.isAxiosError === true;
      };
      if (isAxiosError(err)) {
        if (err.response?.status === 400) alert(err.response?.data);
      }
    }
  };

  useEffect(() => {
    if (error.description === false && error.file === false) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [error]);

  return {
    isOpen,
    handleopen,
    onChange,
    error,
    nameOfFile,
    onChangeFile,
    onSubmit,
    isDisable,
  };
}
