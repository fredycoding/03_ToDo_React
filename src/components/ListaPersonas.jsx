import { DatosPersonas } from "./DatosPersonas";

export const ListaPersonas = ({ datosFormulario }) => {

  return (
    <div className="lg:overflow-y-scroll mt-2 h-[800px]">
     
      {datosFormulario.map((datos) => (        
        
        <DatosPersonas dato={datos} />   
        
      ))}
    </div>
  );
};
