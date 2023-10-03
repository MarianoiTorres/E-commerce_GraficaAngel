import { useNavigate } from 'react-router-dom';
import style from './RegisterPage.module.css'
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
        <div className={style.container}>
            <form onSubmit={createNewUser} className={style.form}>
                <input placeholder="Name" type="text" name="firstname" onChange={onChangeHandler} value={user.firstname} />

                <input placeholder="Surname" type="text" name="lastname" onChange={onChangeHandler} value={user.lastname} />

                <input placeholder="Email" type="text" name="email" onChange={onChangeHandler} value={user.email} />

                <input placeholder="Password" type="password" name="password" onChange={onChangeHandler} value={user.password} />

                <button className={style.button} type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default RegisterPage