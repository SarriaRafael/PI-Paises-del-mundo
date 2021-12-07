import { useSelector } from "react-redux"
import Elelmentos from '../elementos/elementos'
import { useState } from "react";


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
      setIni(ini+10);
      setNum(num+10);
  }

  function anterior(e) {
      e.preventDefault()
      setIni(ini-10);
      setNum(num-10);
  }


  return <div>
      <button onClick={anterior} > <img src ='./botonizq' alt='<=' /> </button>  <button onClick={siguiente} > <img src ='./botonder' alt=' =>' /></button>
        <div>Desde: {ini},  Hasta: {num}  </div>
      {decenas()}
      {arrlist.map((w) =>{
          return <Elelmentos key= {key++} id={w.id}  name= {w.name} imgflag={w.imgflag} continent= {w.continent} />
       })}

      
  </div>
}
