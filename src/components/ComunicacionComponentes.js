import React, { Component } from 'react';
// import Propiedades from './Propiedades';

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicacion entre componentes</h2>
        <p>
          Contador: <b>{this.state.contador}</b>
        </p>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo nr 1"
        ></Hijo>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo nr 2"
        ></Hijo>
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
