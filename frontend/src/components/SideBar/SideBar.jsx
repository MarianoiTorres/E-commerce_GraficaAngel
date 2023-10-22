import './SideBar.css'
import logo from '../../assets/logosinfondo.png'
import { FaUsers, FaStoreAlt } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { IoIosCreate } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { closeSesion } from '../../Redux/Actions/Actions';

const SideBar = ({ setCurrentSelection }) => {

    const dispatch = useDispatch()

    const closeSesionhandleLogout = () => {
        dispatch(closeSesion())
    }

    return (
        <div className='containerSideBar'>
            <div className='containerLogo'>
                <img src={logo} alt="" />
            </div>
            <p className='titlesSideBar'>Menú Principal</p>
            <ul className='ulMenu'>
                <li onClick={() => setCurrentSelection('usuarios')}><FaUsers />Usuarios</li>
                <li onClick={() => setCurrentSelection('ventas')}><FaMoneyBillTrendUp />Ventas</li>
                <li onClick={() => setCurrentSelection('productos')}><FaStoreAlt />Productos</li>
                <li onClick={() => setCurrentSelection('NewProduct')}><IoIosCreate />Crear Producto</li>
            </ul>
            <p className='titlesSideBar'>Opciones de Cuenta</p>
            <ul className='ulAccount'>
                <li><Link to='/'><AiFillHome />Inicio</Link></li>
                <li><Link to='/' onClick={closeSesionhandleLogout}><FiLogOut  />Cerrar sesion</Link></li>
            </ul>
        </div>
    )
}

export default SideBar