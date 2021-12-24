import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {

  const {register, formState: {errors}, handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return ( 
    <Fragment>
      <h1>Formulario 2</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          {
            ...register("titulo", 
              {
                required: true,
                maxLength: 10
              }
            )
          }
        ></input>
        {errors.titulo && "Llenar titulo"}
        <button>Agregar</button>
      </form>
    </Fragment>
   );
}
 
export default FormHook;
