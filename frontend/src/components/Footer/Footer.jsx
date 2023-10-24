import './Footer.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import web from '../../assets/web.png'
import { Link } from 'react-router-dom'
import instagram from '../../assets/instagram.png'
const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className='angel__footer section__padding'>
                <div className='angel__footer-links'>
                    <div className='angel__footer-links_div'>
                        <h4>Compañía</h4>
                        <Link to='/about' >
                            <p className='links'>Sobre Nosotros</p>
                        </Link >
                    </div>
                    <div className='angel__footer-links_div'>
                        <h4>Soporte</h4>
                        <Link to='/contact'>
                            <p className='links'>Contacto</p>
                        </Link >
                        <Link to='*' >
                            <p className='links'>Métodos de Pago</p>
                        </Link >
                        
                    </div>
                    <div className='angel__footer-links_div'>
                        <h4>Productos</h4>
                        <Link to='/products'>
                            <p className='links'>Tienda</p>
                        </Link>
                        <Link to='/contact'>
                            <p className='links'>Solicitar Presupuesto</p>
                        </Link>
                    </div>
                    <div className='angel__footer-links_div'>
                        <h4>Social</h4>
                        <div className='socialmedia'>
                        <a href='https://www.facebook.com/profile.php?id=100066881823608' target='_blank'><img src={facebook} alt="" className='redes' /></a>
                        <a href='https://www.instagram.com/graficaangellomas/' target='_blank'><img src={instagram} alt="" className='redes'/></a>
                        <a href='' target='_blank'><img src={web} alt="" className='redes'/></a>
                    </div>
                    </div>

                    <hr />
                    <div className='angel__footer-below'>
                        <div className='angel__footer-copyright'>
                            <p>@{new Date().getFullYear()} Todos los derechos reservados.</p>
                        </div>
                    </div>
                    <div className='angel__footer-below-links'>
                        <Link to="*">
                            <div><p className='links'>Términos y Condiciones</p></div>
                        </Link>
                        <Link to="*">
                            <div><p className='links'>Privacidad</p></div>
                        </Link>
                        <Link to="*">
                            <div><p className='links'>Seguridad</p></div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer