import { Link } from "react-router-dom"
import { useParams } from "react-router";
import axios from 'axios'
import { useEffect, useState } from "react";

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

    return <div>
        <h4> <Link to= "/home" > HOME </Link>  </h4> 
        <h3>El Detalle de cada País</h3>
        <div> {unpais.name} </div>
        <div> {unpais.continent} </div>
        <div> {unpais.capital} </div>
        <div> {unpais.subregion} </div>
        <div> {unpais.area} </div>
        <div> {unpais.population} </div>
        <div> {unpais.id} </div>
        { turis.map(m =>  <div key = {m.name} >  Actividad:   {m.name}  season:   {m.season}  difficulty {m.difficulty}  </div>)}
       
       
        
        
               
 
    </div>
}

// <div> {unpais.activities.map(act=>{
//             <div> {act.name} </div>
//         })} </div>