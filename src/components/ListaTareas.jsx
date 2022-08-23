export const ListaTareas = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="text-center font-black uppercase text-xl text-zinc-600">Resultados</h2>
      <div className=" bg-white rounded-md p-7">
        <div>
          <label className="block text-gray-600 uppercase font-bold">
            👨‍💼 Nombres:
          </label>
        </div>

        <div className="mt-5">
          <label className="block text-gray-600 uppercase font-bold">
            ☎ Celular:
          </label>
        </div>

        <div className="mt-5">
          <label
            htmlFor="correo"
            className="block text-gray-600 uppercase font-bold"
          >
            📪 Correo electrónico:
          </label>
        </div>

        <div className="mt-5">
          <label className="block text-gray-600 uppercase font-bold">
            📆 Fecha de nacimiento:
          </label>
        </div>
      </div>
    </div>
  );
};
