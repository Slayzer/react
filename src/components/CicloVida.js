import React, { Component } from 'react';

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(4, 'El componente a sido eliminado del DOM');
  }

  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, 'El componente se inicializa, aun No esta en el DOM');

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(2, 'El compenente ya se encuentra en el DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(3, 'El estado o las props del componente han cambiado');
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  pausar = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    console.log(
      1,
      'El componente se dibuja o redibuja por algun cambio en el DOM'
    );
    return (
      <>
        <h2>Ciclo de vida de los componentes de clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.pausar}>Pausar</button>
      </>
    );
  }
}
