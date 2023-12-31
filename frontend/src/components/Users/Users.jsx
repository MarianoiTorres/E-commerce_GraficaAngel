import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../Redux/Actions/Actions";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Users.css'
import usuarios from './../../assets/usuarios.png'
const Users = () => {
    const users = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
        console.log('listo USERS');
    }, [])

    return (
        <div className='users'>
            <div className="containerTitleUser">
                <h1><img className="ventastitulo" src={usuarios} alt="" /></h1>
            </div>


            <Table responsive>
                <thead className="tableHead">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Mail</th>
                        <th>Edad</th>
                        <th>Número de Teléfono</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>{user.phone}</td>
                            <td className="tdButtonContainer"><button className='buttonDeleteUser' onClick={() => dispatch(deleteUser(user.id))}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Users