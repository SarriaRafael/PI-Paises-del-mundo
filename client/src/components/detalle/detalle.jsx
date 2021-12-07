import { Link } from "react-router-dom"
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import axios from 'axios'

export default function Detalle(){
    let id= useParams().id
    console.log(id);
    let lospaises = useSelector((t)=>t.countries )
    let unpais= lospaises.filter(p => p.id===id);
    console.log(unpais);
    let actividades=[];

    

    function unotraerafa(){
        console.log("mostrando un pais");    
                    axios.get('http://localhost:3001/countries/'+id)  
                    .then((pmf) => { 
                           console.log(pmf.data);
                           actividades = pmf.data.activities
                           console.log(actividades)
                    })
                    .catch(error =>{console.log('esto es lo que pasa   :'+error)});            
    }

    unotraerafa();

    


    return <div>
        <h3>El Detalle de cada País</h3>
        <h2>{unpais[0].name}</h2>
        <img src={unpais[0].imgflag} alt="Bandera" />
        <h4> <Link to= "/home" > HOME </Link>  </h4> 
 
    </div>
}