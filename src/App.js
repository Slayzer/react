import logo from './logo.svg';
import Componente from './components/Componente';
import { Fragment } from 'react';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RendirezadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import AjaxApis from './components/AjaxApis';
import CicloVida from './components/ CicloVida';
import ScrollHooks from './components/ScrollHooks';
import './App.css';

function App() {
  let nombre = 'David';
  // (cambia a true)
  let auth = false;
  // (esto es un arreglo)
  let estaciones = ['Primavera', 'Otoño', 'Verano', 'Invierno'];
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre:</label>
          <br></br>
          <input type="text" id="nombre" />
          <h1>{nombre}</h1>
          <div className="kurt" />
          <p>
            {auth ? 'El usuario esta logueado' : 'El usuario no esta logueado'}
          </p>
          <ul>
            <div className="esta"></div>
            <p>Estaciones:</p>
            {estaciones.map((elemento, index) => (
              <li key={index}>{elemento}</li>
            ))}
          </ul>
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <section>
            <Componente msg="Hola soy un componente" />
            <hr />
            <Propiedades
              cadena="Esto es una cadena de texto"
              numero={19}
              booleano={true}
              arreglo={[1, 2, 3]}
              // (llaves del objeto JS y luego las llaves del obejto que quiero formar)
              funcion={(numero) => numero * numero}
              objeto={{ nombre: 'David', correo: 'davidsoftiner@gmail.com' }}
              elementoReact={<i>Esto es un elemento react, en letra italica</i>}
              componenteReact={
                <Componente msg="Soy un componenente react pasado como una props" />
              }
            ></Propiedades>
            <br />
            <hr />
            <Estado></Estado>
            <hr />
            <RenderizadoCondicional></RenderizadoCondicional>
            <hr />
            <RenderizadoElementos></RenderizadoElementos>
            <hr />
            <EventosES6></EventosES6>
            <hr />
            <EventosES7></EventosES7>
            <hr />
            <MasSobreEventos></MasSobreEventos>
            <hr />
            <ComunicacionComponentes></ComunicacionComponentes>
            <hr />
            <CicloVida></CicloVida>
            <hr />
            <AjaxApis></AjaxApis>
            <hr />
            <ScrollHooks></ScrollHooks>
          </section>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
