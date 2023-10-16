import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import style from './ProductsPage.module.css'
import styles from "./../../components/NavBar/NavBar.css"
import carrito from "./../../assets/carrito.png"
// Pagina que va a tener todos los productos
const ProductsPage = () => {

    const productsState = useSelector((state) => state.products)

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
        <div className={style.container}>
            <div className={style.containerCards}>
                {
                    productsState.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                detail={product.detail}
                                image={product.image}
                                price={product.price}
                                stock={product.stock}
                            />
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default ProductsPage