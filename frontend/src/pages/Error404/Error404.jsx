import style from './Error404.css'
import NavBar from './../../components/NavBar/NavBar'
import Footer from './../../components/Footer/Footer'
import error from './../../assets/error404.png'
import { Link } from 'react-router-dom';
const Error404Page = () => {
    return (
        <div className='contenedorerror'>
        <div className='error404'>
            <div><img src={error} alt="error404" className='error'/></div>
            <div><h1 className='oops'>Oops! Error 404</h1>
        
            <p className='losiento'>Lo siento, parece que algo nos falta.</p>
            <Link to="/"><button className='botonvolver'>Inicio</button></Link>
            </div>
        </div>
        </div>
    )
}

export default Error404Page