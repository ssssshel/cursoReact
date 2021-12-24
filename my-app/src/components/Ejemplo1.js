import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';


const Ejemplo1 = () => {

  const {register, formState:{errors}, handleSubmit} = useForm()

  const [Entradas, setEntradas] = useState([])

  const onSubmit = (data, e) => {
    console.log(data)
    setEntradas([
      ...Entradas,
      data
    ])
    e.target.reset()
  }

  return ( 
    <Fragment>
      <h1>Ejemplo 1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Ingrese título'
          {
            ...register("Titulo", {
              required : true,
              minLength : 8,
            })
          }
        ></input>
        {errors.Titulo?.type === 'required' && "Ingresar un título"}
        {/* {errors.Titulo?.minLength && "Mas de 8"} */}
        <input
          placeholder='Ingrese descripción'
          {
            ...register("Descripcion", {
              required : true,
            })
          }
        ></input>
        {errors.Descripcion?.type === 'required' && "Ingresar una descripción"}
        <button>Agregar</button>
      </form>

      <ul>
        {
          Entradas.map(item => 
            <li> {item.Titulo} - {item.Descripcion} </li>)
        }
      </ul>
    </Fragment>
   );
}
 
export default Ejemplo1;