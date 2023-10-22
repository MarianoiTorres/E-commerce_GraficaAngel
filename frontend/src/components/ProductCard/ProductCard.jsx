import { useSelector } from 'react-redux';
import  './ProductCard.css'

// TARJETA DE CADA PRODUCTO 
const ProductCard = ({ id, name, detail, image, price, stock, onShowModal }) => {

    const userAuth = useSelector(state => state.userAuth)

    const agregarAlCarrito = () => {

        if (userAuth.authenticated) {
            const cartLocalStorage = JSON.parse(localStorage.getItem('carrito')) || [];

            const product = {
                name,
                price,
                quantity: 1,
                id: id,
                image,
                stock
            }
            const productFound = cartLocalStorage.find(product => product.id === id)
            if (productFound) return
            cartLocalStorage.push(product);

            localStorage.setItem('carrito', JSON.stringify(cartLocalStorage));
        }
        else {
            onShowModal()
        }
    }

    return (
        <div className="containercard">
            <div className="card-content">
                <img src={image} alt="" className="imagencard" />
                <div className="info-container">
                    <div className="info">{detail}</div>
                </div>
            </div>
            <p className="nombrecard">{name}</p>
            <p className="preciocard">${price}</p>
            <button onClick={agregarAlCarrito} className='agregaralcarrito'>Agregar al carrito</button>
        </div>
    )
}

export default ProductCard