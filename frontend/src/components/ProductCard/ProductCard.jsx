import style from './ProductCard.module.css'

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
        <div className={style.container}>
            <button onClick={agregarAlCarrito}>Add Cart</button>
            <p className={style.nombre}>{name}</p>
            <p className={style.detalles}>{detail}</p>
            <img src={image} alt="" className={style.imagen} />
            <p className={style.precio}>{price}</p>
        </div>
    )
}

export default ProductCard