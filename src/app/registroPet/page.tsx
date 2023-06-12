'use client';
import Formulario from '../pets/components/formularioPet/FormularioPet';

export default function RegistroPet() {
  return (
    <div
      className="py-5 flex-grow flex justify-center items-center"
      style={{ backgroundImage: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' }}
    >
      <Formulario />
    </div>
  );
}
