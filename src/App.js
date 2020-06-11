import React,{Fragment} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';



function App() {

 
  return (
    <Fragment>
      <Header
        titulo='Clima React-app'>
      </Header>

      <div className="contenedor-form" >
        <div className="container">
          <div className="row">
            <div className="col m6 s12"> {/*para columnas medianas toma 6 de las 12 y para pequeñas toma las 12 */}
              <Formulario>

              </Formulario>
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
