import axios from 'axios'

export function rafatrae(){
    console.log("mostrando paises");
    return function(dispatch){
      axios.get('http://localhost:3001/countries')  
      .then((pmf) => {   
        dispatch({
          type: "paises", 
          payload: pmf.data
        })
      })
      .catch(error =>{console.log('esto es lo que pasa   :'+error)});
    } ;
}

export function rafaturist(){
  console.log("mostrando paises");
  return function(dispatch){
    axios.get('http://localhost:3001/activity')  
    .then((pmf) => {   
      dispatch({
        type: "turistica", 
        payload: pmf.data
      })
    })
    .catch(error =>{console.log('esto es lo que pasa   :'+error)});
  } ;
}


export function ordenar(payload) {
  console.log('accion ordenar con payload gual a:');
  console.log(payload);
  return  { type: "orden", payload };
}


export function filtros(payload) {
  console.log('accion filtos con payload gual a:');
  console.log(payload);
  return  { type: "filtos", payload };
}

