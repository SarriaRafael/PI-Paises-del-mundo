import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filtros } from "../../actions";
import Ordenar from "../ordenar/ordenar";
//import './menu.css'


export default function Menu(){
    let dispatch= useDispatch();
    const [dsp,setDsp] = useState([]); 
    const [existen, setExisten] = useState([]); 
    const [filtcontin, setFiltcontin]= useState("todos");
    const [activfil, setActivfil]= useState("todos");

    const paismen= useSelector(p => p.countries)
    const activmen= useSelector(p => p.activities)
   

    function algotraer(e){
               
        let h = paismen.filter((k) => {  // toLocaleLowerCase()  includes()
            
            if(k.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))return k;
         }  );
         console.log(h);
         h = h.map(x=> {return {id: x.id, name: x.name}} );
         setDsp(h);     
        
     }
     function activtraer(e){
         console.log("dentro de activmen");
               console.log(activmen);
               setActivfil(e.target.value);
        let h = activmen.filter((k) => {  // toLocaleLowerCase()  includes()
            
            if(k.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))return k;
         }  );
         console.log(h);
         h = h.map(x=> {return {id: x.id, name: x.name}} );
         setExisten(h)
              
        
     }

     let m=paismen;
        let n=[];
    function handleChange(e){
       
        e.preventDefault()
        console.log(paismen);
        console.log("estos son los filtros: "+filtcontin+" y "+activfil);
        if(filtcontin!=="todos" ){
             m= paismen.filter(x => x.continent.includes(filtcontin));
        }
        if (activfil!=="todos"&&activfil.length>0) {
            m.map(f=>{
               let k = f.activities.filter(s=> s.name.toLocaleLowerCase().includes(activfil.toLocaleLowerCase()));
               if(k.length>0)n=n.concat(f);
               k=[];                
            console.log("toca esto tambien esto tambien esto tambien esto tambien");
          })   
          m=n;
        }
        console.log(m);
        console.log("el filtrado");
        console.log(n);

        dispatch(filtros(m)) 
    }

      


    return <div>
               
       <form>
                <input type="text"      onChange={(e) => activtraer(e)} /> 
                Filtrar países por tipo de actividad turística <br/>                  
                { existen.map(m =>  <div key = {m.name} >Actividad:   {m.name}    </div>)}
                    <br/>
               <label>Filtrar países por continente</label>

               <select name='filtro' onChange={(e) => setFiltcontin(e.target.value) }> 
                    <option value= "todos" >Todos</option>
                    <option value= 'Africa' >Africa</option> 
                    <option value= 'America' > America </option>
                    <option value= 'Asia' >Asia</option>
                    <option value= 'Antarctica'>Antartida</option>
                    <option value= 'Europe' >Europa</option>
                    <option value= 'Oceania'>Oceania</option>
               </select> 
               <br/> 
               <button onClick={(e)=>handleChange(e)} >Aplicar Filtros</button>             
       </form> 
       <label>Encontrar un país por nombre</label> 
       <input type="text"      onChange={(e) => algotraer(e)} /> <br/>
       { dsp.map(m =>  <div key = {m.name} >Pais: <Link to= {`/detalle/${m.id}`} > {m.name} </Link>   </div>)}
       <Ordenar/>
</div>
}