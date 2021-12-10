import  "./nwctt.css" 
import React, { useState } from 'react';

import { useSelector } from "react-redux"

import { Link } from "react-router-dom";

import axios from 'axios'

export default function Nwctt(){
    
    let cosas = useSelector((state)=>state.countries  ); //countries
        
        const [activcout,setActivcout]= useState([]);  // lista de paises vinculados
        const [dsp, setDsp] = useState([]);             // pais a vincular
        const [existen, setExisten]= useState([]);
        const [activ, setActiv]= useState([]);

        const [campos, setCampos] = useState({
            name: '',
            season: '',
            difficulty: '',
            duration: '',
            idpais: ''
        })

        let actvturis = useSelector((state)=>state.activities  ); //actividades

         function anyChange(e) {
            
                 setCampos({ ...campos, [e.target.name]: e.target.value });
                 console.log("dentro de activmen");
                 console.log(actvturis);
                 // toLocaleLowerCase()  includes()
          let h = actvturis.filter((k) => k.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
           if (e.target.value.length<1)h=[];         
  
           h = h.map(x=> {return {id: x.id, name: x.name}} );
           setExisten(h);
           console.log(h);
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
               if (dsp.length>0) {
                   
               
               setCampos({...campos, idpais: dsp[0].id});  //await axios.post("http://localhost:3001/activity", campos);     

                setActivcout([dsp[0].name]);     // ??????????????? setActivcout([...activcout,dsp[0].name]); 
                console.log(campos);
                //despues de llamar a axios.....);
            }

        }

            function traerunpais(e){
               // toLocaleLowerCase()  includes()
               let h = cosas.filter((k) => k.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())  );
               if (e.target.value.length<1)h=[];

               let k = h.map(x=> {return {id: x.id, name: x.name}} );
               setDsp(k);
               h=[];
               k=[];
                               
            }

               function desasignar(e) {
                   e.preventDefault();
                   setCampos({
                       ...campos,
                       idpais: ''
                });

                setActivcout([]);

               }
    


    return <div id="tercero" >
         <h1 id='headnew' >Ingreso actividades y relaciones nuevas </h1>
        
        <form  onSubmit={handlerSubmit}  className="m1"   >
            <div className="pareja" id= "inputContainer" >
                <label className="ingresar" >Nombre de la actividad</label>
                <input type="text" placeholder='Nombe' name="name" value={campos.name} onChange={anyChange} className="toDoInput" />          
            </div>  
            <div  className="pareja" >
                <label className="ingresar" >Dificultad de la actividad</label>
                <input name="difficulty" value={campos.difficulty} min='1' max='5' placeholder='De 1 a 5' onChange={(e) => anyChange(e)} className="toDoInput" />
            </div>
            <div className="pareja" > 
                <label className="ingresar" >Duracion de la actividad(horas)</label> 
                <input type="text" placeholder='De 1 a 24' name="duration" value={campos.duration}  min='1' max='24' onChange={anyChange} className="toDoInput" />
            </div>
            <div className="pareja" >
                <label className="ingresar" >Temporada para realizar la actividad</label>
                <select name="season"  id='iTemporada' onChange={(e) => anyChange(e)} className="toDoInput" >
                    <option value=''> -- </option>
                    <option value="summer">Verano</option>
                    <option value="autumn">Otoño</option>
                    <option value="winter">Invierno</option>
                    <option value="spring">Primavera</option>
                </select>
            </div>
            <button type='submit' className= "addButton" >Ingresar</button>            

        </form>

        <div className="pareja"  >
            { existen.map(m =>  <div key = {m.name} className="emergen" >Actividad:   {m.name}    </div>)}
            
        </div>
        
        <form onSubmit= {asingactivcout} className="m1"  >
            <div className="pareja" >
                <label className="ingresar" >País a relacionar</label>
                <input type="text" placeholder="Pais Tal..."   disabled= {false}  onChange={traerunpais} className="toDoInput"  />
            </div>
    
            <div className="pareja" >
                {activcout.length>0?<h2 className="ingresar" >Pais a relacionar:</h2>:""}
                { activcout.map(m =>  <div key = {m}  className="ingresar"  > {m} Ó <button  onClick={desasignar}  >X</button> </div>) }
            </div>
        </form>
        
            <div className="pareja" >        
                { dsp.map(m=> dsp.map(m =>  <div key = {m.name} className="ingresar" >{m.name}    </div>)  ) }
                {dsp.length>0?<button  onClick={asingactivcout} className= "addButton" >Asignar</button>:"" }
                                
                
               
                <Link to="/home" className="volver" >volver</Link>
            </div>
    </div>
}
