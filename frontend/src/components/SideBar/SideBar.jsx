import './SideBar.css'
import logo from '../../assets/logosinfondo.png'
import { FaUsers, FaStoreAlt} from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { IoIosCreate } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

const SideBar = ({setCurrentSelection}) => {

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
                <li><AiFillHome />Inicio</li>
                <li><FiLogOut/>Cerrar sesion</li>
            </ul>
        </div>
    )
}

export default SideBar