// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { Button } from '@material-tailwind/react';
// import { useDropzone } from 'react-dropzone';
// import Image from 'next/image';
// import { FcImageFile } from 'react-icons/fc';



// const Dropzone: React.FC<{ form: any }> = ({ form }) => {

//   const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
//     accept: 'image/*',
//     multiple: true,
//     onDrop: (accepted, rejected) => {
//       const files = accepted;
//       form.setFieldValue('file', files);
//       form.setFieldError('file', '');
//       form.setFieldTouched('file', true);
  
  
  
       
//     },
//   });
  
//   return (
//       <div {...getRootProps()} className={isDragActive ? 'drag-active' : 'drag-inactive'}>
  
//         <input {...getInputProps()} />
        
//         <div className="dropzone-content m-2"><Button className='flex justify-center items-center'><FcImageFile className='text-4xl'/><p>Fotos/Videos</p></Button></div>
        
//         {acceptedFiles.length > 0 && (
//           <div className='flex gap-2 border-2  justify-center items-center'>
           
//             {acceptedFiles.map((file, index) => (
//               <div key={index} className=' '>
//                 {/* <p>{file.name}</p> */}
//                 <Image className="w-40  " src={URL.createObjectURL(file)} alt="Vista previa" width={100} height={100} />
//               </div>
//             ))}
//           </div>
//         )}
//         {fileRejections.length > 0 && (
//           <p>Error: {fileRejections[0].errors[0].message}</p>
//         )}
//       </div>
//   );
// };

// export default Dropzone;