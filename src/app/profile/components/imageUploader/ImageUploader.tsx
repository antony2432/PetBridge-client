'use client';
import { useAppDispatch } from '@/redux/hook';
import { UpdateById } from '@/redux/thunk';
import React from 'react';
import styles from './ImageUploader.module.css';
const ImageUploader = ({ User }: any) => {
  const dispatch = useAppDispatch();
  const handleImageUpload = async (event: any) => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('profilePic', file);
    var obj = {
      file: data,
      id: User[0].id,
      tipe: 'image',
    };
    console.log(User[0].id, 'hola');
    dispatch(UpdateById(obj));
    // Reemplaza 'tu_upload_preset' con tu propio upload preset de Cloudinary
    // Envía la imagen a Cloudinary utilizando fetch
    alert('Actualizado');
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
