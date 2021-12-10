import { Link } from "react-router-dom"
import { useParams } from "react-router";
import axios from 'axios'
import { useEffect, useState } from "react";
import "./detalle.css"

export default function Detalle(){
    const [unpais, setUnpais]=useState({name: ""});
    const [turis, setTuris]= useState([]);
    let id= useParams().id;
    useEffect(()=>{  
                    axios.get('http://localhost:3001/countries/'+id)  
                    .then((pmf) => { 
                         let d= pmf.data
                         setUnpais(pmf.data);    
                         console.log(pmf.data)   
                         setTuris(pmf.data.activities)  ;

                         return d                 
                    }) 
                    .catch(error =>{console.log('esto es lo que pasa   :'+error)});
   
     },[id])        

    return <div id="tercer" >
        
    <div className="detallehead" >
        
        
        <div> <img src= {unpais.imgflag}/> </div>
        <div> Nombre:  {unpais.name} </div>
        <div> Continente: {unpais.continent} </div>
        <div> Capital: {unpais.capital} </div>
        <div> Subregion: {unpais.subregion} </div>
        <div> Area: {unpais.area} </div>
        <div> Poblacion: {unpais.population} </div>
        <div> ID:  {unpais.id} </div>
    </div>
        <div id='actvlist' >
             { turis.map(m =>  <div key = {m.name} > <div> Actividad:  </div> {m.name} <div>season:   {m.season}</div>  <div> difficulty {m.difficulty}</div>  </div>)}
        </div>
       
               
 <h2 className="volverhome" >El País: Sus características y sus Actividades turística  </h2>
 <h4> <Link to= "/home" className="volverhome" > HOME </Link>  </h4> 
</div>
}

// <div> {unpais.activities.map(act=>{
//             <div> {act.name} </div>
//         })} </div>