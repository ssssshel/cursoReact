# cursoReact

## 1. Para iniciar un proyecto con React

> Escribir en la terminal
`npx create-react-app nombre-app`

> Iniciar según script
`npm start`

> Dar si según corresponda

> Instalar las siguientes extensiones

- dsznajder.es7-react-js-snippets
- joshjg.generate-react-component
- discountry.react-redux-react-router-snippets
- xabikos.reactsnippets
- burkeholland.simple-react-snippets
- React Developer Tool (chrome)

## 2. Estructura Básica de un componente React

> Imports de módulos y otros componentes

~~~
import React from 'react'
import Contador from './components/Contador'
import Jsx from './components/Jsx'
import Lista from './components/Lista'
~~~

> Función principal

~~~
function App() {
  return (
    <div className="App">
      <h1>Hola mundo React</h1>
      <Contador/>
      <Jsx/>
      <Lista/>
    </div>
  );
}
~~~
### Ojito:
- Dentro de cada función solo puede haber un elemento como máximo, usar Fragment para eso
- El número de funciones que se pueden declarar dentro de dicha función es ilimitado.

> export final

~~~
export default App;
~~~

## 3. onChange, onSubmit y manejo de arrays

- onChange detecta los cambios ne tiempo real
- onSubmit se coloca dentro de etiquetas form para detectar nuevos cargos que se realicen


Con react no es posible utilizar funciones como push, pop, etc para manipular estructuras de datos.
En su lugar se hace uso de métodos alternativos:

~~~
const Lista = () => {

  // El primer elmento de la constante define los elementos que forman parte de "useState", mientras que la segunda representa las funcionalidades que serán implementadas.


  const [arrayNumero, setArrayNumero] = useState([1, 2, 3, 4, 5])

  const [numero, setNumero] = useState(6)

  //Se hace uso del operador de propagación "..." con el fin de reemplazar a la función push y mantener
  los elementos originales de un array sin importar los cmabios.

  const agregarElemento = () => {
    setNumero(numero + 1)
    setArrayNumero([
      ...arrayNumero,
      numero
    ])
  }
  
  // Se emplea "map" para realizar busquedas en el array como tambien "key" con el fin de identificar más facilmente a los elementos que han cambiado

  return ( 
    <Fragment>
      <h2>Lista</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {
        arrayNumero.map((item, index)=>
          <p key={index}>{item} - {index} </p>
        )
      }
    </Fragment>
   );
}
~~~


## 4. Props

Para compartir datos entre distintos módulos se hacen uso de los props.

EJEMPLO: 

Origen:
~~~
function App() {
  return (
    <div className="App">
      <Saludo persona='Juanito'/>
      <Saludo persona='Maria'/>
      <Saludo persona='Carolina'/>
      
    </div>
  );
}
~~~

Destino:

~~~
const Saludo = (props) => {
  console.log(props)
  return ( 
    <Fragment>
      <h1>Saludos {props.persona} </h1>
    </Fragment>
   );
}
~~~


- Ojito: En React en lugar de class se usa el atributo className
