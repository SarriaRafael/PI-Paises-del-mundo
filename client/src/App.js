import './App.css';

import { Routes, Route } from "react-router-dom";
import Landing from './components/landing/landing';
import Home from './components/home/home';
import Nwctt from './components/nwctt/nwctt';
import Detalle from './components/detalle/detalle';
 import { useDispatch } from 'react-redux';
 import { rafatrae } from './actions';



function App() {

   let dispatch= useDispatch();
   dispatch(rafatrae());

  return (
    <div className="App">
          
      <Routes>
        <Route path="/" element={< Landing />}  />
        <Route path="/home" element={< Home />}  /> 
        <Route path="/activitynew" element={<Nwctt/>} />
        <Route path="/detalle/:id" element={< Detalle />} />
      </Routes>
            
    </div>
  );
}

export default App;

// `/detalle/${id}`
