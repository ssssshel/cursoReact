import React, {Fragment} from 'react';

// SE PUEDE USAR TANTO LA PALABRA CLAVE "PROPS" COMO EL NOMBRE MISMO DEL OBJETO EN CUESTIÓN ENTRE LLAVES "{sujeto}"

const Comentario = ({sujeto}) => {
  return ( 
    <Fragment>
      <h1>Comentarios</h1>
      <hr />
      <div className="media">
        <h5> {sujeto.nombre} </h5>
        {sujeto.texto}
      </div>
    </Fragment>
   );
}
 
export default Comentario;