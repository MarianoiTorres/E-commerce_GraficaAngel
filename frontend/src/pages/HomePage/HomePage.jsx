import { useState } from "react"
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import "./homePage.css"
import publicidad from '../../assets/spotPublicitario.mp4'

// Pagina de inicio
const HomePage = () => {
    // DEJO ESTO POR SI LES INTERESA, ES UN CARRUSEL DE IMAGENES DE LA IMPRENTA

    // const images = [
    //     'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     'https://images.unsplash.com/photo-1565562141896-9e2423ad19b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltcHJlbnRhfGVufDB8MHwwfHx8Mg%3D%3D',
    //     'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1498&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

    // const [selectedIndex, setSelectIndex] = useState(0)
    // const [selectedImage, setSelectImege] = useState(images[0])
    // const [loaded, setLoaded] = useState(false)

    // const selectNewImage = (index, images, next = true) => {
    //     setLoaded(false)
    //     const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0
    //     const nextIndex = next ? (condition ? selectedIndex + 1 : 0 ) : condition ? selectedIndex - 1 : images.length - 1
    //     setSelectImege(images[nextIndex])
    //     setSelectIndex(nextIndex)
    // }

    // const previous = () => {
    //     selectNewImage(selectedIndex, images, false)
    // }

    // const next = () => {
    //     selectNewImage(selectedIndex, images)
    // }

    const productsState = useSelector((state) => state.products)

    return (
        <div>
            {/* <div className="boxCarrusel">
                <button className='botones' onClick={previous}> {'<'} </button>
                <img className={loaded ? "carruselDos" : "carruselUno"} src={selectedImage} alt='Carrusel' onLoad={()=>{setLoaded(true)}}/>
                <button className='botones' onClick={next}>{'>'}</button>
            </div> */}

            <video width='80%' autoPlay muted loop src={publicidad}/>

            <div className="box">
                <h2>¡Aprobecha estos descuentos!</h2>
            </div>

            <div className="box">
                <h2>Productos Nuevos</h2>
            </div>
            <div className="box">
                <h2>Productos mas Vendidos</h2>
            </div>

        </div>
    )
}

export default HomePage