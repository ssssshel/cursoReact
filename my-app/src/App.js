import React from 'react'
// import Contador from './components/Contador'
// import Jsx from './components/Jsx'
// import Lista from './components/Lista'
// import Formulario from './components/Formulario'
// import FormHook from './components/FormHook';
// import Ejemplo1 from './components/Ejemplo1';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {

  const sujeto = {
    nombre: "Juanito",
    texto: 'Mi nombe es juanito xd'
  }

  return (
    <div className="App">
      <Saludo persona='Juanito'/>
      <Saludo persona='Maria'/>
      <Saludo persona='Carolina'/>
      <Comentario sujeto={sujeto} />
      <Comentario sujeto={sujeto} />

    </div>
  );
}

export default App;
