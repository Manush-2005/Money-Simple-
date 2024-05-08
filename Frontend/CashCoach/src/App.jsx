import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Homepage from './Pages/Homepage';
import Analysispage from './Pages/Analysispage';
import './App.css'
import Signup from './Pages/Signuppage';
import Loginpage from './Pages/Loginpage';

function App() {


  return (
    <Router>
      <Routes>

        <Route path='/' element={<Homepage/>}/>
        <Route path='/Processing' element={<Analysispage/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/login' element={<Loginpage/>}/>
      </Routes>


    </Router>
 
  )
}

export default App
