import spotPublicitario from '../../assets/spotPublicitario.mp4'
import './Home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const HomePage = () => {
    const products = useSelector(state => state.products)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 300, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    
    const productsMostRecents = products.slice(0,10).sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
    });;

    console.log(products);
    return (
        <div className='containerHome'>
            <div className='containerVideo'>
                <video
                    width='100%'
                    muted
                    autoPlay
                    loop
                    src={spotPublicitario}
                    className='spot'
                />
                <div className='dark-overlay'>

                </div>
            </div>
            <div className='containerProductsHome '>
                <div className='productsHome'>
                    <h1>PRODUCTOS RECIENTES</h1>
                    <Carousel responsive={responsive} className='containerCardsCarousel'>
                        {productsMostRecents.map((card, index) => (
                          
                                <div className="containercard" key={index}>
                                    <div className="card-content">
                                        <img src={card.image} alt="" className="imagencard" />
                                        <div className="info-container">
                                            <div className="info">{card.detail}</div>
                                        </div>
                                    </div>
                                    <p className="nombrecard">{card.name}</p>
                                    <p className="preciocard">${card.price}</p>
                                    <button className='agregaralcarrito'>Agregar al carrito</button>
                                </div>
                            
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HomePage
