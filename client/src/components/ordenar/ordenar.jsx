import { useState } from "react"
import { useDispatch } from "react-redux";
import { ordenar } from "../../actions";
import Lista from "../lista/lista";

export default function Ordenar(){
  //  0= ningun selector, 1= alfabetico, 2= poblacion
  const [ordpor, setOrdpor] = useState(null);  
  const [updw, setUpdw] = useState(false);
  let dispatch= useDispatch();

  dispatch(ordenar({ordpor,updw}));
  console.log("ordenar por: "+ordpor+" en orden: "+ updw);
  

  function ordenarpor(e){
    console.log(e.target.value);
    if(e.target.value==='name'||e.target.value==='population')
    setOrdpor(e.target.value);
    
    //dispatch(ordenar({ordpor,updw}));
    //console.log("ordenar por: "+ordpor+" en orden: "+ updw);
  }


  return <div id='orden' > 
                 
      <div onChange={(e)=>ordenarpor(e)} >
        <h2>Ordenar por:  </h2>  
        <input type="radio" name="ordenlist" value="name"  />Orden alf <br/>
        <input type="radio" name="ordenlist"value="population" />Habitantes <br/>
        <input type="checkbox" id="cbox1"  onChange={() => setUpdw(!updw)}  />  Asendente / Desenden 
        
      </div>
      <Lista/>
          
                         
      </div>  
           
        }