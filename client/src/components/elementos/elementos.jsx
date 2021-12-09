import {Link} from 'react-router-dom'
import './elementos.css'

export default function Elelmentos({id, name, imgflag, continent }){
    return  <div className='contenendor' >
            
            <h4 className='element'  > <Link to= {`/detalle/${id}`} className='element'  > {name} </Link> contiente: {continent} </h4> 
                        
          </div>
            
  }

  //  <Link to= {`/movie/${m.imdbID}`} > <li> {m.Title} </li> </Link>