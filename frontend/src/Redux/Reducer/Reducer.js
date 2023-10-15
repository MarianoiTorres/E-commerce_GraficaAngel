import { DELETE_PRODUCT, DELETE_USER, GET_ALL_PRODUCTS, GET_ALL_SALES, GET_ALL_USERS, UPDATE_PRODUCT } from "../Actions/Actions"

const initialState = {
    products: [],
    users: [],
    sales: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case GET_ALL_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case GET_ALL_SALES: {
            return {
                ...state,
                sales: action.payload
            }
        }
        case UPDATE_PRODUCT: {

            const updatedProduct = action.payload; 
            const updatedProducts = state.products.map((product) => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                }
                return product;
            });

            return {
                ...state,
                products: updatedProducts
            }
        }
        case DELETE_PRODUCT: {
            console.log('reducer');
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }
        }
        default: {
            return state
        }
    }
}

export default reducer