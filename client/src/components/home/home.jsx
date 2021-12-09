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
          <h1> HOME </h1>
          <Link to="/activitynew"  className= "cabiar"   > ingresar nueva actividad</Link>
          
               <Menu/>          
          
        </div>
          
}
