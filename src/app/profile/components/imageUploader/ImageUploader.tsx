'use client';
import useUserSesion from '@/hook/userSesion';
import { useAppDispatch } from '@/redux/hook';
import { UpdateById } from '@/redux/thunk';
import React from 'react';
import styles from './ImageUploader.module.css';
const ImageUploader = ({ User, rol }: any) => {
  const { sesion } = useUserSesion();
  const dispatch = useAppDispatch();
  const handleImageUpload = async (event: any) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('profilePic', file);
    var obj = {
      file: data,
      id: User.id,
      sesion: {
        id: User.id,
        rol: rol,
        token: sesion?.token,
      },
      tipe: 'image',
    };

    dispatch(UpdateById(obj));
    // Reemplaza 'tu_upload_preset' con tu propio upload preset de Cloudinary
    // Envía la imagen a Cloudinary utilizando fetch
  };

  return (
    <label className={styles.fileInputLabel}>
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageUpload}
        className={styles.fileInput}
      />
      <span className={styles.fileInputText}>Cambiar imagen</span>
    </label>
  );
};

export default ImageUploader;
