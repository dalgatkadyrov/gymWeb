import './App.css';
import About from './components/About/About'
import Home from './components/Home/Home'
import Reserve from './components/Reserve/Reserve'
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/reserve' element={<Reserve/>} />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
