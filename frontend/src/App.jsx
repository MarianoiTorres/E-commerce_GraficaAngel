import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import { getAllProducts } from './Redux/Actions/Actions';
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import AboutPage from './pages/AboutPage/AboutPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DetailPage from './pages/DetailPage/DetailPage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {

  const location = useLocation()

  const dispatch = useDispatch()

  useEffect(() => {    // Prueba para cargar el estado global
    dispatch(getAllProducts())
    console.log('listo');
  }, [])

  return (
    <div className='app'>
      {
        <NavBar />
      }
      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/detail' element={<DetailPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
      </div>
      {
        <Footer/>
      }
    </div>
  )
}

export default App
