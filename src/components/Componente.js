// import React, { Component } from "react";

// class Componente extends Component{
//     render(){
//         return <h2>Hola soy el primer componente</h2>
//     }
// }

export default Componente;


// ##otras formas de agregar un msj en un componente

// class Componente extends Component{
//     render(){
//         return <h2>{this.props.msg}</h2>
//     }
// }

// <Componente msg="hola soy un componente ejem 1"/>


function Componente(props) {
     return <h2>{props.msg}</h2>;
}


// const Componente = props => <h2>{props.msg}</h2>

// <Componente msg="hola soy un componente ejem 2"/>