import { Link } from "react-router-dom";
import './landing.css'


export default function Landing(){
       


  return  <div className= "Applanding">
          <h1 id='welcome' > ¡Vamos de turismo por todo el planeta! </h1>
          

          <Link to="/home"> <button id="start" >  <h1></h1>  </button>        </Link>
          
        </div>
          
}
