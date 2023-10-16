import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'
import axios from 'axios'
import { useState } from 'react';

// Pagina para registrarse 
const RegisterPage = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const createNewUser = (event) => {
        event.preventDefault()

        axios.post('http://localhost:3001/grafica/users/register', user)

        setUser({
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        })

        navigate('/login')
    }

    return (
        <div className='containerRegister'>
            <div className='messageRegister'>
                Bienvenido
            </div>
            <div className='containerForm'>
                <div className='containerTitleForm'>
                    <p>Registro</p>
                </div>
                <form onSubmit={createNewUser} className='formRegister'>
                    <input placeholder="Nombre" type="text" name="firstname" onChange={onChangeHandler} value={user.firstname} />

                    <input placeholder="Apellido" type="text" name="lastname" onChange={onChangeHandler} value={user.lastname} />

                    <input placeholder="Edad" type="number" name="age" onChange={onChangeHandler} value={user.age} />

                    <input placeholder="Celular" type="tel" name="phone" onChange={onChangeHandler} value={user.phone} />

                    <input placeholder="Email" type="text" name="email" onChange={onChangeHandler} value={user.email} />

                    <input placeholder="Contraseña" type="password" name="password" onChange={onChangeHandler} value={user.password} />

                    <button className='buttonRegister' type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage