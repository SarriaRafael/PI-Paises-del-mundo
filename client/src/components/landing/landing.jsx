import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios'

import * as data from './activities.json';


// console.log(activtodos.default); 
// activtodos.default.map(k =>console.log(k));

export default function Landing(){
  
  const paises=  useSelector((t)=>t.countries )
  const activtodos = data;
  var campos2={
    name: '',
   season: '',
   difficulty: '',
   duration: '',
  idpais: ""
}

 async function rafp(e){
  e.preventDefault();
  await Promise.all(
  activtodos.default.map( (act) =>{
    campos2={
      name: act.name,
      season: act.season,
      difficulty: act.difficulty,
      duration: act.duration,
      idpais: ""
    };
    axios.post("http://localhost:3001/activity", campos2);
        
    return console.log("acios y axios") ;
    
  })) ;
  
       
   uniendo();
  }


  function uniendo(){
    activtodos.default.map(act =>{
      campos2={
        name: act.name,
        season: act.season,
        difficulty: act.difficulty,
        duration: act.duration,
        idpais: ""
      };
      unir();
    })
  }

 async function unir(){
   await Promise.all(
     paises.map(p => {
       campos2.idpais= p.id ;
       axios.post("http://localhost:3001/activity", campos2);
       return console.log("acios y axios  p p p p p acios y axios") ;
     })
   )
 }

      
  function lestgo(e){
   e.preventDefault();
     //window.location.href = 'http://localhost:3000/home';
  }

  

  return  <div>
          <h1>LANDING </h1>
          <form  >
          <button onClick= {rafp}   > Caragar actividades comunes por defecto </button>
          </form>

          <Link to="/home"> <button> ingresar</button>        </Link>
          
        </div>
          
}
