import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
return (
    <div className="probando">
       <h2>{props.porDefecto}</h2>
       <div className="probandoo">
       <ul>
           <li>{props.cadena}</li>
           {/* Operador ternario */}
           <li>{props.booleano ? "Verdadero" : "Falso"}</li>
           <li>{props.numero}</li>
           <li>{props.arreglo.join(",")}</li>
           {/* funcion .map para que eleve el arreglo al cuadrado (el map genera un arreglo basado en el anterior*/}
           <li>{props.arreglo.map(props.funcion).join(",")}</li>
           {/* formando una cadena de texto u concatenacion */}
           <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
           {/* volver un texto "react element" en un texto - letra italic */}
           <li>{props.elementoReact}</li>
           <li>{props.componenteReact}</li>
       </ul>
       </div>
  </div>
);
}

Propiedades.defaultProps = {
    porDefecto:"Las Props (Propiedades)"
};

// proptypes marca un valor como requerido

Propiedades.propTypes = {
    numero:PropTypes.number.isRequired,
};