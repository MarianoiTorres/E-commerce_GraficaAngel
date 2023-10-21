import React, { useEffect, useState } from "react";
import logo from './../../assets/logosinfondo.png'
import carrito from './../../assets/carrito.png'
import { NavLink } from "react-router-dom";
import './NavBar.css'
import { useDispatch, useSelector } from "react-redux";
import { closeSesion } from "../../Redux/Actions/Actions";

const NavBar = () => {
    const dispatch = useDispatch()
    const [clicked, setClicked] = useState(false);
    const userAuth = useSelector(state => state.userAuth)

    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleLogout = () => {
        dispatch(closeSesion())
    }

    return (
        <>
            <nav>
                <a href="#">
                    <img src={logo} alt="" className='logo' />
                </a>
                <div>
                    <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Tienda</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Sobre Nosotros</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active">Contacto</NavLink>
                        </li>
                        {userAuth.authenticated === false && <li>
                            <NavLink to="/login">Iniciar Sesión</NavLink>
                        </li>}
                        {userAuth.authenticated === false && <li>
                            <NavLink to="/register">Registrar</NavLink>
                        </li>}
                        {userAuth.authenticated === true && userAuth.isAdmin === true && <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>}
                        <li>
                            <NavLink to="/cart">
                                <img src={carrito} alt="icono de carrito" className='carrito' />
                            </NavLink>
                        </li>
                        {userAuth.authenticated && <li onClick={handleLogout}>
                            Cerrar sesion
                        </li>}
                    </ul>
                </div>
                <div id='mobile' onClick={handleClick}>
                    <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
            <hr />
        </>
    );
};

export default NavBar;