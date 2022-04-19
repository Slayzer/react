import React, {Component} from "react";
import data from "../helpers/data.json";

function ElementoLista (props){
    return(
        <li>
            <a href={props.paginas.web} target="_blank">{props.paginas.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props)
        this.state = {
            seasons:["Primavera", "Verano", "Invierno", "Otoño"]
        }
    }
    render() {
        console.log(data);
        return (
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del Año:</h3>
                <ol>
                    {
                        this.state.seasons.map((elemento,index) => <li key={index}>{elemento}</li>)
                    }
                </ol>
                <h3>Frameworks Frontend Javascript</h3>
                <ul>{data.frameworks.map((elemento, index) => <ElementoLista key={index} paginas={elemento}/>)}</ul>
            </div>
        )
    }
}