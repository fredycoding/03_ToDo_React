import { useRef } from 'react';
export const DatosPersonas = ({ dato, setDato, eliminarDato }) => {
  
  const spanNombre=useRef()
  const spanId=useRef()
  const spanCelular=useRef()
  const spanFechaNacimiento=useRef()
  const spanCorreo=useRef()


  const handleEliminar = () =>{
    eliminarDato(dato.id)
  }

  const handleEditar = () => {  

    const objetoFormulario = {
      nombre: spanNombre.current.innerText,
      celular: spanCelular.current.innerText,
      correo: spanCorreo.current.innerText,
      fechanacimiento: spanFechaNacimiento.current.innerText,
      id: spanId.current.innerText
    }
    setDato(objetoFormulario)

    console.log(spanNombre.current.innerText)
    console.log(spanCelular.current.innerText)
    console.log(spanFechaNacimiento.current.innerText)
    console.log(spanCorreo.current.innerText)
    console.log(spanId.current.innerText) 
    console.log(dato)   
  }

  return (
    <div className="W-full m-5 transition ease-in-out delay-150">
      <div className=" bg-white rounded-md p-7">
        <div>
          <label className="block text-gray-600 font-bold">
            ☢ Id: <span ref={spanId}>{dato.id}</span> 
          </label>
        </div>

        <div className="mt-5">
          <label className="block text-gray-600 uppercase font-bold">
            👨‍💼 Nombres: <span ref={spanNombre}>{dato.nombre}</span> 
          </label>
        </div>

        <div className="mt-5">
          <label className="block text-gray-600 uppercase font-bold">
            ☎ Celular: <span ref={spanCelular}>{dato.celular}</span>
          </label>
        </div>

        <div className="mt-5">
          <label
            htmlFor="correo"
            className="block text-gray-600 uppercase font-bold"
          >
            📪 Correo electrónico: <span ref={spanCorreo}>{dato.correo}</span>
          </label>
        </div>

        <div className="mt-5">
          <label className="block text-gray-600 uppercase font-bold">
            📆 Fecha de nacimiento: <span ref={spanFechaNacimiento}>{dato.fechanacimiento}</span>
          </label>
        </div>

        <button className="bg-green-800 hover:bg-green-600 hover:drop-shadow-lg mt-3 py-1 px-4 rounded-md font-bold drop-shadow-md text-white" onClick={handleEditar}>Editar</button>
        <button className="bg-red-600 hover:bg-red-800 hover:drop-shadow-lg mt-3 py-1 px-4 rounded-md font-bold drop-shadow-md text-white float-right" onClick={handleEliminar}>Eliminar</button>

      </div>

    </div>
  );
};
