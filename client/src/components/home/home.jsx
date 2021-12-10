import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { rafatrae, rafaturist } from "../../actions";
import Menu from "../menu/menu";
import './home.css';


export default function Home(){
  let dispatch= useDispatch();

  dispatch(rafatrae());
  dispatch(rafaturist());

  return  <div id="segundo" >
                
          
            <div className="ingreboton" >  
            <Link to="/activitynew"  className= "cambiar"   > ok </Link>
            
            Ingresa nuevas actividades y nuevas ralciones   
            </div>
              
          
               <Menu/>          
          
        </div>
          
}
