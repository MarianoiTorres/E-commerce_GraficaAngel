import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import style from './ProductsPage.css'

// Pagina que va a tener todos los productos
const ProductsPage = () => {

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
                            />
                        )
                    })
                }
            </div>
        </div>

        </>
    )
}

export default ProductsPage