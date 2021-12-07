import React, { useState } from 'react';

import { useSelector } from "react-redux"

import { Link } from "react-router-dom";

import axios from 'axios'

export default function Nwctt(){
    
    let cosas = useSelector((state)=>state.countries  ); //countries
        
        const [activcout,setActivcout]= useState([]);  // lista de paises vinculados
        const [dsp,setDsp] = useState([]);             // pais a vincular

        const [campos, setCampos] = useState({
            name: '',
            season: '',
            difficulty: '',
            duration: '',
            idpais: ''
        })

    
         function anyChange(e) {
             setCampos({ ...campos, [e.target.name]: e.target.value });
                
            }

         async function handlerSubmit(e){
                 e.preventDefault()
                 console.log(campos);

                 await axios.post("http://localhost:3001/activity", campos);

                 console.log("listo las actividades");

                alert("ACTIVIDAD CREADA")

                // setCampos({
                //     name: '',
                //     season: '',
                //     difficulty: '',
                //     duration: '',
                //     idpais: null
                //      })        
                    
             }


          async  function asingactivcout(e){
                e.preventDefault();
               // console.log(dsp);
               setCampos({...campos, idpais: dsp[0].id});
               

               //await axios.post("http://localhost:3001/activity", campos);     

                setActivcout([...activcout,dsp[0].name]);     // ???????????????
                console.log(campos);
                //despues de llamat a axios.....);



            }

            function traerunpais(e){
               
               let h = cosas.filter((k) => {  // toLocaleLowerCase()  includes()
                   
                   if(k.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))return k;
                }  );
               
                h = h.map(x=> {return {id: x.id, name: x.name}} );
               setDsp(h);
                
               
            }

               
    


    return <div>
        <Link to="/home">volver</Link>
        <h1>Ingreso de nueva actividad</h1>
        <form  onSubmit={handlerSubmit}      >
            
            <label htmlFor="">Nombre de la actividad</label>
            <input type="text" placeholder='Nombe' name="name" value={campos.name} onChange={anyChange} />
            <br />
            <label htmlFor="">Dificultad de la actividad</label>
            <input name="difficulty" value={campos.difficulty} min='1' max='5' placeholder='De 1 a 5' onChange={(e) => anyChange(e)} />
            <br />
            <label htmlFor="">Duracion de la actividad(horas)</label>            
            <input type="text" placeholder='De 1 a 24' name="duration" value={campos.duration}  min='1' max='24' onChange={anyChange} />
            <br />
            <label htmlFor="">Temporada para realizar la actividad</label>
            <select name="season"  id='iTemporada' onChange={(e) => anyChange(e)} >
                <option value=''> -- </option>
                <option value="summer">Verano</option>
                <option value="autumn">Otoño</option>
                <option value="winter">Invierno</option>
                <option value="spring">Primavera</option>
            </select>
            <br />
            <button type='submit' >Ingresar</button>            

        </form>

        <h2>Asignar a los paises con la nueva actividad</h2>

        <form onSubmit= {asingactivcout} >

            <label htmlFor="">Nombre del pais</label>
            <input type="text" placeholder="Pais Tal..."   disabled= {false}  onChange={traerunpais}   />
                          
            <ul> 
                { /* Aqui  para mostrar la lista emergente */}
                { dsp.map(m=> dsp.map(m =>  <li key = {m.name} >{m.name}    </li>)  ) }
                <button  type='submit' >Asignar</button>
            </ul>

            <div>
            <h2>Lista de paises con esta actividad</h2>
            <ul> 
                { activcout.map(m =>  <li key = {m} >{m}    </li>) }
               
            </ul>

            </div>


        </form>
    </div>
}
