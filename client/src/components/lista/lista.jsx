import { useSelector } from "react-redux"
import Elelmentos from '../elementos/elementos'
import { useState } from "react";
import  "./lista.css" 


export default function Lista(){
  var key=1 ;
  var arrlist=[];
  const [ini,setIni]=useState(0);
  const [num, setNum]= useState(10);
  
  let lospaises = useSelector((t)=>t.countries )

  //trae todol los paises
  console.log("Tercera:");
  //empesamos los filtros 


// esta seccion seleciona que segmento del arreglo se va a mostrar
  function decenas() {          
      arrlist= lospaises.slice(ini, num);
  }

  // botones flechas
  function siguiente(e){
      e.preventDefault()
      if (num<lospaises.length) {
        setIni(ini+10);
        setNum(num+10);
      }
      
  }

  function anterior(e) {
      e.preventDefault()
      if (ini>=10) {
        setIni(ini-10);
        setNum(num-10);
      }
      
  }


  return <div className="list" >
    <div>
      <button onClick={anterior} id="botonizq" />  
      <button onClick={siguiente} id="btnder" /> 
    </div>    
        <div className="indicador" >Desde: {ini},  Hasta: {num}   </div>
        <div className="indicador" >De un total de {lospaises.length} </div>
      {decenas()}
      {arrlist.map((w) =>{
          return <Elelmentos key= {key++} id={w.id}  name= {w.name} imgflag={w.imgflag} continent= {w.continent} />
       })}

      
  </div>
}
