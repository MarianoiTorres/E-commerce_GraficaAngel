import './SideBar.css'
import logo from '../../assets/logosinfondo.png'

const SideBar = ({setCurrentSelection}) => {

    return (
        <div className='containerSideBar'>
            <div className='containerLogo'>
                <img src={logo} alt="" />
            </div>
            <p>Menú Principal</p>
            <ul className='ulMenu'>
                <li onClick={() => setCurrentSelection('usuarios')}>Usuarios</li>
                <li onClick={() => setCurrentSelection('ventas')}>Ventas</li>
                <li onClick={() => setCurrentSelection('productos')}>Productos</li>
            </ul>
            <p>Opciones de Cuenta</p>
            <ul className='ulAccount'>
                <li>Inicio</li>
                <li>Cerrar sesion</li>
            </ul>
        </div>
    )
}

export default SideBar