import './NavBar.css'
import {Component} from "react";
import logo from './../../assets/logosinfondo.png'
import carrito from './../../assets/carrito.png'

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
                        <a href="" className='active'>Inicio</a>
                    </li>
                    <li>
                        <a href="">Tienda</a>
                    </li>
                    <li>
                        <a href="">Sobre Nosotros</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                    <li>
                        <a href="">Iniciar Sesión</a>
                    </li>
                    <li>
                        <a href="">Registrar</a>
                    </li>
                    <li>
                        <a href=""><img src={carrito} alt="icono de carrito" className='carrito'/></a>
                    </li>
                    
                </ul>
            </div>
            <div id='mobile' onClick={this.handleClick}>
                <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
              
            </div>
                
            </nav>
        </>
    )
}
}
export default NavBar