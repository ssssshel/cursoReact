import React, {Fragment} from 'react';

// JSX

const Jsx = () => {

  const Temperatura = 21;

  return ( 
    <Fragment>
      <h2>Frío o Calor</h2>
      <h4>
        {
          Temperatura > 20 ? 'Calor' : 'Frío'
        }
      </h4>
    </Fragment>
  );
}
 
export default Jsx;
