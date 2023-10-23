import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSales, getAllUsers } from "../../Redux/Actions/Actions";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sales.css'
import ventas from "./../../assets/ventas.png"
const Sales = () => {
    const users = useSelector(state => state.sales)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllSales())
        console.log('listo Sales');
    }, [])

    return (
        <div className='users'>
            <div className="containerTitleUser">
                <img src={ventas} alt="" className="ventastitulo"/>
            </div>


            <Table responsive>
                <thead className="tableHead">
                    <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Metodo de pago</th>
                        <th>Metodo de entrega</th>
                        <th>Fecha</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.Product.name}</td>
                            <td>{user.payment_method}</td>
                            <td>{user.deliver}</td>
                            <td>{user.createdAt.split("T")[0]}</td>
                            <td>{user.Product.price}</td>
                            <td>{user.quantity}</td>
                            <td>{user.total}</td>
                            <td>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Sales