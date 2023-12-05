import { useState } from 'react'
import ItemListContainer from './Componentes/itemListContainer'
import Navbar from './Componentes/Navbar/Navbar'
import './App.css'

function App() {
  
  return (
   
      <div  id='app'>
      <Navbar/> 
      <ItemListContainer saludo={"Bienvenido a Iuris Help"}/> 
      </div>
      
  )
}

export default App
