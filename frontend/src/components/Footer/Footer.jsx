import './Footer.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import web from '../../assets/web.png'
import instagram from '../../assets/instagram.png'
const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className='angel__footer section__padding'>
                <div className='angel__footer-links'>
                    <div className='angel__footer-links_div'>
                        <h4>Compañía</h4>
                        <a href="/">
                            <p className='links'>Sobre Nosotros</p>
                        </a>
                        <a href="/">
                            <p className='links'>FAQs</p>
                        </a>
                        <a href="/">
                            <p className='links'>Reseñas</p>
                        </a>
                    </div>
                    <div className='angel__footer-links_div'>
                        <h4>Soporte</h4>
                        <a href="/">
                            <p className='links'>Contacto</p>
                        </a>
                        <a href="/">
                            <p className='links'>Métodos de Pago</p>
                        </a>
                        <a href="/">
                            <p className='links'>Legal</p>
                        </a>
                    </div>
                    <div className='angel__footer-links_div'>
                        <h4>Productos</h4>
                        <a href="/">
                            <p className='links'>Tienda</p>
                        </a>
                        <a href="/">
                            <p className='links'>Mayorista</p>
                        </a>
                        <a href="/">
                            <p className='links'>Solicitar Presupuesto</p>
                        </a>
                    </div>
                    <div className='angel__footer-links_div'>
                        <h4>Social</h4>
                        <div className='socialmedia'>
                        <p><img src={facebook} alt="" className='redes' /></p>
                        <p><img src={instagram} alt="" className='redes'/></p>
                        <p><img src={twitter} alt="" className='redes'/></p>
                        <p><img src={web} alt="" className='redes'/></p>
                    </div>
                    </div>

                    <hr />
                    <div className='angel__footer-below'>
                        <div className='angel__footer-copyright'>
                            <p>@{new Date().getFullYear()} Todos los derechos reservados.</p>
                        </div>
                    </div>
                    <div className='angel__footer-below-links'>
                        <a href="">
                            <div><p className='links'>Términos y Condiciones</p></div>
                        </a>
                        <a href="">
                            <div><p className='links'>Privacidad</p></div>
                        </a>
                        <a href="">
                            <div><p className='links'>Seguridad</p></div>
                        </a>
                        <a href="">
                            <div><p className='links'>Declaración de Cookies</p></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer