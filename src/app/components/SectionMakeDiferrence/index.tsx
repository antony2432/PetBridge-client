export default function SectionMakeDiferrence() {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex justify-center items-center">
        <h1 className="flex text-[#3C2313] w-96 text-center text-xl font-bold sm:text-3xl">
          Descubre cómo Pet Bridge puede ayudarte a marcar la diferencia
        </h1>
      </div>
      <div className="flex text-white mt-5">
        <div className="flex flex-col w-full gap-5">
          <div className="flex justify-center  lg:justify-start">
            <div className="flex flex-col pl-5 pr-5 pt-7 w-full lg:w-3/4 items-center lg:items-start h-40 lg:h-auto p-7 bg-[#3688AE] hover:bg-cyan-800">
              <h1 className="text-2xl mb-2">Explora las opciones</h1>
              <p className="flex text-center lg:text-start w-72 lg:w-64 text-sm lg:text-xs">
                Explora las fundaciones y organizaciones de rescate de mascotas en nuestra
                plataforma.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col pl-5 pr-5 pt-7 w-full lg:w-3/4 items-center lg:items-end h-40 lg:h-auto p-7 bg-[#D2D38F]  text-end  hover:bg-LightOlive-800">
              <h1 className="text-2xl mb-2">Realiza una donación</h1>
              <p className="flex text-center lg:text-end w-80 lg:w-64 text-sm lg:text-xs">
                Apoya a tu fundación favorita realizando una donación directa o mediante campañas
                específicas.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col pl-5 pr-5 pt-7 w-full lg:w-3/4 items-center lg:items-start h-40 lg:h-auto p-7 bg-[#3688AE] hover:bg-cyan-800">
              <h1 className="text-2xl mb-2">Contacta a la fundación</h1>
              <p className="flex text-center lg:text-start w-72 lg:w-64 text-sm lg:text-xs">
                Ponte en contacto con la fundación para obtener más información sobre la mascota que
                te interesa.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col pl-5 pr-5 pt-7 w-full lg:w-3/4 items-center lg:items-end h-40 lg:h-auto p-7 bg-[#D2D38F]  text-end  hover:bg-LightOlive-800">
              <h1 className="text-2xl mb-2">Comparte tu historia</h1>
              <p className="flex text-center lg:text-end w-80 lg:w-64 text-sm lg:text-xs">
                Comparte tu experiencia de adopción y ayuda a inspirar a otros a unirse al
                movimiento de adopción responsable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
