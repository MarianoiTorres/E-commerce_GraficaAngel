import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import style from './ProductsPage.css'
import ModalLogin from '../../components/ModalLogin/ModalLogin';
import { useState } from 'react';

// Pagina que va a tener todos los productos
const ProductsPage = () => {

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    const productsState = useSelector((state) => state.products)

    return (
        <>


            <div className="containerrCards">
                <div className="containerCards">
                    {
                        productsState.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    detail={product.detail}
                                    image={product.image}
                                    price={product.price}
                                    stock={product.stock}
                                    onShowModal={handleShowModal}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <ModalLogin show={showModal} onHide={handleHideModal}/> 
        </>
    )
}

export default ProductsPage