export const DatosPersonas = ({ dato }) => {
  return (
    <div className="W-full m-5 transition ease-in-out delay-150">
     
        <div className=" bg-white rounded-md p-7">
          <div>
            <label className="block text-gray-600 uppercase font-bold">
              👨‍💼 Nombres: {dato.nombre}
            </label>
          </div>

          <div className="mt-5">
            <label className="block text-gray-600 uppercase font-bold">
              ☎ Celular: {dato.celular}
            </label>
          </div>

          <div className="mt-5">
            <label
              htmlFor="correo"
              className="block text-gray-600 uppercase font-bold"
            >
              📪 Correo electrónico: {dato.correo}
            </label>
          </div>

          <div className="mt-5">
            <label className="block text-gray-600 uppercase font-bold">
              📆 Fecha de nacimiento: {dato.fechanacimiento} 
            </label>
          </div>

          <button className="bg-green-800 hover:bg-green-600 hover:drop-shadow-lg mt-3 py-1 px-4 rounded-md font-bold drop-shadow-md text-white">Editar</button>
          <button className="bg-red-600 hover:bg-red-800 hover:drop-shadow-lg mt-3 py-1 px-4 rounded-md font-bold drop-shadow-md text-white float-right">Eliminar</button>

        </div>
      
    </div>
  );
};
