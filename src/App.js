import './App.css';
import React from 'react';
import Home from './Home';
import PickWinner from './PickWinner';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/PickWinner'}>PickWinner</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/PickWinner' element = {<PickWinner/>}/>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );


}

export default App;
