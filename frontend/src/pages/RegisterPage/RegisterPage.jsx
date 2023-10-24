import { Link, useNavigate } from 'react-router-dom';
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
        password: '',
        age: '',
        phone: ''
    })

    const onChangeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const createNewUser = async (event) => {
        event.preventDefault()
        const errors = Object.values(user)
        console.log(errors.includes(''));
        if(errors.includes('')) return
        const response = await axios.post('https://e-commercegraficaangel-production.up.railway.app/grafica/users/register', user)

        setUser({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            age: '',
            phone: ''
        })
        console.log(response.data);
        navigate('/login')
    }

    return (
        <div className='containerRegister'>
            <div className='messageRegister'>
                <h1>¡Bienvenido a Grafica Angel!</h1>
                <p>Regístrate y Personaliza tus Propios Productos Sublimables</p>
            </div>
            <div className='containerForm'>
                <Link to='/' className='backPrincipalPage'>Inicio</Link>
                <div className='loginLinkContainer'>
                    <p>¿Ya tienes una cuenta?</p>
                    <Link to='/login' className='goLoginPage'>Iniciar Sesion</Link>
                </div>
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