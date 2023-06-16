import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  description: Yup.string().required('La descripción es requerida'),
  userId: Yup.string().required('La descripción es requerida'),
  file: Yup.mixed<File[]>().nullable(),
});
export default validationSchema;