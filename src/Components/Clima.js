import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultadoConsulta}) => {

    //extraemos la informacion de resultado(consulta del clima)
    
    const {name, main} = resultadoConsulta; 
    
    if(!name){
        return null;
    }  //en caso que no haya un nombre en resultado, no se cargará el componente
    
    const kelvin = 273.15;
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>el clima de {name} es: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(1)} <span> &#x2103; </span>
                </p>
                <p>Temperatura Máxima 
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(1)} <span> &#x2103; </span>
                </p>
                <p>Temperatura Mínima 
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(1)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultadoConsulta : PropTypes.object.isRequired,
}
 
export default Clima;