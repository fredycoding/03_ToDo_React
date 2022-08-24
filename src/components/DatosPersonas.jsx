export const DatosPersonas = ({dato}) => {
    return (

        <div className='W-full m-5' >
            <div className="">
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
                </div>
            </div>
        </div>
    )
}


