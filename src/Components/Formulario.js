import React from 'react';

const Formulario = () => {
    //el Input y luego el label es por los estilos de materialize que aplica en ese orden
    //el label no se usa con for debido a que es una palabra reservada de JS, por lo tanto se usa htmlFor
    return (
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais">
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
        </form>
      );
}
 
export default Formulario;