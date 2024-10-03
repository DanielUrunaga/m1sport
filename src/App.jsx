import React from 'react';
import Navbar from './components/Navbar';
import ItemsListContainer from './components/ItemsListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <ItemsListContainer presentacion="Bienvenido a M1 Sport"/>
    </div>
  )
}

export default App
