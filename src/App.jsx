import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { ListaPersonas } from './components/ListaPersonas'
import Swal from 'sweetalert2'



function App() {

  const [datosPersonas, setDatosPersonas] = useState([])
  const [dato, setDato] = useState({})


  useEffect(() => {

    const obtenerDatosLocalStorage = () => {
      const datosLocalStorage = JSON.parse(localStorage.getItem('datosPersonas')) ?? []; 
      console.log(datosLocalStorage)
      setDatosPersonas(datosLocalStorage)
    }
    obtenerDatosLocalStorage()
  }, []);

  useEffect(() => {
    localStorage.setItem('datosPersonas', JSON.stringify(datosPersonas))
  }, [datosPersonas])



  function eliminarDato(id) {
    Swal.fire({
      title: 'Esta seguro de eliminar este registro?',
      showDenyButton: true,
      confirmButtonText: 'Si Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const actualizarDatos = datosPersonas.filter(dato => dato.id !== id)
        setDatosPersonas(actualizarDatos)
        Swal.fire('Registro eliminado 🥶', '', 'info')
      } else if (result.isDenied) {
        Swal.fire('No se eliminó el registro 😂', '', 'info')
      }
    })
  }

  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className="mt-20 md:flex">
        <Form datosPersonas={datosPersonas} setDatosPersonas={setDatosPersonas} dato={dato} setDato={setDato} />
        <ListaPersonas datosFormulario={datosPersonas} setDato={setDato} eliminarDato={eliminarDato} />
      </div>

    </div>
  )
}

export default App
