import { useEffect, useState } from "react"
import axios from 'axios'
import './CartPage.css'
import NavBar from "../../components/NavBar/NavBar"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AiFillCloseCircle } from 'react-icons/ai';
// El carrito de compras
const CartPage = () => {

    const [cart, setCart] = useState([])
    const [deliver, setDeliver] = useState('')

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
        axios.post('http://localhost:3001/grafica/sales/create-order', { cart: data, userId: 1, deliver: deliver })
            .then(response => {
                console.log(response.data);
                window.open(response.data, '_blank')
            })
    }

    const restarCantidad = (id) => {
        const updateCart = cart.map((product) => {
            if (product.id === id) {
                if (product.quantity === 1) return product
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

    const eliminarProductoCarrito = (id) => {
        const indexToDelete = cart.findIndex(item => item.id === id)

        if(indexToDelete !== -1)
        {
           const newCart = cart.splice(indexToDelete, 1)
           console.log(newCart);
           setCart(newCart)
        }

        localStorage.setItem('carrito', JSON.stringify(cart));
    }

    return (
        <div className="containerCart">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th className="quantityTh">Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((product) => {
                            return (
                                <tr className="product">
                                    <td className='containerImageProduct'>
                                        <AiFillCloseCircle className="deleteProductCart" onClick={() => eliminarProductoCarrito(product.id)}/>
                                        <img src={product.image} alt="" className='imageProduct' />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td className="quantityTd">
                                        <button onClick={() => restarCantidad(product.id)} className="buttonQuantity">-</button>
                                        <p>{product.quantity}</p>
                                        <button onClick={() => aumentarCantidad(product.id)} className="buttonQuantity">+</button>
                                    </td>
                                    <td>${product.price * product.quantity}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
            <div className="containerTotalCart">
                <div className="totalCart">
                    <div className="containerTitleTotalCart">
                        <p>Total Carrito</p>
                    </div>
                    <div className="total">
                        <p>Subtotal </p>
                        <p>$
                            {cart.reduce((acumulador, producto) => {
                                const subtotal = producto.price * producto.quantity;
                                return acumulador + subtotal;
                            }, 0)}
                        </p>
                    </div>
                    <DropdownButton  title="Opciones de Envío" className="dropDownCart " >
                        <Dropdown.Item>Elija Cómo Recibir su Pedido</Dropdown.Item>
                        <Dropdown.Item onClick={() => setDeliver('Retirar en Local')}>Retirar en local</Dropdown.Item>
                        <Dropdown.Item onClick={() => setDeliver('Envio a Domicilio')}>Envio a domicilio</Dropdown.Item>
                    </DropdownButton>
                    <div className="total">
                        <p>Total </p>
                        <p>$
                            {cart.reduce((acumulador, producto) => {
                                const subtotal = producto.price * producto.quantity;
                                return acumulador + subtotal;
                            }, 0)}
                        </p>
                    </div>
                    <div className="containerButtonBuy">
                        <button onClick={crearOrden}>Comprar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CartPage

