import React, { Component } from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    console.log('Sumando');
    console.log(this);
    this.setState({ contador: this.state.contador + 1 });
  }

  restar() {
    console.log('Restando');
    console.log(this);
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clases ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow Functions
  sumar = () => {
    console.log('Sumando');
    console.log(this);
    this.setState({ contador: this.state.contador + 1 });
  };

  restar = () => {
    console.log('Restando');
    console.log(this);
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h2>Eventos en componentes de clases ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

//Simplificando el codigo con menos codigo

// function Boton(props) {
//     return <button onClick={props.myOnClick}>Boton hecho compontente</button>
// }

//Variable expresada

// const Boton = (props) => (
//     <button onClick={props.myOnClick}>Boton hecho compontente</button>
// )

//Destructuracion "{}"

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Boton hecho compontente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEventTarget);
    console.log(mensaje);
  };
  render() {
    return (
      <div>
        <h2>Mas sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, 'Hola pasando paramentro desde un evento 1')
          }
        >
          Saludar
        </button>

        {/* //Evento Personalizado
                <Boton onClick={(e) => this.handleClick(e,'Hola pasando paramentro desde un enveto')}></Boton> */}

        <Boton
          myOnClick={(e) =>
            this.handleClick(e, 'Hola pasando paramentro desde un evento 2')
          }
        ></Boton>
      </div>
    );
  }
}
