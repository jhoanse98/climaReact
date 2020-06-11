import React,{Fragment, useState, useEffect} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';



function App() {


  //State para la busqueda en la Api
 const[busqueda, guardarBusqueda] =useState({
   ciudad: '',
   pais:'',
 });

 //State para generar la consulta
 const [consulta, guardarConsulta] = useState(false)

 const {ciudad, pais} = busqueda;

 //useEffect para realizar la consulta en el momento que este lista
 useEffect(()=>{
   console.log(ciudad);
 }, [consulta]);

  return (
    <Fragment>
      <Header
        titulo='Clima React-app'
      />

      <div className="contenedor-form" >
        <div className="container">
          <div className="row">
            <div className="col m6 s12 "> {/*para columnas medianas toma 6 de las 12 y para pequeñas toma las 12 */}
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
              />
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
