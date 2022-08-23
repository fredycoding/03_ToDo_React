import { useState } from "react";


export const Form = () => {

  const [nombre, setNombre] = useState("")
  const [celular, setCelular] = useState("")
  const [correo, setCorreo] = useState("")
  const [fechanacimiento, setFechanacimiento] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("ENVIANDO DATOS...")

  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
       <h2 className="text-center font-black uppercase text-xl text-zinc-600">Datos personales</h2>
      <form className="bg-white shadow-md rounded-lg p-8" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="nombres"
            className="block text-gray-600 uppercase font-bold"
          >
            👨‍💼 Nombres
          </label>
          <input
            id="nombres"
            type="text"
            placeholder="Nombres completos"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="celular"
            className="block text-gray-600 uppercase font-bold"
          >
            ☎ Celular
          </label>
          <input
            id="celular"
            type="phone"
            placeholder="Número del celular"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={celular}
            onChange={(e)=> setCelular(e.target.value)}
            required
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="correo"
            className="block text-gray-600 uppercase font-bold"
          >
            📪 Correo electrónico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="Correo electrónico"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={correo}
            onChange={(e)=> setCorreo(e.target.value)}
            required
          />
        </div>

        <div className="mt-5">
          <label
            htmlFor="cumple"
            className="block text-gray-600 uppercase font-bold"
          >
            📆 Fecha de nacimiento
          </label>
          <input
            id="cumple"
            type="date"
            placeholder="Fecha de nacimiento"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fechanacimiento}
            onChange={(e)=> setFechanacimiento(e.target.value)}
            required
          />
        </div>

        <div className="mt-5">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded w-full">
            GUARDAR INFORMACIÓN
          </button>
        </div>
      </form>
    </div>
  );
};
