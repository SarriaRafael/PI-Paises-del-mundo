import {Link} from 'react-router-dom'

export default function Elelmentos({id, name, imgflag, continent }){
    return  <div>
            
            <h4> <Link to= {`/detalle/${id}`} > {name} </Link> contiente: {continent} </h4> 
                        
          </div>
            
  }

  //  <Link to= {`/movie/${m.imdbID}`} > <li> {m.Title} </li> </Link>