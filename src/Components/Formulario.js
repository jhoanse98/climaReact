import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({busqueda, guardarBusqueda, guardarConsulta}) => {

    //el Input y luego el label es por los estilos de materialize que aplica en ese orden
    //el label no se usa con for debido a que es una palabra reservada de JS, por lo tanto se usa htmlFor
    

    const {ciudad, pais} = busqueda;

    //state para error (validar el formulario)

    const [error, guardarError] = useState(false);

    //Guardar en el state lo del formulario
    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value,
        })

    }

    const handleSubmit = e => {
        e.preventDefault();

        //validar formulario
        if( pais.trim() === "" || ciudad.trim() === "" ){
            guardarError(true);
            return;
        }

        guardarError(false);

        //Avisar que la consulta está lista
        guardarConsulta(true);
    }

    

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}>
                        <option value="">--Seleccionar País--</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="CO">Colombia</option>
                        <option value="AR">Argentina</option>
                        <option value="PE">Perú</option>
                        <option value="ES">España</option>
                        <option value="CR">Costa Rica</option>


                </select>
                <label htmlFor="pais">Pais: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                ></input>
            </div>
        </form>
      );
}
 
export default Formulario;