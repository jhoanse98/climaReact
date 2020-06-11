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

  const consultarApi = async () =>{

    if(consulta){
      const appId = "93659cb3a4ee98da3ede1f896898849f"; //id generado por openweather para este proyecto

    const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

    // api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={your api key} direccion para consultar la api

    const respuesta = await fetch(url);
    const resultado= await respuesta.json();

    console.log(resultado);
    }
  }

  consultarApi();
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
