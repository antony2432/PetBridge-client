'use client';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Dropzone from './DropZone';
import validationSchema from './validationSchema';
import axios from 'axios';
import { FormValues } from './interfaces/FormValues.interface';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from '@material-tailwind/react';





<Dropzone form={undefined} />;

const ModalPostSend: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('description', values.description);
      formData.append('userId', values.userId);
      if (values.file) {
        formData.append('file', values.file[0]);
      }
      const response = await axios.post('http://localhost:3000/publications_user/publication', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        description: '',
        file:null,
        userId:'a342e4b2-aeb6-424b-961e-bca4271f4db3',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
         <>
      <input
        type="text"
        onClick={handleOpen}
        placeholder="En que estas pensando......"
        className="bg-[#F1F5F9] col-span-7 h-16 rounded-2xl p-5"
      />
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>Crea tu Publicación</DialogHeader>
          <button
            className="mr-3 h-10 w-10 rounded-full text-black bg-blue-gray-200 hover:bg-blue-gray-600 hover:text-white"
            onClick={handleOpen}
          >
            X
          </button>
        </div> 
        
      <Form>
      <DialogBody divider>
        <Field name="description">
          {({ field, form }) => (
            <div>
              <label htmlFor="description">Descripción:</label>
              <Textarea type="text" id="description" {...field} />
              <ErrorMessage name="description" component="div" />
            </div>
          )}
        </Field>

        <Field name="file">
          {({ field, form }) => (
            <div>
              <label htmlFor="imagen">Imagen:</label>
              <Dropzone form={form} />
              <ErrorMessage name="imagen" component="div" />
            </div>
          )}
        </Field>
        </DialogBody>
        <DialogFooter className="space-x-2">
        
        <Button type='submit' variant="gradient" color="green" onClick={handleOpen} disabled={submitting}>
          {submitting ? 'Publicando...' : 'Publicar'}
        </Button>
        </DialogFooter>  
      </Form>
      </Dialog>
      </>
    </Formik>
  );
};

export default ModalPostSend;