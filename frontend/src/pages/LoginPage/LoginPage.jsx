import { useNavigate } from 'react-router-dom';
import style from './LoginPage.css'
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


        
        <div className={style.form}>
         
            <form onSubmit={login} className={style.form}>
            
            <h1>Inicio de sesion</h1> 
               <div className='input1'>
                <input placeholder='Email' type="text" name="email" onChange={onChangeHandler} value={user.email} /> 
                </div>
                <div className='input2'>
                <input placeholder='Password' type="password" name="password" onChange={onChangeHandler} value={user.password} />
                </div>
               <div className='boton'>
                <button className={style.button} type="submit">Sign In</button>
                </div>

                <p>Don't have an account yet?</p>

                <Link to='/register'><button className={style.button} type='button'>Sign Up</button></Link>
                      
            </form>
            </div>
  
            
    ) 
}

export default LoginPage 