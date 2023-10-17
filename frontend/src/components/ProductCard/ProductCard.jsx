import style from './ProductCard.css'

// TARJETA DE CADA PRODUCTO 
const ProductCard = ({ id, name, detail, image, price, stock }) => {

    const agregarAlCarrito = () => {
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
        if(productFound) return
        cartLocalStorage.push(product);

        localStorage.setItem('carrito', JSON.stringify(cartLocalStorage));
    }

    return (
        <div className="containercard">
            <button onClick={agregarAlCarrito} className='agregaralcarrito'>Agregar al carrito</button>
            <p className="nombrecard">{name}</p>
            <p className="detallescard">{detail}</p>
            <img src={image} alt="" className="imagencard" />
            <p className="preciocard">${price}</p>
        </div>
    )
}

export default ProductCard