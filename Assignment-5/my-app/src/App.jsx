import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landingpage from './Landingpage';
import Allcomponent from './components/All_component';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landingpage/>}/>
        <Route exact path='/Allcomponent' element={<Allcomponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;