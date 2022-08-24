import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { ListaTareas } from './components/ListaTareas'



function App() {

  const [tareas, setTareas] = useState([])
  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className="mt-20 md:flex">
        <Form tareas={tareas} setTareas={setTareas} />
        <ListaTareas datosFormulario={tareas} />
      </div>


    </div>
  )
}

export default App
