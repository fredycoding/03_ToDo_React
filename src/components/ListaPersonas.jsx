import { useEffect } from "react";
import { DatosPersonas } from "./DatosPersonas";

export const ListaPersonas = ({ datosFormulario, setDato, eliminarDato }) => {
  

  return (
    <div className="lg:overflow-y-scroll mt-2 h-[800px]">
     
      {datosFormulario.map((datos) => (   
        <div key={Math.random().toString(36).slice(2)}>
        <DatosPersonas dato={datos} setDato={setDato} eliminarDato={eliminarDato} />  
        </div>   
        
      ))}
    </div>
  );
};
