import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

// Pagina para iniciar sesion
const LoginPage = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        event.preventDefault()

        axios.post('http://localhost:3001/grafica/users/login', user)
            .then(response => {
                console.log(response.data);
            })

        setUser({
            email: '',
            password: ''
        })
    }

    return (
        <div className='containerLogin'>
            <div className='messageLogin'>
                <h1>¡Bienvenido de nuevo a Grafica Angel!</h1>
                <p>Regístrate y Personaliza tus Propios Productos Sublimables</p>
            </div>
            <div className='containerFormLogin'>
                <Link to='/' className='backPrincipalPage'>Inicio</Link>
                <div className='containerTitleForm'>
                    <p>Inicio de Sesion</p>
                </div>
                <form onSubmit={login} className='formLogin'>

                    <input placeholder='Email' type="text" name="email" onChange={onChangeHandler} value={user.email} />

                    <input placeholder='Contraseña' type="password" name="password" onChange={onChangeHandler} value={user.password} />

                    <button className='buttonLogin' type="submit">Iniciar Sesion</button>

                    <p className='noAccount'>¿Aún no tienes una cuenta?</p>

                    <Link to='/register'><button className='buttonLogin' type='button'>Registrarse</button></Link>

                </form>
            </div>
        </div>
    )
}

export default LoginPage 