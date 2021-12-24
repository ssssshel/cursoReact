import React, {Fragment, useState} from 'react';

const Formulario = () => {

  const [datos, setDatos] = useState({
    nombre: '',
    apellido: ''
  })

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const enviarDatos = (e) => {
    e.preventDefault()
    console.log(datos.nombre + ' ' + datos.apellido)
  }

  return ( 
    <Fragment>
      <h1>Formulario</h1>
      <form onSubmit={enviarDatos}>
        <input
          placeholder='Ingrese nombre'
          type='text'
          name='nombre'
          onChange={handleInputChange}
        ></input>
        <input
          placeholder='Ingrese apellido'
          type='text'
          name='apellido'
          onChange={handleInputChange}
        ></input>
        <button type='submit'>Enviar</button>
      </form>
      <h3> {datos.nombre} - {datos.apellido} </h3>
    </Fragment>
   );
}
 
export default Formulario;