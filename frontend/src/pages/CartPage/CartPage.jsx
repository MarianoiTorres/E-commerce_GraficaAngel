import { useEffect, useState } from "react"
import axios from 'axios'
import style from './CartPage.module.css'

// El carrito de compras

const CartPage = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))
        if (carritoLocalStorage) {
            setCart(carritoLocalStorage)
        }
    }, [])


    // V1
    const crearOrden = () => {

        const data = cart.map(product => {
            return {
                title: product.name,
                unit_price: product.price,
                currency_id: "ARS",
                quantity: product.quantity,
                id: product.id
            }
        })
        axios.post('http://localhost:3001/grafica/sales/create-order', { cart: data, userId: 1 })
            .then(response => {
                console.log(response.data);
                window.open(response.data, '_blank')
            })
    }

    const restarCantidad = (id) => {
        const updateCart = cart.map((product) => {
            if (product.id === id) {
                if (product.quantity === 0) return product
                return { ...product, quantity: product.quantity - 1 }
            }
            return product
        })
        setCart(updateCart)
    }

    const aumentarCantidad = (id) => {
        const updateCart = cart.map((product) => {
            if (product.id === id) {
                if (product.quantity === product.stock) return product
                return { ...product, quantity: product.quantity + 1 }
            }
            return product
        })
        setCart(updateCart)
    }

    return (
        <div className={style.container}>
            <div className={style.products}>
                {/* USA EL MISMO FORMATO DE AUMENTAR O RESTAR CANTIDAD (EL NUMERO CON LOS BOTONES) */}
                <div className={style.product}>
                    <img src='https://imgs.search.brave.com/epwPAreUxFyJ6stGEvpSwOX7QpJ51g9fnEfs2phquFw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZWxlbWVudGkuY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA4LzI5MTkz/MDM1LzVlYjFlYzhi/NjBmOTcuanBn' alt="" className={style.image} />
                    <p>Taza</p>
                    <p>Precio: 500</p>
                    <div className={style.quantity}>
                        <button onClick={() => restarCantidad(product.id)}>-</button>
                        <p>1</p>
                        <button onClick={() => aumentarCantidad(product.id)}>+</button>
                    </div>
                </div>
                <div className={style.product}>
                    <img src='https://imgs.search.brave.com/epwPAreUxFyJ6stGEvpSwOX7QpJ51g9fnEfs2phquFw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZWxlbWVudGkuY29t/LmFyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA4LzI5MTkz/MDM1LzVlYjFlYzhi/NjBmOTcuanBn' alt="" className={style.image} />
                    <p>Taza</p>
                    <p>Precio: 500</p>
                    <div className={style.quantity}>
                        <button onClick={() => restarCantidad(product.id)}>-</button>
                        <p>1</p>
                        <button onClick={() => aumentarCantidad(product.id)}>+</button>
                    </div>
                </div>
            </div>
            <div>
                <p>Total: {cart.reduce((acumulador, producto) => {
                    const subtotal = producto.price * producto.quantity;
                    return acumulador + subtotal;
                }, 0)}</p>
                <button>Borrar carrito</button>
                <button onClick={crearOrden}>Comprar</button>
            </div>
        </div>
    )
}

export default CartPage




/*

========== ESTO DEPENDE DE LA BASE DE DATOS (NO ELIIMINAR) ========

cart.map((product) => {
    return (
        <div className={style.product}>
            <img src={product.image} alt="" className={style.image} />
            <p>{product.name}</p>
            <p>Precio: {product.price}</p>
            <div className={style.quantity}>
                <button onClick={() => restarCantidad(product.id)}>-</button>
                <p>{product.quantity}</p>
                <button onClick={() => aumentarCantidad(product.id)}>+</button>
            </div>
        </div>
    )
})



TOTAL

<p>Total: {cart.reduce((acumulador, producto) => {
                    const subtotal = producto.price * producto.quantity;
                    return acumulador + subtotal;
                }, 0)}</p>
*/