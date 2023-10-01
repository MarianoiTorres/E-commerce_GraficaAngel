import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import { getAllProducts } from './Redux/Actions/Actions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {    // Prueba para cargar el estado global
    dispatch(getAllProducts())
    console.log('listo');
  }, [])

  return (
    <>
      <h1>MAIN</h1>
    </>
  )
}

export default App
