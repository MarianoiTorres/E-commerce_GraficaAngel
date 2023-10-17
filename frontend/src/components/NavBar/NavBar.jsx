import './NavBar.css'
import {Component} from "react";
import logo from './../../assets/logosinfondo.png'
import carrito from './../../assets/carrito.png'
import {NavLink} from "react-router-dom" 

class NavBar extends Component {
    state={clicked: false};
    handleClick=() => {
        this.setState({clicked:!this.state.clicked})
    }
render(){
    return (

        <>
        <nav><a href="#">
            <img src={logo} alt="" className='logo'/></a>
            <div>
                <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li>
                        <NavLink href="/" to="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" >Tienda</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Sobre Nosotros</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active" >Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Iniciar Sesión</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Registrar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart"><img src={carrito} alt="icono de carrito" className='carrito'/></NavLink>
                    </li>
                    
                </ul>
            </div>
            <div id='mobile' onClick={this.handleClick}>
                <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
              
            </div>
                
            </nav>
            <hr />
        </>
    )
}
}
export default NavBar