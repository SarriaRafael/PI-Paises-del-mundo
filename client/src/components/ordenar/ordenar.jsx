import { useState } from "react"
import { useDispatch } from "react-redux";
import { ordenar } from "../../actions";
import Lista from "../lista/lista";
import './ordenar.css'

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
        <label  className="makle" >Ordenar por:  </label >  
        <div className="mak" >
          <input type="radio" name="ordenlist" value="name"  /><label  className="makle" >  Orden alf </label > 
          <input type="radio" name="ordenlist"value="population" /> <br/><label  className="makle" >  Habitantes </label > 
          <input type="checkbox" id="cbox1"  onChange={() => setUpdw(!updw)}  />   <label  className="makle" > Asendente / Desenden  </label > 
        </div>
      </div>
      <Lista/>
          
                         
      </div>  
           
        }